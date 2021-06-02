import * as fs from "fs";
import * as path from "path";
export const writeFile =
  (
    extension: string,
    transform?: <T = any>(contents: T) => string | NodeJS.ArrayBufferView
  ) =>
  (contents: any, filePath: string, fileName: string) => {
    const transformedContents = transform(contents);
    const targetDir = path.join(filePath, `${fileName}.${extension}`);

    fs.writeFileSync(targetDir, transformedContents);
    return transformedContents;
  };
export const writeObjectToJSONFile = writeFile("json", (content) =>
  JSON.stringify(content, null, 2)
);

export const loadJSONTemplateFiles = (dir: string) => {
  const files = fs.readdirSync(dir);
  return files.filter((a) => a.match(/.template.json/gm));
};

export const copyDir = (copyDir: string, targetDir: string): void => {
  const files = fs.readdirSync(path.resolve(__dirname, copyDir));

  for (let file of files) {
    fs.copyFileSync(
      path.resolve(__dirname, copyDir, file),
      path.resolve(targetDir, file)
    );
    console.log(
      `copied from ${path.resolve(__dirname, copyDir, file)} to ${path.resolve(
        targetDir,
        file
      )}`
    );
  }
};