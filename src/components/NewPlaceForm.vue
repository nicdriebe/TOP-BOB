<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue'; // importiert die emit Funktion

// Die emit Funktion definieren
const emit = defineEmits(['submit']);

const newPlace = ref({
  name: '',
  type: '',
  district: '',
  address: '',
  description: '',
  stars: 1
});
const errorMessage = ref('');

// Funktion zum Übermitteln des Formulars
const submitForm = () => {
  if (!newPlace.value.name || !newPlace.value.type || !newPlace.value.district || !newPlace.value.address || !newPlace.value.description || !newPlace.value.stars) {
    errorMessage.value = 'Bitte fülle alle Felder aus.';
    return;
  }
  // Das submit-Event auslösen, um den neuen Ort zu übergeben
  emit('submit', { ...newPlace.value });

  // Felder zurücksetzen
  newPlace.value = {
    name: '',
    type: '',
    district: '',
    address: '',
    description: '',
    stars: 1
  };
  errorMessage.value = '';
};

// Funktion zur Bewertung durch Anklicken der Sterne
const addRating = (stars) => {
  newPlace.value.stars = stars;
};

const clearError = () => {
  errorMessage.value = '';
};
</script>

  



<template>
    <div id="new-place-form">
      <!-- Rahmen, der die Überschrift und das Formular einschließt -->
      <div class="place-form">
        <h3 tabindex="0">Neuen Ort eintragen</h3>
  
        <!-- Fehlermeldung -->
        <div v-if="errorMessage" class="error-message" role="alert" tabindex="0" @click="clearError">
          {{ errorMessage }}
        </div>
  
        <form @submit.prevent="submitForm">
          <!-- Erste Zeile: Name, Bezirk, Adresse -->
          <div class="form-row">
            <div class="form-group">
              <label for="name"><strong>Name des Ortes:</strong></label>
              <input v-model="newPlace.name" id="name" required />
            </div>
  
            <div class="form-group">
              <label for="district"><strong>Bezirk:</strong></label>
              <input v-model="newPlace.district" id="district" required />
            </div>
  
            <div class="form-group">
              <label for="address"><strong>Genaue Adresse:</strong></label>
              <input v-model="newPlace.address" id="address" required />
            </div>
          </div>
  
          <!-- Zweite Zeile: Art des Ortes -->
          <div class="form-row">
            <div class="form-group full-width">
              <label for="type"><strong>Art des Ortes:</strong></label>
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
          </div>
  
          <!-- Dritte Zeile: Beschreibung -->
          <div class="form-row">
            <div class="form-group full-width">
              <label for="description"><strong>Hier ist es toll, weil:</strong></label>
              <textarea v-model="newPlace.description" id="description" required></textarea>
            </div>
          </div>
  
          <!-- Vierte Zeile: Sternebewertung und Button -->
          <div class="form-row align-center">
          <div class="form-group stars-group">
            <label for="stars"><strong>Sternebewertung:</strong></label>
            <div class="star-rating">
              <div class="stars">
                <span v-for="star in 5" :key="star" class="star" @click="addRating(star)" :class="{ filled: star <= newPlace.stars }">★</span>
              </div>
            </div>
          </div>
  
            <!-- Button rechtsbündig -->
            <div class="form-group">
              <button type="submit" class="submit-button">Ort hinzufügen</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  


<style scoped>
/* Flexbox für die Formularfelder */
.place-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid #72a490;
  padding: 20px;
  margin-bottom: 30px;
  background-color: #00000008;
}

.form-row {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  margin-bottom: 15px;
}

.full-width {
  flex: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical;
}

/* Sternebewertung und Button in derselben Zeile */
.align-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stars-group {
  flex: 1;
}

/* Button styling */
.submit-button {
  background-color: #89c5a8;
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #72a490;
}

.submit-button:focus {
  outline: 3px solid #295338;
}

/* Fehlermeldung */
.error-message {
  margin-top: 10px;
  padding: 10px;
  background-color: #ffffff;
  color: #d8000c;
  border: 2px solid #d8000c;
  font-size: 20px;
  border-radius: 4px;
}

button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 3px solid #295338;
}


.stars {
  display: inline-block;
  font-size: 44px;
}

.star {
  font-size: 30px;
  color: #ccc; /* Unausgefüllte Sterne */
  cursor: pointer;
}

.star.filled {
  color: #295338; /* Gefüllte Sterne */
}



</style>
