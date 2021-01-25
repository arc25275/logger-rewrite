import "reflect-metadata";
import { createConnection } from "typeorm";
import * as Discord from "discord.js";
import * as fs from "fs";
const client = new Discord.Client();
const commands = <any>new Discord.Collection();

import { token } from "./config/auth.json";
import { prefix } from "./config/config.json";

createConnection().catch((error) => console.log(error));

client.login(token);

const commandFiles = fs
	.readdirSync(__dirname + "/commands")
	.filter((file) => file.endsWith(".ts"));

for (const file of commandFiles) {
	const command = require(__dirname + `/commands/${file}`);
	commands.set(command.name, command);
}

client.on("message", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (!commands.has(command)) return;
	if (
		/*message.member.roles.cache.some((r) =>
			JSON.stringify(serverData[message.guild.id].modRoles).includes(r.name)
		) ||*/
		message.member.hasPermission("ADMINISTRATOR") ||
		message.member.id == "369661965376946176"
	) {
		try {
			commands.get(command).execute(message, args);
		} catch (error) {
			console.log(error);
		}
	}
});

fs.readdir(__dirname + "/events", (err, files) => {
	if (err) return console.error(err);

	files.forEach((file) => {
		const eventFunction = require(`./events/${file}`);
		if (eventFunction.disabled) return;

		const event = file.split(".")[0];
		const emitter = client;
		const once = eventFunction.once;

		try {
			emitter[once ? "once" : "on"](
				event,
				eventFunction.run.bind(null, client)
			);
		} catch (error) {
			console.log(error);
		}
	});
});
