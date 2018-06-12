import ReactDOM from 'react-dom';
import React from 'react';
import {Widget} from './widget/widget';

export class Application extends React.Component {
    showAlert() {
        alert('Запрос завершился');
    }

    render() {
        return (
            <div>
                <Widget successful={true} callback={() => this.showAlert()}/>
                <br/>
                <Widget successful={false}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Application/>,
    document.querySelector('[data-role="widget"]')
);
