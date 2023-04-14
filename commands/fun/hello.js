const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tiempo')
		.setDescription('tiempo'),
	async execute(interaction) {
		await interaction.reply('Saluda a tu madre pendejo');
	},
};