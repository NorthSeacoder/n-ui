import NButton from './n-button';
import NCalendar from './calendar';

const components = {
    NButton,NCalendar
};

// const install = function(Vue, options = {}) {
//     Object.keys(components).forEach((key) => {
//         Vue.component(key, components[key]);
//     });
// };

export default {
    install(Vue) {
        Object.keys(components).forEach((key) => {
            Vue.component(key, components[key]);
        });
    }
};
