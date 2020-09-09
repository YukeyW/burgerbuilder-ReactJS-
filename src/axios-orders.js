import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-35802.firebaseio.com/'
});

export default instance;