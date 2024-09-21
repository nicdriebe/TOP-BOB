<script setup>
import { ref } from 'vue';
import { places as initialPlaces } from '../data/places.js';
import NewPlaceForm from '../components/NewPlaceForm.vue';
import PlaceItem from '../components/PlaceItem.vue';  // Neue Komponente

// Datenmodell für Orte
const places = ref(initialPlaces);

// Zustand für das Anzeigen des Formulars und der Fehlermeldung
const isFormVisible = ref(false);

// Funktion zum Umschalten der Sichtbarkeit des Formulars
const toggleForm = () => {
  isFormVisible.value = !isFormVisible.value;
};

// Funktion zum Hinzufügen eines neuen Ortes
const handleNewPlace = (newPlace) => {
  console.log('Neuer Ort eingetragen:', newPlace);
  const place = { ...newPlace, id: places.value.length + 1, comments: [], isOpen: false, stars: 0 };
  places.value.push(place);
  isFormVisible.value = false;
};
</script>

<template>
  <div class="content-container">
    <h1>Essen und Trinken</h1>
    <p>
      Finde die besten barrierefreien Restaurants, Bars und Cafés in Berlin.<br />
      Trage selbst Orte ein, die du toll findest und weiterempfehlen möchtest.
    </p>

    <!-- Zeile für die Übersicht und den Button -->
    <div class="header-row">
      <p><strong>Übersicht empfohlener Lokale</strong></p>
      <button @click="toggleForm" :aria-expanded="isFormVisible" aria-controls="new-place-form">
        {{ isFormVisible ? 'Formular schließen' : 'Neuen Ort eintragen' }}
      </button>
    </div>

    <!-- Formular zum Hinzufügen eines neuen Ortes -->
    <NewPlaceForm v-if="isFormVisible" @submit="handleNewPlace" />

    <!-- Liste der Orte -->
    <div v-for="place in places" :key="place.id">
      <!-- Verwendung der neuen PlaceItem-Komponente -->
      <PlaceItem :place="place" />
    </div>
  </div>
</template>







<style scoped>


.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Button und Text vertikal zentrieren */
  margin-top: 40px;
  margin-bottom: 10px;
}

.header-row p {
  margin: 0;
  font-size: 1.2em;
}

.header-row button {
  background-color: #ffffff;
  border: 3px solid;
  border-color: #89c5a8;
  padding-top: 10px;
  padding-bottom: 10px;
}

.header-row button:hover {
  background-color: #89c5a8;
}




/* Fokus-Stil für bessere Sichtbarkeit */
button:focus, input:focus, select:focus, textarea:focus {
  outline: 3px solid #295338
}



.summary {
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
}


label {
  display: block;
  margin-top: 10px;
}

button {
  margin-left: auto; /* Schiebt den Button nach rechts */
  padding: 5px 10px;
  background-color: #89c5a8;
  color: black; 
  border: none;
  cursor: pointer;
}


button:hover {
  background-color: #72a490;
}

/* Stern-Styling */
.star {
  font-size: 20px;
  color: #ccc; /* Unausgefüllte Sterne */
  cursor: pointer;
}

/* Zusätzliche Tastatursteuerung: Button-Rahmen und Fokus */
button:focus {
  outline: 3px solid #295338;
}


.error-message {
  margin-top: 10px;
  padding: 10px;
  background-color: #ffffff; 
  color: #d8000c; /* Dunkles Rot für den Text */
  border: 2px solid #d8000c; /* Dunkles Rot für den Rand */
  font-size: 20px; /* Größere Schriftgröße */
  border-radius: 4px; /* Abgerundete Ecken */
}
</style>
