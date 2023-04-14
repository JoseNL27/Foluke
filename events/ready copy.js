const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
