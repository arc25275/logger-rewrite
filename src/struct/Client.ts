import * as Discord from "discord.js";
import CommandList from "./CommandList";
import EventList from "./EventList";

export default class Client extends Discord.Client {
	events = new EventList(this);
	commands = new CommandList();
}
