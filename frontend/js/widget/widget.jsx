import React from 'react';
import {Popover} from "./popover";
import {STATUS_OK, STATUS_ERROR} from "../result";
import {HttpService} from "./ajax";

export class Widget extends React.Component {
    constructor() {
        super();

        this.state = {
            message: null
        };

        this.sendRequest = this.sendRequest.bind(this);
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

    render() {
        return (
            <div>
                <button className={'btn ' + (true === this.props.successful ? 'btn-success' : 'btn-danger')}
                        onClick={this.sendRequest}
                >
                    {true === this.props.successful ? 'Успешное действие' : 'Неуспешное действие'}
                </button>
                <Popover success={this.props.successful} message={this.state.message}/>
            </div>
        );
    }
}