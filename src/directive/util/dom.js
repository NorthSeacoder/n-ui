export const on = (el, event, handler) => {
    if (el && event && handler) {
        el.addEventListener(event, handler, false);
    }
};