export interface Options extends Object {
  name: string;
  projectDir: string;
  entryPoint: string;
  sourceDir: string;
}

export interface ReadOnlyOptions extends Readonly<Options> {}

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
