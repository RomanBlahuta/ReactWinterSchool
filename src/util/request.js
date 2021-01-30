import {SERVER_URL} from "./consts";

export function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

export const getCharacters = async () => {
    const response = await fetch(`${SERVER_URL}/character?page=2`);
    return response.json();
}

//export { httpGet };
