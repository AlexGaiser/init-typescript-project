export interface Options {
  name: string;
  projectDir: string;
  entryPoint: string;
  sourceDir: string;
  install: boolean;
}

export type PartialOpts = {
  [Properties in keyof Options]?: Options[Properties];
};

export type ReadOnlyOptions = Readonly<Options>;

export type OptionSetting = {
  type: 'boolean' | 'number' | 'string';
  default?: any;
  demandOption?: boolean;
  choices?: string[];
  alias?: string;
  name: string;
};

export type OptionConfig = {
  [Properties in keyof Options]: OptionSetting;
};
