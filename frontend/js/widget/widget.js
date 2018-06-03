import {STATUS_OK, STATUS_ERROR} from "../result";

const SELECTOR_BUTTON  = '[data-role="button"]';
const SELECTOR_POPOVER = '[data-role="popover"]';

export class Widget {
    constructor(element) {
        this.element = element;

        let button = this.element.querySelector(SELECTOR_BUTTON);
        button.onclick = () => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', this.element.dataset.url, false);
            xhr.send();

            let response = JSON.parse(xhr.responseText);

            if (STATUS_OK === response.status) {
                this.openPopover(true, 'Действие выполнено успешно');
            }
            else if (STATUS_ERROR === response.status) {
                this.openPopover(false, response.message);
            }
            else {
                this.openPopover(false, 'Произошла непредвиденная ошибка')
            }
        };
    }

    openPopover(success, message) {
        let popover = this.element.querySelector(SELECTOR_POPOVER);

        if (true === success) {
            popover.classList.add = 'success';
        }
        else {
            popover.classList.remove = 'error';
        }

        popover.innerText = message;
        popover.style.display = 'block';
    }
}