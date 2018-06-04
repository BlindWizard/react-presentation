import {STATUS_OK, STATUS_ERROR} from "../result";
import {HttpService} from "./ajax";

export class Widget {
    constructor(element) {
        this.element = element;
        this.render(true, '');

        this.sendRequest.bind(this);
    }

    sendRequest() {
        let response = HttpService.sendRequest();
        if (STATUS_OK === response.status) {
            this.render(true, 'Действие выполнено успешно');
        }
        else if (STATUS_ERROR === response.status) {
            this.render(false, response.message);
        }
        else {
            this.render(false, 'Произошла непредвиденная ошибка')
        }
    }

    render(success, message) {
        this.element.innerHTML = '';

        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = 'Действие';
        button.onclick   = () => {this.sendRequest()};

        let popover = document.createElement('div');
        popover.classList.add = 'message';

        if (true === success) {
            popover.classList.add = 'success';
        }
        else {
            popover.classList.remove = 'error';
        }

        popover.innerText     = message;
        popover.style.display = 'block';

        this.element.append(button);
        this.element.append(popover);
    }
}