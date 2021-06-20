import * as path from 'path';
import { ReadOnlyOptions } from '../types/types';

const defaultPath =
  process.env.NODE_ENV === 'development' ? './dev_test_dir' : './';

const defaultOptions: ReadOnlyOptions = {
  name: 'test name',
  projectDir: path.join(defaultPath),
  entryPoint: 'index',
};

export default defaultOptions;
