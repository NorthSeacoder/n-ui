//import
import NInput from './n-input';
import NSelect from './n-select';
import NLayout from './n-layout';
import NCalendar from './n-calendar';
import NCard from './n-card';
import NButton from './n-button';

const components = {
    //component
	NInput,
	NSelect,
	NLayout,
	NCalendar,
	NCard,
    NButton,
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
