
//import
import clipboard from './clipboard';

const directive = {
    //directive
    clipboard,
};
export default {

    install(Vue) {
        Object.keys(directive).forEach((key) => {
            Vue.component(`n-${key}`, directive[key]);
        });
    }

};
