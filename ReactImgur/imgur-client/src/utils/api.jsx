var Fetch = require('whatwg-fetch'),
    rootUrl = 'https://api.imgur.com/3/',
    apiKey = '58f76018d4f6bce',
    apiSecret = '057c5626496d2557c375851deb5fdb16b5257464';

module.exports = window.api = {
    get: function(url) {
        return fetch(rootUrl + url, {
            headers: {
                'Authorization' : 'Client-ID ' + apiKey
            }
        })
        .then(function(response){
            return response.json()
        })
    }
};

//Api.get('topics/defaults')
//.then(function(data){
//    // Do something with data here
//})