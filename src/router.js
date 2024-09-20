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
      component: Home,
      meta: {
        title: 'Startseite mit kurzer Beschreibung der Website TOP-BOB'
      }
    },
    {
      path: '/kultur_und_spass',
      name: 'KulturUndSpass',
      component: KulturUndSpass,
      meta: {
        title: 'Kultur und Spaß - Übersicht über die besten barrierefreien Orte in Berlin in dieser Kategorie und der Möglichekit selbst Orte hinzuzufügen - TOP-BOB'
      }
    },
    {
      path: '/essen_und_trinken',
      name: 'EssenUndTrinken',
      component: EssenUndTrinken,
      meta: {
        title: 'Essen und Trinken - Übersicht über die besten barrierefreien Orte in Berlin in dieser Kategorie und der Möglichekit selbst Orte hinzuzufügen- TOP-BOB'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'Über TOP-BOB - Was ist das - Geschichte - Mitmachen bei TOP-BOB'
      }
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Kontakt,
      meta: {
        title: 'Kontaktformular - TOP-BOB'
      }
    }
  ]
});

export default router;
