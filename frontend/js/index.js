import {Widget} from "./widget/widget";

let widgets = document.querySelectorAll('[data-role="widget"]');

new Widget(widgets[0], {
    successful: true,
    callback: () => {alert('Запрос завершился!')}
});

new Widget(widgets[1], {
    successful: false
});
