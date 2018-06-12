import {API_URL} from "../config";

export class HttpService {
    static sendRequest(successful) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', API_URL + '?requiredResult=' + Number(successful), false);
            xhr.onreadystatechange = () => {
                resolve(JSON.parse(xhr.responseText));
            };

            xhr.send();
        });
    }
}