import ReactDOM from 'react-dom';
import React from 'react';
import {Widget} from './widget/widget';

export class Application extends React.Component {
    showAlert() {
        alert('Запрос завершился');
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                Widget,
                {
                    successful: true,
                    callback: () => {
                        return this.showAlert();
                    }
                }
            ),
            React.createElement("br", null),
            React.createElement(Widget, {successful: false })
        );
    }
}

ReactDOM.render(
    <Application/>,
    document.querySelector('[data-role="widget"]')
);
