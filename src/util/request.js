import { DEFAULT_GENDER, DEFAULT_STATUS, SERVER_URL } from './consts';

export async function httpGet(theUrl) {
    const response = await fetch(theUrl);
    return response.json();
}

export const getCharacters = async (page, gender, status, name) => {
    let requestUrl = `${SERVER_URL}/character?page=${page}`;
    if (gender !== DEFAULT_GENDER && gender) {
        requestUrl += `&gender=${gender}`;
    }
    if (status !== DEFAULT_STATUS && status) {
        requestUrl += `&status=${status}`;
    }
    if (name) {
        requestUrl += `&name=${name}`;
    }
    const response = await fetch(requestUrl);
    return response.json();
};

export const getCharacter = async (id) => {
    const response = await fetch(`${SERVER_URL}/character/${id}`);
    return response.json();
};

export const getEpisode = async (id) => {
    const response = await fetch(`${SERVER_URL}/episode/${id}`);
    return response.json();
};
