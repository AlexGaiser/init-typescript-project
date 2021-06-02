#!/usr/bin/env node

import { exec } from "child_process";
import * as fs from "fs";
import * as path from "path";
import defaultOptions from "./configs/default.config";
import tsConfigTemplate from "./templates/tsconfig.json";
import packageJSONTemplate from "./templates/package.json";
import { copyDir, writeObjectToJSONFile } from "./services/utils.service";
import { Options } from "./types/types";
const args = process.argv.slice(2);

console.log("env", process.env.NODE_ENV);
const name = args[0];

const userOptions: Options = { name };
const options: Options = { ...defaultOptions, ...userOptions };

const packageJSON = packageJSONTemplate;

copyDir(path.resolve(__dirname, "./templates"), options.projectDir);

packageJSON.name = options.name;

writeObjectToJSONFile(packageJSON, options.projectDir, "package");
