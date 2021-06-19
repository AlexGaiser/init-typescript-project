export type Options = {
  name: string;
  projectDir?: string;
  entryPoint?: string;
};

export interface ReadOnlyOptions extends Readonly<Options> {}

type OptionSetting = {
  type: string;
  default?: any;
  demandOption: boolean;
  choices?: string[];
  alias?: string;
};

export type OptionConfig = {
  [Properties in keyof Options]: OptionSetting;
};
