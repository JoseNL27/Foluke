fetch('https://api.spotify.com/v1/browse/featured-playlists', {
  headers: {
    'Authorization': 'Bearer ' + 'BQAY1lfREoVvpOspWBKP7zi7QAZsV_BeSb7LIFC5POpEnTSI4ZJkbvpmG3SLEsMLB7mYtYOhrplBoYfV2RK2p1x48Ui2JIk6ucvBo_RT1ia-z2TVMSKi'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});



//curl -X POST "https://accounts.spotify.com/api/token" -H "Content-Type: application/x-www-form-urlencoded" -d "grant_type=client_credentials&client_id=d73395f3767b466fa12fba7968692f6d&client_secret=3c3bfefac5f842069cd2185d9d8c7e0e"