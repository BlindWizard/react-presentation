export class HttpService {
    static sendRequest(successful) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/react/api?requiredResult=' + Number(successful), false);
        xhr.send();

        return JSON.parse(xhr.responseText);
    }
}