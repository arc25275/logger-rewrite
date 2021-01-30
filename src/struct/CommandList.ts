import * as Discord from "discord.js";
import * as fs from "fs/promises";

export default class CommandList extends Discord.Collection<string, Function> {
	search(name: string) {
		return this.find((command) => {
			return command.name === name;
		});
	}

	async load() {
		const files = await fs
			.readdir(__dirname + "/../commands")
			.catch(console.error);
		if (!files) return;

		for (const file of files) {
			const value = await import(__dirname + `/../commands/${file}`);
			const name = value.name;
			this.set(name, value);
		}
	}
}
