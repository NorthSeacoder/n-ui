
import plugToast from './Toast';
// import plugModal from './Modal/Modal';

export default {
    install(Vue, options) {
        Vue.use(plugToast, options);
        // Vue.use(plugModal, options);
    }
};
