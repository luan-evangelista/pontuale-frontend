import axios from 'axios';
import md5 from 'md5';

const publicKey = '1bfe13ab18520b686885204a40254d4e';
const privateKey = 'f444f9af632011b67abd12215646958fbfbf682a';

const time = Number(new Date());

const hash1 = md5(time + privateKey + publicKey);

const apiMarvel = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        apikey: publicKey,
        ts: time,
        hash: hash1,
        limit: 100,
    }
});

export default apiMarvel;
