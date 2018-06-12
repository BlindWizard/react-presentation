import {STATUS_OK, STATUS_ERROR} from "../result";
import {HttpService} from "./ajax";
import {Popover} from "./popover";

export class Widget {
    constructor(element, props) {
        this.element     = element;
        this.sendRequest = this.sendRequest.bind(this);

        this.state   = {};
        this.props   = Object.assign({}, props);

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
        button.onclick = this.sendRequest;
        this.element.append(button);

        let popover = new Popover(this.element, {
            success: this.state.success,
            message: this.state.message
        });
        popover.render();
    }

    sendRequest() {
        let response = HttpService.sendRequest(this.props.successful);
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

            if (undefined !== this.props.callback) {
                this.props.callback();
            }
        });
    }
}
