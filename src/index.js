import component from './component'
import plugin from './plugin'
import directive from './directive'
import './styles/icon/icon.scss';

export default {

  install(Vue, options = {}) {
      Vue.use(component);
      Vue.use(directive);
      // Vue.use(filter);
      Vue.use(plugin, options);
  }

};
