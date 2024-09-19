<script setup>
import { ref, computed } from 'vue';

// Reaktive Zustände für Formularfelder
const name = ref('');
const email = ref('');
const phoneNumber = ref('');
const message = ref('');
const contactByTextOnly = ref(false);
const contactByPhoneOnly = ref(false);
const contactByOther = ref(false);
const contactMethod = ref('');

// Berechnete Eigenschaft zur Formularvalidierung
const isContactInfoInvalid = computed(() => {
  // Mindestens eines der Felder muss ausgefüllt sein
  return !(email.value.trim() !== '' || phoneNumber.value.trim() !== '');
});

const isFormInvalid = computed(() => {
  return name.value.trim() === '' || isContactInfoInvalid.value;
});

// Simulierte Formularübermittlung
const submitForm = () => {
  if (!isFormInvalid.value) {
    alert('Formular wurde erfolgreich abgesendet!');
  } else {
    alert('Bitte füllen Sie alle erforderlichen Felder aus.');
  }
};
</script>

<template>
  <div class="content-container">
    <h1>Kontakt</h1>
    <p>Hast Fragen oder willst uns gern Feedback geben? <br>
      Nutze unser Kontaktformular und lass uns wissen, wie wir dir helfen können.</p>

    <!-- Kontaktformular -->
    <form @submit.prevent="submitForm" aria-labelledby="kontakt-heading">
      <!-- Name -->
      <div>
        <label for="name">Name (erforderlich):</label>
        <input
          type="text"
          id="name"
          v-model="name"
          required
          aria-required="true"
          aria-describedby="name-description"
          placeholder="Ihr Name"
        />
        <small id="name-description">Bitte geben Sie Ihren vollständigen Namen ein.</small>
      </div>

      <!-- E-Mail -->
      <div>
        <label for="email">E-Mail:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          aria-required="true"
          aria-describedby="email-description"
          placeholder="Ihre E-Mail-Adresse"
        />
        <small id="email-description">Bitte geben Sie eine gültige E-Mail-Adresse ein.</small>
      </div>

      <!-- Telefonnummer -->
      <div>
        <label for="phoneNumber">Telefonnummer:</label>
        <input
          type="tel"
          id="phoneNumber"
          v-model="phoneNumber"
          aria-describedby="phoneNumber-description"
          placeholder="Ihre Telefonnummer"
        />
        <small id="phoneNumber-description">Bitte geben Sie Ihre Telefonnummer ein, falls gewünscht.</small>
      </div>

      <!-- Nachricht -->
      <div>
        <label for="message">Nachricht:</label>
        <textarea
          id="message"
          v-model="message"
          aria-describedby="message-description"
          placeholder="Ihre Nachricht"
        ></textarea>
        <small id="message-description">Bitte teilen Sie uns Ihre Nachricht oder Ihr Anliegen mit.</small>
      </div>

      <!-- Kontaktpräferenzen -->
      <fieldset>
        <legend>Kontaktpräferenzen</legend>
        
        <div>
          <input
            type="checkbox"
            id="contactByTextOnly"
            v-model="contactByTextOnly"
            aria-describedby="contactByTextOnly-description"
          />
          <label for="contactByTextOnly">Ich möchte nur Textnachrichten, keine Anrufe bitte</label>
          <small id="contactByTextOnly-description">Wählen Sie diese Option, wenn Sie nur Textnachrichten erhalten möchten.</small>
        </div>

        <div>
          <input
            type="checkbox"
            id="contactByPhoneOnly"
            v-model="contactByPhoneOnly"
            aria-describedby="contactByPhoneOnly-description"
          />
          <label for="contactByPhoneOnly">Ich möchte nur Anrufe, keine Textnachrichten bitte</label>
          <small id="contactByPhoneOnly-description">Wählen Sie diese Option, wenn Sie nur Anrufe erhalten möchten.</small>
        </div>

        <div>
          <input
            type="checkbox"
            id="contactByOther"
            v-model="contactByOther"
            aria-describedby="contactByOther-description"
          />
          <label for="contactByOther">Ich möchte auf einem anderen Weg kontaktiert werden</label>
          <input
            type="text"
            id="contactMethod"
            v-model="contactMethod"
            aria-describedby="contactMethod-description"
            placeholder="Bitte geben Sie an, wie wir Sie kontaktieren sollen"
            :disabled="!contactByOther"
          />
          <small id="contactByOther-description">Geben Sie bitte die alternative Kontaktmethode an.</small>
        </div>
      </fieldset>

      <!-- Absenden-Button -->
      <button type="submit" :disabled="isFormInvalid" aria-disabled="isFormInvalid">
        Absenden
      </button>
    </form>
  </div>
</template>

<style scoped>
.content-container {
  padding-bottom: 150px; 
}

form {
  max-width: 700px;
  margin: 0 auto;
}

div {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[disabled] {
  background-color: #ccc;
  cursor: not-allowed;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

legend {
  font-weight: bold;
  margin-bottom: 10px;
}



input[type="checkbox"] {
  margin-left: 0px;
}

input[type="text"] {
  width: 100%;
}
</style>