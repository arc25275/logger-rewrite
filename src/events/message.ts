import { prefix } from "../config/config.json";

module.exports = {
	async run(client, message) {
		if (message.content.startsWith(prefix)) {
			const args = message.content.slice(prefix.length).trim().split(/ +/);
			console.log(client.commands);
			const command = client.commands.search(args[0]);

			//Perm Checking
			try {
				await command.execute(message, args);
			} catch (error) {
				console.log(error);
			}
		}
	},
};
