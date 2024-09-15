// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import KulturUndSpass from './views/kultur_und_spass.vue';
import EssenUndTrinken from './views/essen_und_trinken.vue';
import About from './views/about.vue';
import Kontakt from './views/kontakt.vue';

// Erstelle den Router
const router = createRouter({
  history: createWebHistory(), // Nutze das History API für schöne URLs
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/kultur_und_spass',
      name: 'KulturUndSpass',
      component: KulturUndSpass
    },
    {
      path: '/essen_und_trinken',
      name: 'EssenUndTrinken',
      component: EssenUndTrinken
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Kontakt
    }
  ]
});

export default router;
