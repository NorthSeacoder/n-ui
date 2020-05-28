
import clipboard from './clipboard';

export default {

    install(Vue) {
        Vue.directive('n-clipboard', clipboard);
    }

};
