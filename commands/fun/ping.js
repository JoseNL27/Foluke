const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pinga')
		.setDescription('A'),
	async execute(interaction) {
		await interaction.reply('Pa tu culo hdp');
	},
};