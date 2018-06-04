import {STATUS_OK, STATUS_ERROR} from "../result";
import {HttpService} from "./ajax";

export class Widget {
    constructor(element) {
        this.element = element;
        this.state   = {};

        this.setState({
            success: true,
            message: '',
        });

        this.sendRequest.bind(this);
    }

    sendRequest() {
        let response = HttpService.sendRequest();
        if (STATUS_OK === response.status) {
            this.setState({
                success: true,
                message: 'Действие выполнено успешно',
            });
        }
        else if (STATUS_ERROR === response.status) {
            this.setState({
                success: false,
                message: response.message,
            });
        }
        else {
            this.setState({
                success: false,
                message: 'Произошла непредвиденная ошибка',
            });
        }
    }

    setState(state) {
        Object.assign(this.state, state);
        this.render();
    }

    render() {
        this.element.innerHTML = '';

        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = 'Действие';
        button.onclick   = () => {this.sendRequest()};

        let popover = document.createElement('div');
        popover.classList.add = 'message';

        if (true === this.state.success) {
            popover.classList.add = 'success';
        }
        else {
            popover.classList.remove = 'error';
        }

        popover.innerText     = this.state.message;
        popover.style.display = 'block';

        this.element.append(button);
        this.element.append(popover);
    }
}