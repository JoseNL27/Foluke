const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('saluda')
		.setDescription('Pide que te salude'),
	async execute(interaction) {
		await interaction.reply(`Andate a la verga ${interaction.user.username}, a tu madre si que la voy a saludar.`);
	},
};