import yargs, { Options as YOptions, Argv } from 'yargs';
import defaultOptions from '../configs/default.config';
import optionConfig from '../configs/options.config';
import {
  OptionConfig,
  OptionSetting,
  Options,
  PartialOpts,
  ReadOnlyOptions,
} from '../types/types';

interface YargsOptions {
  [key: string]: YOptions;
}

const mapOptions = (
  defaultOptions: ReadOnlyOptions,
  options: OptionConfig,
): OptionConfig => {
  return Object.keys(options).reduce(
    (opts: OptionConfig, val: string) => {
      opts[val] = options[val];

      if (defaultOptions[val] !== undefined) {
        opts[val].default = defaultOptions[val];
      }
      return opts;
    },
    <OptionConfig>{},
  );
};

const optionsMap = mapOptions(defaultOptions, optionConfig);
const mapToYargs = (options: OptionConfig): YargsOptions => {
  return Object.keys(options).reduce((opt: YargsOptions, val) => {
    const obj: OptionSetting = { ...options[val] };
    const { name } = obj;
    delete obj.name;
    const newObject: YOptions = {
      ...obj,
    };

    opt[name] = newObject;
    return opt;
  }, <YargsOptions>{});
};

const yargsOpts: YargsOptions = mapToYargs(optionsMap);
const mapYargsToOptions = (options: Argv): Options => {
  const argv = options.argv;
  // @ts-ignore
  if (typeof argv._[0] !== 'string' && argv._.length > 0) {
    throw new Error('First argument must be string or left blank');
  }
  const outOpts: PartialOpts = {
    // @ts-ignore
    name: argv._[0],
  };

  return Object.keys(argv).reduce((opts, val) => {
    const yObj = argv[val];
    const key = Object.keys(optionConfig).find(
      (k) => val === optionConfig[k]?.alias,
    );
    if (key !== undefined && opts[key] === undefined) {
      opts[key] = yObj;
    }

    return opts;
  }, <Options>outOpts);
};

const getArgs = (args: string[], options: YargsOptions): Argv => {
  const yargsOut = yargs(args).options(options);
  return yargsOut;
};

export const getArgValues = (args: string[]): Options => {
  console.log(args);
  return mapYargsToOptions(getArgs(args, yargsOpts));
};
