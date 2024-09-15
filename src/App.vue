<script setup>
import { BButton } from 'bootstrap-vue-3';

</script>

<template>
<header>
  <img src="./assets/top-bob-logo.png" alt="TOP-BOB - Logo für barrierefreie Orte in Berlin" class="logo" />
  <h5>Die besten barriefreien Orte Berlins!</h5>
</header>

<hr>
<nav class="navbar" aria-label="Hauptmenü">
  <div id="Hauptmenue">
    <router-link class="navbar-brand" to="/" aria-label="Zur Startseite">Home</router-link>
    <router-link class="navbar-brand" to="/kultur_und_pass" aria-label="Seite Kultur & Spaß">Kultur & Spaß</router-link>
    <router-link class="navbar-brand" to="/essen_und_trinken" aria-label="Seite Essen & Trinken">Essen & Trinken</router-link>
    <router-link class="navbar-brand" to="/was_ist_top_bob" aria-label="Seite Was ist TOP-BOB?">Was ist TOP-BOB?</router-link>
    <router-link class="navbar-brand" to="/kontakt" aria-label="Zur Kontaktseite">Kontakt</router-link>
  </div>
</nav>
  
  <main>
    <router-view></router-view>
  </main>

  <footer>
    <hr>
    <nav class="footer">

    <div id="Footermenue" >
      <a class="footer-link" href="#">Impressum | </a>
      <a class="footer-link" href="#">Datenschutz | </a>
      <a class="footer-link" href="#">Kontakt</a>
    </div>
    </nav>
  </footer>
</template>


<style scoped>

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px; /* Optional: Abstand oben und unten */
}

.logo{
  width: 300px;
  height: auto;
}

hr{
  color: white;
  background-color: #89c5a8;
  height: 5px;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

#Hauptmenue{
  display: center;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
}



.navbar-brand {
  width: 200px !important; 
  text-align: center;
  padding: 10px; 
}
.navbar-brand:focus,
.footer-link:focus {
  outline: 3px solid rgb(6, 68, 22);
  outline-offset: 2px; 
}

.navbar-brand:nth-child(1) { 
  width: 200px !important; 
  font-weight:bold;
  text-align: center;
  border: 2px dashed;
  border-color: #ffffff;
  padding: 10px;
  background-color: #89c5a8!important;
}

.navbar-brand:nth-child(2) {
  font-weight:bold;
  text-align: center;
  border: 2px dashed;
  border-color:white;
  padding: 10px;
  background-color:#E869D0!important;
}

.navbar-brand:nth-child(3) {
  font-weight:bold;
  text-align: center;
  border: 2px dashed;
  border-color:white;
  padding: 10px;
  background-color: #42f0fb!important;
}

.navbar-brand:nth-child(4) {
  font-weight:bold;
  text-align: center;
  border: 2px dashed;
  border-color: #89c5a8;
  padding: 10px;
  /*background-color: #89c5a8!important;*/
}

.navbar-brand:nth-child(5) {
  font-weight:bold;
  text-align: center;
  border: 2px dashed;
  border-color: #89c5a8;
  padding: 10px;
  /*background-color: #89c5a8!important;*/
}

.navbar-brand:focus,
.footer-link:focus {
  outline: 3px solid #295338; /* Schwarzer Rahmen bei Tab-Fokus */
  outline-offset: 2px; /* Optional: Platz zwischen dem Rahmen und dem Inhalt */
}

footer {
margin-top: 20px;
width: 100%;
    height: 100px;
  text-align: center;
  position: fixed;
    bottom: 0;
}



.footer-link{
  font-size: large;
  text-decoration: none ;
  color: #595959;
}

</style>
