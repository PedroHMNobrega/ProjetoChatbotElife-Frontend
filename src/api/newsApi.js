import {request} from "./requests.js";
import {apiUrl} from "../config/constants.js";

async function getNews() {
    return await request.getRequest(apiUrl + '/news');
}

async function addNews(newsData) {
    return await request.postRequest(newsData, apiUrl + '/news');
}

async function deleteNews(id) {
    await request.deleteRequest(apiUrl + '/news/' + id);
}

async function updateNews(id, newsData) {
    await request.putRequest(apiUrl + '/news/' + id, newsData);
}

export const newsApi = {
    getNews,
    addNews,
    deleteNews,
    updateNews,
}
