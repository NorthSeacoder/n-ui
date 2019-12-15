import component from './packages'
import plugin from './plugin'
import './styles/icon/icon.scss';

export default {

  install(Vue, options = {}) {
      Vue.use(component);
      // Vue.use(directive);
      // Vue.use(filter);
      Vue.use(plugin, options);
  }

};
