import Vue from 'vue';
import ElementUI from 'element-ui';
import ko from 'element-ui/lib/locale/lang/ko';

import 'element-ui/lib/theme-chalk/index.css'

export default () => {
  Vue.use(ElementUI, { ko });
};
