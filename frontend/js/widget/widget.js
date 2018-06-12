import {STATUS_OK, STATUS_ERROR} from "../result";
import {HttpService} from "./ajax";

export class Widget {
    constructor(element) {
        this.element = element;

        this.sendRequest = this.sendRequest.bind(this);
        this.render(true, null);
    }

    sendRequest() {
        let response = HttpService.sendRequest();
        response.then((result) => {
            if (STATUS_OK === result.status) {
                this.render(true, 'Действие выполнено успешно');
            }
            else if (STATUS_ERROR === result.status) {
                this.render(false, result.message);
            }
            else {
                this.render(false, 'Произошла непредвиденная ошибка')
            }
        });
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
