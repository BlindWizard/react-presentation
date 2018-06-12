import React from 'react';

export class Popover extends React.Component {
    render() {
        if (null === this.props.message) {
            return null;
        }

        return (
            <div className={'message ' + (true === this.props.success ? 'success' : 'error')}>
                {this.props.message}
            </div>
        );
    }
}