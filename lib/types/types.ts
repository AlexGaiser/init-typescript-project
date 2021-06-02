export interface Options {
  name: string;
  projectDir?: string;
}

export interface ReadOnlyOptions extends Readonly<Options> {}
