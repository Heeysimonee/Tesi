import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import 'material-design-icons/iconfont/material-icons.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'


library.add(fas);
const app = createApp(App).use(Quasar, quasarUserOptions).use(Quasar, quasarUserOptions).use(store).use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
