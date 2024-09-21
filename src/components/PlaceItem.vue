<script setup>
import { ref } from 'vue';

// Props für den Ort
const props = defineProps({
  place: Object
});

// Funktion zum Umschalten der Details
const toggleDetails = () => {
  props.place.isOpen = !props.place.isOpen;
};

// Funktion zum Hinzufügen eines Kommentars
const addComment = () => {
  if (props.place.newComment) {
    props.place.comments.push(props.place.newComment);
    props.place.newComment = '';
  }
};

// Funktion zum Hinzufügen einer Sternebewertung
const addRating = (stars) => {
  props.place.stars = stars;  // Aktualisiere die Bewertung des Ortes
};
</script>

<template>
  <div class="place">
    <div class="place-header">
      <h5><strong>{{ place.name }}</strong></h5>
      <span>{{ place.type }}</span> | 
      <span>{{ place.district }}</span> | 
      <span>
        <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= place.stars }">★</span>
      </span>
      <button @click="toggleDetails" :aria-expanded="place.isOpen" :aria-controls="'place-details-' + place.id">
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
      <button class="comment-button" @click="addComment">Kommentar hinzufügen</button>

      <div class="star-rating">
        <p><strong>Bewerte den Ort:</strong></p>
        <div class="rating-container">
          <label for="stars">Bewertung:</label>
          <div class="stars">
            <span v-for="star in 5" :key="star" class="star" @click="addRating(star)" :class="{ filled: star <= place.stars }">★</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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