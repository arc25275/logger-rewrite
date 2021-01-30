module.exports = {
	name: "ping2",
	async execute(message, args) {
		message.channel.send("Pong2");
	},
};
