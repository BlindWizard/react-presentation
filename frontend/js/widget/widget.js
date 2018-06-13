import {STATUS_OK, STATUS_ERROR} from "../result";
import {HttpService} from "./ajax";

export class Widget {
    constructor(element) {
        this.element     = element;
        this.sendRequest = this.sendRequest.bind(this);

        this.state = {};
        this.setState({
            success: true,
            message: null,
        });
    }

    setState(state) {
        Object.assign(this.state, state);
        this.render();
    }

    render() {
        this.element.innerHTML = '';

        let button       = document.createElement('button');
        button.innerText = 'Действие';
        button.onclick   = this.sendRequest;
        button.classList.add('btn');

        let popover           = document.createElement('div');
        popover.innerText     = this.state.message;
        popover.style.display = (null !== this.state.message ? 'block' : 'none');
        if (true === this.state.success) {
            popover.classList.add('message', 'success');
        }
        else {
            popover.classList.add('message', 'error');
        }

        this.element.append(button);
        this.element.append(popover);
    }

    sendRequest() {
        let response = HttpService.sendRequest();
        response.then((result) => {
            if (STATUS_OK === result.status) {
                this.setState({
                    success: true,
                    message: 'Действие выполнено успешно',
                });
            }
            else if (STATUS_ERROR === result.status) {
                this.setState({
                    success: false,
                    message: result.message,
                });
            }
            else {
                this.setState({
                    success: false,
                    message: 'Произошла непредвиденная ошибка',
                });
            }
        });
    }
}
