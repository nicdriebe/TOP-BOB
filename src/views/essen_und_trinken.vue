<script setup>
import { ref } from 'vue';

// Datenmodell für Orte
const places = ref([
  // Beispiel-Daten
  {
    id: 1,
    name: 'Zur Mühle',
    type: 'Restaurant',
    district: 'Mitte',
    address: 'Mühlenstr 1, 10115 Berlin',
    description: 'Gutes Lokal wegen barrierefreien Zugangs und gutem Service.',
    stars: 4,
    comments: []
  }
]);

// Neues Place-Objekt
const newPlace = ref({
  name: '',
  type: '',
  district: '',
  address: '',
  description: '',
  stars: 1
});

// Funktion zum Hinzufügen eines neuen Ortes
const addPlace = () => {
  const place = { ...newPlace.value, id: places.value.length + 1, comments: [] };
  places.value.push(place);
  
  // Felder zurücksetzen
  newPlace.value = {
    name: '',
    type: '',
    district: '',
    address: '',
    description: '',
    stars: 1
  };
};

// Funktion zum Hinzufügen eines Kommentars
const addComment = (place) => {
  if (place.newComment) {
    place.comments.push(place.newComment);
    place.newComment = '';
  }
};

// Funktion zum Hinzufügen einer Sternebewertung
const addRating = (place) => {
  if (place.newRating) {
    place.stars = place.newRating;
  }
};
</script>


<template>
  <div class="content-container">
    <h1>Essen und Trinken</h1>
    <p>
      Finde die besten barrierefreien Restaurants, Bars und Cafés in Berlin.<br />
      Trage selbst Orte ein, die du toll findest und weiterempfehlen möchtest.
    </p>

    <h2>Liste der eingetragenen Orte</h2>

<!-- Liste der Orte anzeigen -->
<div v-for="place in places" :key="place.id" class="place">
  <h3>{{ place.name }} ({{ place.type }})</h3>
  <p><strong>Bezirk:</strong> {{ place.district }}</p>
  <p><strong>Adresse:</strong> {{ place.address }}</p>
  <p><strong>Beschreibung:</strong> {{ place.description }}</p>
  <p><strong>Bewertung:</strong> {{ place.stars }} Sterne</p>
  
  <!-- Kommentar schreiben -->
  <textarea v-model="place.newComment" placeholder="Schreiben Sie einen Kommentar"></textarea>
  <button @click="addComment(place)">Kommentar hinzufügen</button>

  <!-- Sternebewertung -->
  <div class="star-rating">
    <label for="stars">Bewerten:</label>
    <select v-model="place.newRating">
      <option v-for="n in 5" :key="n" :value="n">{{ n }} Sterne</option>
    </select>
    <button @click="addRating(place)">Bewertung abgeben</button>
  </div>

  <!-- Kommentare anzeigen -->
  <ul>
    <li v-for="comment in place.comments" :key="comment">{{ comment }}</li>
  </ul>
</div>

<hr />

<!-- Formular zum Hinzufügen eines neuen Ortes -->
<h2>Neuen Ort eintragen</h2>
<form @submit.prevent="addPlace">
  <div>
    <label for="name">Name des Ortes:</label>
    <input v-model="newPlace.name" id="name" required />
  </div>

  <div>
    <label for="type">Art des Lokals:</label>
    <select v-model="newPlace.type" id="type" required>
      <option disabled value="">Bitte auswählen</option>
      <option>Restaurant</option>
      <option>Bar</option>
      <option>Cafe</option>
      <option>Imbiss</option>
      <option>Bistro</option>
      <option>Biergarten</option>
    </select>
  </div>

  <div>
    <label for="district">Bezirk:</label>
    <input v-model="newPlace.district" id="district" required />
  </div>

  <div>
    <label for="address">Genaue Adresse:</label>
    <input v-model="newPlace.address" id="address" required />
  </div>

  <div>
    <label for="description">Warum gutes Lokal:</label>
    <textarea v-model="newPlace.description" id="description" required></textarea>
  </div>

  <div>
    <label for="stars">Sternebewertung (1-5):</label>
    <select v-model="newPlace.stars" id="stars" required>
      <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
    </select>
  </div>

  <button type="submit">Ort hinzufügen</button>
</form>
  </div>
</template>

  
 
  
  <style scoped>
  .place {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}

.star-rating {
  margin-top: 10px;
}

form {
  margin-top: 20px;
}

label {
  display: block;
  margin-top: 10px;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #89c5a8;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #72a490;
}
  </style>
  