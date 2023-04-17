const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('musica')
        .setDescription('Te recomienda una Playlist de Spotify'),
	async execute(interaction) {
		//const target = interaction.options.getUser('target');
		//const reason = interaction.options.getString('reason') ?? 'No reason provided';
        const Button1 = await require('../../API/SFReccom.js')

		const confirm = new ButtonBuilder()
			.setLabel(`${Button1}`)
			.setURL('https://google.es')
			.setStyle(ButtonStyle.Link);

        const button = new ButtonBuilder()
            .setLabel('discord.js docs')
            .setURL('https://discord.js.org')
            .setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder()
			.addComponents(button, confirm);

		await interaction.reply({
			content: `Aqui te dejo unas playlists populares en tu país:`,
			components: [row],
		});
	},
};