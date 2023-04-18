

async function getFirstPlaylistName() {
    const APIToken = require('../config.json');
    const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
        headers: {
            'Authorization': 'Bearer ' + APIToken.SFToken
        }
    });
    const data = await response.json();
    const playlists = data.playlists.items;
    const firstPlaylistName = playlists[1].name;
    const firstPlaylistNameS = firstPlaylistName.toString();

    console.log(`Aquí tienes una playlist: ${firstPlaylistName}`);
    return firstPlaylistNameS;
}

module.exports = getFirstPlaylistName();
