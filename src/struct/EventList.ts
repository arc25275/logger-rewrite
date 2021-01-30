import Client from "./Client";
import * as Discord from "discord.js";
import * as fs from "fs/promises";

export default class EventList extends Discord.Collection<string, Function> {
	client: Client;

	constructor(client: Client) {
		super();
		this.client = client;
	}

	async load() {
		const files = await fs
			.readdir(__dirname + "/../events")
			.catch(console.error);
		if (!files) return;
		let eventObject;
		let eventName;
		await files.forEach(async (file) => {
			eventObject = await import(__dirname + `/../events/${file}`);
			eventName = file.split(".")[0];
			try {
				this.client.on(eventName, eventObject.run.bind(null, this.client));
			} catch (error) {
				console.log(error);
			}
		});
	}
}
