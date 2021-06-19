import { OptionConfig } from "../types/types";

const optionConfig: OptionConfig = {
  name: { alias: "n", type: "string", demandOption: true },
  projectDir: { alias: "dir", type: "string", demandOption: false },
};

export default optionConfig;
