import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Optional: Import Bootstrap JavaScript (falls du Bootstrap JS-Komponenten benötigst)
import 'bootstrap';

const app = createApp(App);
app.mount('#app');