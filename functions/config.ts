const configPath = Deno.realPathSync("./config.json");
type config = {
  webhooks: string[];
  thumbnail?: string;
  interval?: number;
};

// Little wrapper for reading config.json
class Config {
  #config: config = { webhooks: [https://discord.com/api/webhooks/913814492742316094/K_3LvWwRPw-RA1q8jCBw1Eedp1cTMnz6Ka0BmlDVWQnG548BTFOrB18AUdTY6SrLIZA_] };
  constructor() {
    const rawFile = Deno.readFileSync(configPath);
    this.#config = JSON.parse(new TextDecoder().decode(rawFile));
  }

  get() {
    return this.#config;
  }
}

export default new Config();
