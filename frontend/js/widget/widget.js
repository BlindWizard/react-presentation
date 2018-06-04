import {STATUS_OK, STATUS_ERROR} from "../result";
import {HttpService} from "./ajax";

export class Widget {
    constructor(element, props) {
        this.element = element;
        this.state   = {};
        this.props   = Object.assign({}, props);

        this.setState({
            success: true,
            message: '',
        });

        this.sendRequest.bind(this);
    }

    sendRequest() {
        let response = HttpService.sendRequest(this.props.successful);
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

        this.props.callback();
    }

    setState(state) {
        Object.assign(this.state, state);
        this.render();
    }

    render() {
        this.element.innerHTML = '';

        let button = document.createElement('button');
        button.classList.add('btn');
        if (true === this.props.successful) {
            button.classList.add('btn-success');
            button.innerText = 'Успешное действие';
        }
        else {
            button.classList.add('btn-danger');
            button.innerText = 'Неуспешное действие';
        }
        button.onclick = () => {this.sendRequest()};

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