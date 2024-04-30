import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../router/index'

import 'primevue/resources/themes/aura-light-blue/theme.css'
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';

const app = createApp(App);

app.use(PrimeVue, {ripple: true})
app.use(router)

app.directive('styleclass', StyleClass);
app.directive('ripple', Ripple);

app.mount('#app')
