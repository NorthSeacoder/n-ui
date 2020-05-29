
//import
import plugToast from './Toast';
// import plugModal from './Modal/Modal';

const plugin = {
    //plugin
    plugToast,
};
export default {
    install(Vue, options) {
        Vue.use(plugToast, options);
        Object.keys(plugin).forEach((key) => {
            Vue.use(plugin[key],options);
        });
    }
};
