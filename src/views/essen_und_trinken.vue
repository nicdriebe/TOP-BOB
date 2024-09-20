<script setup>
import { ref } from 'vue';
import { places as initialPlaces } from '../data/places.js';
import NewPlaceForm from '../components/NewPlaceForm.vue';

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
  const place = { ...newPlace, id: places.value.length + 1, comments: [], isOpen: false };
  places.value.push(place);

  // Formular nach dem Hinzufügen verbergen
  isFormVisible.value = false;
};

// Funktion zum Aufklappen/Schließen der Details
const toggleDetails = (place) => {
  place.isOpen = !place.isOpen;
};

// Funktion zum Hinzufügen eines Kommentars
const addComment = (place) => {
  if (place.newComment) {
    place.comments.push(place.newComment);
    place.newComment = '';
  }
};

// Funktion zum Hinzufügen einer Sternebewertung
const addRating = (place, stars) => {
  place.stars = stars; // Direkt die Sterne aktualisieren
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
    <!-- Button zum Umschalten der Formularanzeige, rechts ausgerichtet -->
    <button @click="toggleForm" :aria-expanded="isFormVisible" aria-controls="new-place-form">
      {{ isFormVisible ? 'Formular schließen' : 'Neuen Ort eintragen' }}
    </button>
    </div>

    <!-- Aufruf der NewPlaceForm-Komponente -->
    <NewPlaceForm v-if="isFormVisible" @submit="handleNewPlace" />


    <div v-for="place in places" :key="place.id" class="place">
      <div class="place-header">
        <h5 ><strong>{{ place.name }}</strong></h5>
        <span>{{ place.type }}</span> | 
        <span >{{ place.district }}</span> | 
        <span >
          <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= place.stars }">★</span>
        </span>
        <button @click="toggleDetails(place)" :aria-expanded="place.isOpen" aria-controls="place-details-{{ place.id }}">
          <span class="material-icons">{{ place.isOpen ? 'expand_less' : 'expand_more' }}</span>
        </button>
      </div>

      <div v-if="place.isOpen" :id="'place-details-' + place.id" class="details">
        <p tabindex="0"><strong>Adresse:</strong> {{ place.address }}</p>
        <p tabindex="0"><strong>Warum dieser Ort toll ist:</strong> {{ place.description }}</p>

        <ul role="list">
          <li v-for="comment in place.comments" :key="comment">{{ comment }}</li>
        </ul>

        <hr id="comment-line">
        <p><strong>Hast du diesen Ort besucht? Teile deine Erfahrungen.</strong></p>

        <textarea v-model="place.newComment" class="comment-textarea" placeholder="Kommentar schreiben"></textarea>
        <button class="comment-button" @click="addComment(place)">Kommentar hinzufügen</button>

        <div class="star-rating">
          <p><strong>Bewerte den Ort:</strong></p>
          <div class="rating-container">
            <label for="stars">Bewertung:</label>
            <div class="stars">
              <span v-for="star in 5" :key="star" class="star" @click="addRating(place, star)" :class="{ filled: star <= place.stars }">★</span>
            </div>
          </div>
        </div>
      </div>
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



h5{
  margin-top: 7px;
}



/* Fokus-Stil für bessere Sichtbarkeit */
button:focus, input:focus, select:focus, textarea:focus {
  outline: 3px solid #295338
}

.comment-line{
  margin-top: 20px;
  color:#72a490;
}

.place {
  margin-bottom: 10px;
  border: 2px solid #89c5a8;
  padding: 10px;
}

/* Flexbox für die Platzierung der Elemente in einer Zeile */
.place-header {
  display: flex;
  align-items: center;
  gap: 15px; /* Abstand zwischen den Elementen */
  flex-wrap: wrap; /* Flexibles Umbruch bei kleinen Bildschirmen */
}

.summary {
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
}

.details {
  margin-top: 10px;
}

.icon-button {
  display: flex;
  align-items: center; /* Zentriert das Icon und den Text vertikal */
}

.material-icons {
  font-size: 30px; /* Setzt die Größe des Icons */
  margin-right: 0px; /* Abstand zwischen Icon und Text */
  margin-top: 0px;
}


/* Kommentarbereich */
.comment-textarea {
  width: 100%; /* Breite auf 100% des Containers setzen */
  height: 100px; /* Höhe des Textbereichs */
  margin-bottom: 10px; /* Abstand zum Button */
  padding: 10px; /* Innenabstand für bessere Lesbarkeit */
  font-size: 14px; /* Textgröße */
  border: 1px solid #ccc; /* Rahmen um das Eingabefeld */
  border-radius: 4px; /* Abgerundete Ecken */
  resize: vertical; /* Nur vertikales Anpassen der Höhe erlauben */
}

/* Button unter dem Kommentar-Eingabefeld am rechten Rand */
.comment-button {
  display: block;
  margin-left: auto; /* Button nach rechts verschieben */
  background-color: #89c5a8;
  color: black; /* Schriftfarbe */
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

#comment-line {
  border: none; /* Entfernt die Standard-Rahmenlinie */
  height: 3px; /* Höhe der Linie */
  background-color: #89c5a8; /* Hintergrundfarbe der Linie */
  margin-top: 40px; /* Abstand oben und unten */
}

.comment-button:focus {
  outline: 3px solid #295338; /* Sichtbarer Fokusrahmen */
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

.star.filled {
  color: #295338; /* Gefüllte Sterne */
}


/* Sternebewertung */
.star-rating {
  margin-top: 20px;
}

/* Erklärungstext über dem Label */
.star-rating p {
  margin-bottom: 10px;
  color: #555;
}

/* Container für Label und Sterne in einer Zeile */
.rating-container {
  display: flex;
  align-items: center;
  gap: 10px; /* Abstand zwischen Label und Sternen */
}

/* Sterne größer und barrierefrei mit Fokusbereich */
.stars .star {
  font-size: 36px; /* Größe der Sterne */
  cursor: pointer;
  display: inline-block;
  width: 44px;
  height: 44px; /* Mindestgröße für Klickfläche (44x44 px) */
  line-height: 44px; /* Vertikale Ausrichtung des Sterns */
  text-align: center;
}

.stars .star.filled {
  color: #295338; /* Ausgefüllte Sterne */
}

.stars .star:focus {
  outline: 3px solid #295338; /* Fokusrahmen für Barrierefreiheit */
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
