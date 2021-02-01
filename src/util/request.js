import { SERVER_URL } from './consts';

export function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

export const getCharacters = async (page) => {
    const response = await fetch(`${SERVER_URL}/character?page=${page}`);
    return response.json();
};

export const getCharacter = async (id) => {
    const response = await fetch(`${SERVER_URL}/character/${id}`);
    return response.json();
};

//export { httpGet };
