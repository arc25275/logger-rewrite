module.exports = {
	name: "ping",
	async execute(message, args) {
		message.channel.send("Pong");
	},
};
