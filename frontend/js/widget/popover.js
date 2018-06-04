export class Popover {
    constructor(element, props) {
        this.element = element;
        this.state = {};
        this.props = Object.assign({}, props);
    }

    render() {
        let popover = document.createElement('div');
        popover.classList.add = 'message';

        if (true === this.props.success) {
            popover.classList.add = 'success';
        }
        else {
            popover.classList.remove = 'error';
        }

        popover.innerText     = this.props.message;
        popover.style.display = 'block';

        this.element.append(popover);
    }
}