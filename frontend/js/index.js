import {Widget} from "./widget/widget";

let widgets = document.querySelectorAll('[data-role="widget"]');
widgets.forEach((element) => {
    new Widget(element);
});