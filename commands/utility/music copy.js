const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mari')
		.setDescription('Te recomienda una Playlist de Spotify'),
        async execute(interaction) {
            try {
                const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
                    headers: {
                        'Authorization': 'Bearer ' + 'BQAJF7IdV6VMVDY4rJSe9iokaMrKkpjM4zz7bpO4sB0U6tQbOnIkq8n5JmSrYGBm2eeQc9Gzbe_ZeJuOUqxbiXgd38ojT3jZ236tafFcweQb2H_hdzfA'
                    }
                });
        
                if (!response.ok) {
                    throw new Error('Error fetching playlists');
                }
        
                const data = await response.json();
                //console.log(data);
                const playlists = data.playlists.items;
                const playlistNames = playlists.map(playlist => playlist.name);
                const playlistId = playlists.map(playlist => playlist.id);
        
                await interaction.reply(`${interaction.user.username} aquí tienes algunas playlists: ${playlistNames}`);
            } catch (error) {
                console.error(error);
                await interaction.reply('Ocurrió un error al obtener las playlists. Por favor, inténtalo de nuevo más tarde.');
            }
        }
        
	,
};