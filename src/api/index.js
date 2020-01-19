import axios from 'axios';

const config={
    baseURL:"https://api.hnpwa.com/v0/",
}

function fetchNewsList(){
    return axios.get(`${config.baseURL}news/1.json`);
}

function fetchItemList(){
    return axios.get(`${config.baseURL}ask/1.json`);
}

export {
    fetchNewsList,
    fetchItemList,
}