import { OptionConfig } from '../types/types';

const optionConfig: OptionConfig = <OptionConfig>{
  name: {
    name: 'n',
    alias: 'name',
    type: 'string',
    demandOption: true,
  },
  projectDir: {
    name: 'd',
    alias: 'dir',
    type: 'string',
    demandOption: false,
  },
  entryPoint: {
    name: 'f',
    alias: 'file',
    type: 'string',
    demandOption: false,
  },
  sourceDir: {
    name: 'sd',
    alias: 'srcDir',
    type: 'string',
    demandOption: false,
  },
};

export default optionConfig;
