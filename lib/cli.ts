#!/usr/bin/env node

import { exec } from "child_process";
import * as fs from "fs";
import * as path from "path";
import defaultOptions from "./configs/default.config";
import packageJSONTemplate from "./templates/package.json";
import { copyDir, writeObjectToJSONFile } from "./services/utils.service";
import { Options } from "./types/types";
import devDependencies from "./configs/devDependencies";

const args = process.argv.slice(2);

console.log("env", process.env.NODE_ENV);
const name = args[0];

const userOptions: Options = { name };
const options: Options = { ...defaultOptions, ...userOptions };

const packageJSON = packageJSONTemplate;

copyDir(path.resolve(__dirname, "./templates"), options.projectDir);

packageJSON.name = options.name;

writeObjectToJSONFile(packageJSON, options.projectDir, "package");

if (!fs.existsSync(path.join(options.projectDir, "__tests__"))) {
  fs.mkdirSync(path.join(options.projectDir, "__tests__"));
}
if (!fs.existsSync(path.join(options.projectDir, "lib"))) {
  fs.mkdirSync(path.join(options.projectDir, "lib"));
}

console.log("Installing the following dev dependencies:");

devDependencies.forEach((dep) => {
  console.log(dep);
});

exec(
  `cd ${options.projectDir} && npm install ${devDependencies.join(" ")} -D`,
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
  }
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

// exec(`npm install ${devDependencies.join(" ")} -D`, (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });
