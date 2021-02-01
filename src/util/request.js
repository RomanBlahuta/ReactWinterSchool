import { SERVER_URL } from './consts';

export async function httpGet(theUrl) {
    const response = await fetch(theUrl);
    return response.json();
}

export const getCharacters = async (page) => {
    const response = await fetch(`${SERVER_URL}/character?page=${page}`);
    return response.json();
};

export const getCharacter = async (id) => {
    const response = await fetch(`${SERVER_URL}/character/${id}`);
    return response.json();
};

export function httpGetSync(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
