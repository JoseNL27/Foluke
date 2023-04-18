async function getFirstPlaylistName() {
    const APIToken = require('../config.json');
    const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
        headers: {
            'Authorization': 'Bearer ' + APIToken.SFToken
        }
    });
    const data = await response.json();
    console.log(data); // Add this log to check the data received
    const playlists = data.playlists.items;
    const firstPlaylistName = playlists[0].name;
    const firstPlaylistLink = playlists[0].external_urls;
    const secondPlaylistName = playlists[1].name;
    const secondPlaylistLink = playlists[1].external_urls;
    const thirdPlaylistName = playlists[2].name;
    const thirdPlaylistLink = playlists[2].external_urls;

    return {
        firstPlaylistNameS: firstPlaylistName, 
        firstPlaylistLinkS: firstPlaylistLink.spotify,
        secondPlaylistNameS: secondPlaylistName,
        secondPlaylistLinkS: secondPlaylistLink.spotify,
        thirdPlaylistNameS: thirdPlaylistName,
        thirdPlaylistLinkS: thirdPlaylistLink.spotify
    };
}

module.exports = getFirstPlaylistName();
