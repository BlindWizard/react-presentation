import {STATUS_OK, STATUS_ERROR} from "../result";
import {HttpService} from "./ajax";

export class Widget {
    constructor(element) {
        this.element = element;

        this.render(true, null);
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

        let button  = document.createElement('button');
        button.innerText = 'Действие';
        button.onclick   = this.sendRequest;
        button.classList.add('btn');

        let popover           = document.createElement('div');
        popover.innerText     = message;
        popover.style.display = (null !== message ? 'block' : 'none');
        if (true === success) {
            popover.classList.add('message', 'success');
        }
        else {
            popover.classList.add('message', 'error');
        }

        this.element.append(button);
        this.element.append(popover);
    }
}
