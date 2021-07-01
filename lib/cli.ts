#!/usr/bin/env node

import { exec } from 'child_process';
import * as path from 'path';
import defaultOptions from './configs/default.config';
import packageJSONTemplate from './templates/package.json';
import {
  copyDir,
  mkDir,
  writeFile,
  writeObjectToJSONFile,
} from './services/utils.service';
import { Options } from './types/types';
import devDependencies from './configs/devDependencies';
import { getArgValues } from './services/args.service';

const options: Options = getArgValues(process.argv.slice(2));
mkDir(options.projectDir);
const packageJSON = packageJSONTemplate;

copyDir(path.resolve(__dirname, './templates'), options.projectDir);

packageJSON.name = options.name;
packageJSON.main = `${options.entryPoint}`;
writeObjectToJSONFile(packageJSON, options.projectDir, 'package');

// creating tests directory
mkDir(options.projectDir, '__tests__');

// creating lib directory
mkDir(options.projectDir, options.sourceDir);

// writing entry point
writeFile('ts')(
  '',
  `${options.projectDir}/${options.sourceDir}`,
  options.entryPoint,
);

console.log('Installing the following dev dependencies:');

devDependencies.forEach((dep) => {
  console.log(dep);
});

if (process.env.NO_INSTALL === 'true') {
  console.log('SKIPPING DEPENDENCY INSTALLATION, DEVELOPMENT ENV');
  process.exit();
}

exec(
  `cd ${options.projectDir} && npm install ${devDependencies.join(
    ' ',
  )} -D`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  },
);

exec(`pwd`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

console.log(
  `Project "${
    options.name
  }" has been initialied in directory ${process.cwd()}`,
);
