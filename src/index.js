import NButton from './packages/n-button'
import './styles/icon/icon.scss';

const components = {
   NButton,
}

const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}

export default install
