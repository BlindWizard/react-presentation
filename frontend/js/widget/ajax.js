export class HttpService {
    static sendRequest() {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/react/api?requiredResult=true', false);
        xhr.send();

        return JSON.parse(xhr.responseText);
    }
}