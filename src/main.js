import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Optional: Import Bootstrap JavaScript
import 'bootstrap';

const app = createApp(App);
app.use(router); // Hier fügst du den Router hinzu
app.mount('#app');
