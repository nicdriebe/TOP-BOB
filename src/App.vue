<script setup>
import { BButton } from 'bootstrap-vue-next';
import { ref } from 'vue';

// Standard-Schriftgröße 100 %
const currentFontSize = ref(100);

// Vergrößerung der Schriftgröße
const increaseFontSize = () => {
  if (currentFontSize.value < 200) {
    currentFontSize.value += 10;
    document.documentElement.style.fontSize = currentFontSize.value + '%';
  }
};

// Verkleinern der Schriftgröße
const decreaseFontSize = () => {
  if (currentFontSize.value > 100) {
    currentFontSize.value -= 10;
    document.documentElement.style.fontSize = currentFontSize.value + '%';
  }
};

</script>

<template>
<a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>

<div class="sticky-header">
  <header>
    <div class="header-wrapper">
      <!-- Logo und Überschrift mittig über die gesamte Seite -->
      <div class="header-center">
        <img src="./assets/top-bob-logo.png" alt="TOP-BOB - Logo für die besten barrierefreien Orte in Berlin" class="logo" />
        <h5>Die besten barrierefreien Orte Berlins!</h5>
      </div>

      <p class="visually-hidden" id="resize-explanation">
        Verwenden Sie die folgenden Schaltflächen, um die Schriftgröße anzupassen: A+ zum Vergrößern, A- zum Verkleinern.
      </p>

      <!-- Text+ und Text- Buttons rechts -->
      <div class="text-resize-controls" aria-labelledby="resize-explanation">
        <button @click="increaseFontSize" aria-label="Schrift vergrößern (A+)">A+</button>
        <button @click="decreaseFontSize" aria-label="Schrift verkleinern (A-)">A-</button>
      </div>
    </div>
  </header>

  <hr>

  
  <nav class="navbar" aria-label="Hauptmenü">
    <div id="Hauptmenue">
      <router-link class="navbar-brand" to="/" aria-label="Zur Startseite" tabindex="0">Home</router-link>
      <router-link class="navbar-brand" to="/kultur_und_spass" aria-label="Seite Kultur & Spaß" tabindex="0">Kultur & Spaß</router-link>
      <router-link class="navbar-brand" to="/essen_und_trinken" aria-label="Seite Essen & Trinken" tabindex="0">Essen & Trinken</router-link>
      <router-link class="navbar-brand" to="/about" aria-label="Seite Was ist TOP-BOB?" tabindex="0">Was ist TOP-BOB?</router-link>
      <router-link class="navbar-brand" to="/kontakt" aria-label="Zur Kontaktseite" tabindex="0">Kontakt</router-link>
    </div>
  </nav>


</div>

<main id="main-content">
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

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  width: 100%;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px; 
  
}

.header-wrapper {
  position: relative;
  width: 100%; /* Breite über gesamte Seite */
  display: flex;
  justify-content: center; /* Zentriert den mittleren Teil */
  align-items: center;
  padding: 10px;
  background-color: white;
}

/* Header-Center wird absolut zentriert */
.header-center {
  display: flex;
  flex-direction: column;
  align-items: center; /* Zentriert die Inhalte horizontal */
  position: relative;
  z-index: 1; /* Damit es über den Buttons bleibt */
  text-align: center;
}

.text-resize-controls {
  position: absolute;
  right: 20px; /* Abstand vom rechten Rand der Seite */
  top: 70%;
  /*transform: translateY(-50%); /* Zentriert die Buttons vertikal */
  display: flex;
  gap: 10px;
}


.text-resize-controls button {
  padding: 10px;
  font-size: 25px;
  margin: 5px;
  cursor: pointer;
  border-radius: 0px;
  border: 2px dashed;
  border-color: #295338;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  font-weight: bolder;
}

.text-resize-controls button:hover {
  background-color: #72a490;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: -999px;
  background-color: #000;
  color: #fff;
  padding: 10px;
  z-index: 1000;
}

.skip-link:focus {
  left: 0;
  top: 0;
}




.logo{
  width: 300px;
  height: auto;
}

hr{
  color: white;
  background-color: #89c5a8;
  height: 4px;
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
  border-color:white;
  /*border-color: #89c5a8;*/
  padding: 10px;
  background-color:#89c5a8
}

.navbar-brand:nth-child(5) {
  font-weight:bold;
  text-align: center;
  border: 2px dashed;
  border-color:white;
  padding: 10px;
  background-color: #89c5a876!important;
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
  background-color: white;
  font-size: 1rem;  
    
}



.footer-link{
  font-size: inherit;
  text-decoration: none ;
  color: #595959;
  padding-top:12px;
  padding-bottom: 12px;
  
}



.text-resize-controls button {
  padding: 10px;
  font-size: 25px;
  margin: 5px;
  cursor: pointer;
  border-radius: 0px;
  border: 2px dashed;
  border-color: #295338;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  font-weight: bolder;
}

.text-resize-controls button:hover {
  background-color: #72a490;
}

</style>
