import { getArgValues } from '../args.service';
import { __cliArgs__ } from './__values__';

describe('testing args service', () => {
  const options = getArgValues(__cliArgs__);

  test('should return project name', () => {
    expect(options.name).toBe('__testfilename__');
  });
  test('should return project entrypoint', () => {
    expect(options.entryPoint).toBe('cli');
  });
});
