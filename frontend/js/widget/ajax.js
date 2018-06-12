import {API_URL} from "../config";

export class HttpService {
    static sendRequest() {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', API_URL + '?requiredResult=true', false);
        xhr.send();

        return JSON.parse(xhr.responseText);
    }
}