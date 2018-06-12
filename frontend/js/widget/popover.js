export class Popover {
    constructor(element, props) {
        this.element = element;
        this.state = {};
        this.props = Object.assign({}, props);
    }

    render() {
        let popover = document.createElement('div');
        popover.classList.add('message');

        if (true === this.props.success) {
            popover.classList.add('success');
        }
        else {
            popover.classList.add('error');
        }

        if (null !== this.props.message) {
            popover.style.display = 'block';
            popover.innerText     = this.props.message;
        }
        else {
            popover.style.display = 'none';
        }

        this.element.append(popover);
    }
}