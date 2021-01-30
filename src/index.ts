import "reflect-metadata";
import { createConnection } from "typeorm";
import * as Discord from "discord.js";
import * as fs from "fs";

import { token } from "./config/auth.json";
import { prefix } from "./config/config.json";
import Client from "./struct/Client";
const client = new Client();

async function main() {
	await client.events.load();
	console.log("Events loaded");
	client.commands.load();
	console.log("Commands Loaded");

	//createConnection().catch((error) => console.log(error));

	client.login(token);
}

main();
