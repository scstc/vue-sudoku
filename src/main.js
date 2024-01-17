import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import mixin from './plugins/mixin'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.mixin(mixin);
Vue.use(require('vue-shortkey'));

Vue.filter('asDateTime', function (time) {
  const date = new Date();
  date.setTime(time);
  return date.toLocaleDateString('en-gb', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:'numeric', minute: 'numeric'})
});

Vue.filter('formatDifficultyLevel', function (level) {
  switch (level) {
    case 'easy':
      return '简单模式';
    case 'medium':
      return '中级模式';
    case 'hard':
      return '困难模式';
    default:
      return level;
  }
});

Vue.directive('blur', {
  inserted: function (el) {
    el.onfocus = (ev) => ev.target.blur()
  }
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
