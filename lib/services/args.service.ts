import yargs from 'yargs';
import defaultOptions from '../configs/default.config';
import optionConfig from '../configs/options.config';
import { OptionConfig } from '../types/types';

const mapOptions = (defaultOptions, options): OptionConfig => {
  return Object.keys(options).reduce(
    (opts: OptionConfig, val: string) => {
      opts[val] = options[val];

      if (defaultOptions[val]) {
        opts[val].default = defaultOptions[val];
      }
      return opts;
    },
    <OptionConfig>{},
  );
};

const optionsMap = mapOptions(defaultOptions, optionConfig);

export const getArgs = (args: string[]) => {
  return yargs(args).options({ name: { alias: 'n' } });
};
