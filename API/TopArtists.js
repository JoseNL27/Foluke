async function main() {
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = await require('../config.json');
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ` + token.Token2,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
const lista = topTracks?.map(
  ({name, artists}) =>
    `${name} , ${artists.map(artist => artist.name).join(', ')}`
);
const listaE = `${lista}`;
console.log(listaE);
return {listaE: listaE};

}

module.exports= main();



