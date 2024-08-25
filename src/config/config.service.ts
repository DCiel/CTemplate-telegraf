import { config, DotenvParseOutput } from "dotenv";
import { IConfigService } from "./config.interface";

export class ConfigService implements IConfigService {
  private config: DotenvParseOutput;

  constructor() {
    const { error, parsed } = config();
    if (error) {
      throw new Error("no find file .env");
    }
    if (!parsed) {
      throw new Error("empty file .env");
    }

    this.config = parsed;
  }

  get(key: string): string {
    const res = this.config[key];
    if (!res) throw new Error("no find this key");
    return res;
  }
}
