import { SERVER_URL } from './consts';

// TODO: it's better to have a separate /api folder for that

export async function httpGet(theUrl) {
    const response = await fetch(theUrl);
    return response.json();
}

export const getCharacters = async (page, gender, status, name) => {
    let requestUrl = `${SERVER_URL}/character?page=${page}`;
    if (gender !== 'All genders' && gender) {
        // TODO: move 'All genders' in consts
        requestUrl += `&gender=${gender}`;
    }
    if (status !== 'All statuses' && status) {
        // TODO: move in consts
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
