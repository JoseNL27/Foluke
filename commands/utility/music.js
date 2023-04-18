const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('musica')
        .setDescription('Te recomienda una Playlist de Spotify'),
	async execute(interaction) {
		//const target = interaction.options.getUser('target');
		//const reason = interaction.options.getString('reason') ?? 'No reason provided';
		const ExitData  = await require('../../API/SFReccom.js');
		const Button1Name = ExitData.firstPlaylistNameS;
		const Button1Link = ExitData.firstPlaylistLinkS;
		const Button2Name = ExitData.secondPlaylistNameS;
		const Button2Link = ExitData.secondPlaylistLinkS;
		const Button3Name = ExitData.thirdPlaylistNameS;
		const Button3Link = ExitData.thirdPlaylistLinkS;

		const button = new ButtonBuilder()
			.setLabel(`${Button1Name}`)
			.setURL(`${Button1Link}`)
			.setStyle(ButtonStyle.Link);

        const button1 = new ButtonBuilder()
            .setLabel(`${Button2Name}`)
            .setURL(`${Button2Link}`)
            .setStyle(ButtonStyle.Link);

		const button2 = new ButtonBuilder()
            .setLabel(`${Button3Name}`)
            .setURL(`${Button3Link}`)
            .setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder()
			.addComponents(button, button1, button2);

		await interaction.reply({
			content: `Aquí te dejo unas playlists populares en tu país:`,
			components: [row],
		});
	},
};