const axios = require('axios');

const host = 'rocky-citadel-96938.herokuapp.com';

try {
    axios.post(`https://${host}`, "eyylmao")
    .then((response) => console.log(response));
} catch (error) {
    console.error(error)
}