<template>
  <Header :headerName="headline" />
  <div class="create-customer">
    <form action="">
      <h2>Formular zum Erstellen eines Kunden.</h2>
      <div
        v-for="(question, index) in questions"
        :key="index"
        class="container"
      >
        <label>{{ question.text }}</label>
        <div v-if="question.type === 'text'">
          <input type="text" v-model="question.answer" />
        </div>
        <div v-if="question.type === 'email'">
          <input type="email" v-model="question.answer" />
        </div>
        <div v-if="question.type === 'password'">
          <input type="password" v-model="question.answer" />
        </div>
        <div v-else-if="question.type === 'checkbox'">
          <input type="checkbox" v-model="question.answer" />
        </div>
        <div v-else-if="question.type === 'date'">
          <input type="date" v-model="question.answer" />
        </div>
        <div v-else-if="question.type === 'textarea'">
          <textarea v-model="question.answer" />
        </div>
        <div v-else-if="question.type === 'select'">
          <select v-model="question.answer">
            <option
              v-for="(option, optionIndex) in question.options"
              :key="optionIndex"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>
      <h2></h2>
      <h3>Trainingswoche:</h3>
      <span
        v-for="(day, index) in week"
        :key="index"
        class="trainingsweek-container"
      >
        {{ day.day }}
        <div v-if="day.type === 'select'">
          <select v-model="day.answer">
            <option
              v-for="(option, optionIndex) in day.options"
              :key="optionIndex"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </span>

      <h2></h2>

      <h3>Warmup adden:</h3>
      <span
        v-for="(warmupQuestion, index) in warupQuestions"
        :key="index"
        class="container"
      >
        <label>Übungen:</label>
        <div v-if="warmupQuestion.type === 'text'">
          <input type="text" v-model="warmupQuestion.answer" />
        </div>
      </span>
      <button @click="addExesise" type="button">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>

      <h2></h2>

      <input type="file" name="" id="" class="upload" />

      <h2></h2>

      <button @click="saveFormular" type="button">Speichern</button>
      <Alert
        :alertName="headlineAlert"
        @closeAlert="alertClose"
        @confirmeTask="taskConfirme"
        v-if="alert"
      />
    </form>
  </div>
  <SuccessAlertVue v-if="showSuccess" />
</template>

<script>
import Header from "@/components/Header.vue";
import Alert from "@/components/Alert.vue";
import SuccessAlertVue from "@/components/SuccessAlert.vue";

//@submit.prevent="submitForm"

export default {
  name: "createCustomer",
  components: { Header, Alert, SuccessAlertVue },
  data() {
    return {
      headline: "Kunden erstellen",
      headlineAlert: "Willst du den Kunden erstellen?",
      alert: false,
      timer: null,
      showSuccess: false,

      questions: [
        { text: "Name:", type: "text", answer: "" },
        { text: "Email:", type: "email", answer: "" },
        { text: "Password:", type: "password", answer: "" },
        //----
        {
          text: "Ziel:",
          type: "select",
          answer: "",
          options: ["-", "Muskelaufbau", "Abnehmen", "Fit werden"],
        },
        { text: "Fokus:", type: "text", answer: "" },
        { text: "Zielgewicht:", type: "text", answer: "" },
        { text: "Aktuelles Gewicht:", type: "text", answer: "" },
        //----
        { text: "Geburtsdatum:", type: "date", answer: "" },
        {
          text: "Biologisches Geschlecht:",
          type: "select",
          answer: "",
          options: ["-", "m", "w"],
        },
        //----
        { text: "Betreibst du Sport?:", type: "checkbox", answer: false },
        { text: "Welchen:", type: "text", answer: "" },
        //----
        { text: "Wo machst du Sport?:", type: "text", answer: "" },
        { text: "Gegebenheiten:", type: "textarea", answer: "" },
        //----
        { text: "Zeiten:", type: "text", answer: "" },
        { text: "Häufigkeit:", type: "text", answer: "" },
        //----
        { text: "Cardio:", type: "checkbox", answer: false },
        { text: "Häufigkeit:", type: "text", answer: "" },
        //----
        { text: "Probleme:", type: "checkbox", answer: "" },
        { text: "Welche:", type: "textarea", answer: "" },
        //----
      ],

      week: [
        {
          day: "Montag",
          type: "select",
          answer: "",
          options: [
            "-",
            "Krafttraining",
            "Ausdauertraining",
            "Fahrradfahren",
            "Fußball",
            "Handball",
            "Basketball",
            "Fechten",
            "Schwimmen",
          ],
        },
        {
          type: "select",
          day: "Dienstag",
          answer: "",
          options: [
            "-",
            "Krafttraining",
            "Ausdauertraining",
            "Fahrradfahren",
            "Fußball",
            "Handball",
            "Basketball",
            "Fechten",
            "Schwimmen",
          ],
        },
        {
          type: "select",
          day: "Mittwoch",
          answer: "",
          options: [
            "-",
            "Krafttraining",
            "Ausdauertraining",
            "Fahrradfahren",
            "Fußball",
            "Handball",
            "Basketball",
            "Fechten",
            "Schwimmen",
          ],
        },
        {
          type: "select",
          day: "Donnerstag",
          answer: "",
          options: [
            "-",
            "Krafttraining",
            "Ausdauertraining",
            "Fahrradfahren",
            "Fußball",
            "Handball",
            "Basketball",
            "Fechten",
            "Schwimmen",
          ],
        },
        {
          type: "select",
          day: "Freitag",
          answer: "",
          options: [
            "-",
            "Krafttraining",
            "Ausdauertraining",
            "Fahrradfahren",
            "Fußball",
            "Handball",
            "Basketball",
            "Fechten",
            "Schwimmen",
          ],
        },
        {
          type: "select",
          day: "Samstag",
          answer: "",
          options: [
            "-",
            "Krafttraining",
            "Ausdauertraining",
            "Fahrradfahren",
            "Fußball",
            "Handball",
            "Basketball",
            "Fechten",
            "Schwimmen",
          ],
        },
        {
          type: "select",
          day: "Sonntag",
          answer: "",
          options: [
            "-",
            "Krafttraining",
            "Ausdauertraining",
            "Fahrradfahren",
            "Fußball",
            "Handball",
            "Basketball",
            "Fechten",
            "Schwimmen",
          ],
        },
      ],

      warupQuestions: [
        { type: "text", answer: "" },
        { type: "text", answer: "" },
        { type: "text", answer: "" },
      ],
    };
  },
  methods: {
    //locasstorage start
    storeCreateData() {
      localStorage.getItem("createData", JSON.stringify(this.warupQuestions));
    },
    //locasstorage end
    taskConfirme() {
      this.showSuccess = true;
      //locasstorage
      this.storeCreateData();

      this.timer = setTimeout(() => {
        this.showSuccess = false;
      }, 3000); // 3 seconds in milliseconds
    },
    addExesise() {
      this.warupQuestions.push({ type: "text", answer: "" });
    },
    //Alert Struckutr
    saveFormular() {
      this.alert = !this.alert;
    },
    alertClose() {
      this.alert = !this.alert;
    },
  },
  beforeDestroy() {
    // Clear the timer when the component is destroyed
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.create-customer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 60%;
  background: #757575;
  border-radius: 24px;
  color: white;

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem;
    width: 50%;

    h2 {
      padding: 0 0 1rem 0;
      margin: 1rem 0 1rem 0;
      width: 100%;
      border-bottom: solid #4d4d4d;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.2rem 0.2rem;
      width: 100%;

      input {
        width: 15em;
        background: #cccccc;
        border: none;
      }

      select {
        width: 15em;
        background: #cccccc;
        border: none;
      }

      textarea {
        height: 5em;
        width: 15em;
        background: #cccccc;
        border: none;
        resize: none;
      }
    }

    .trainingsweek-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      width: 100%;

      button {
        padding: 0;
        margin: 0;
        width: 3rem;
      }

      input {
        width: 10em;
        background: #cccccc;
        border: none;
      }

      select {
        width: 15em;
        background: #cccccc;
        border: none;
      }
    }

    button {
      padding: 0.5rem 0.5rem;
      margin: 0.5rem 0 0 0;
      width: 10rem;
      background: #00688b;
      border: none;
      border-radius: 24px;
      color: white;
      font-size: 1em;
      cursor: pointer;
      &:hover {
        background: #0095c5;
      }
    }
    .upload {
      width: 20rem;
      &::file-selector-button {
        padding: 0.2em;
        width: 50%;
        background-color: #00688b;
        border: none;
        border-radius: 0.5em;
        font-size: 1.15em;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        cursor: pointer;
        color: white;
      }
      &::file-selector-button:hover {
        background-color: #0095c5;
      }
    }
  }
}
</style>
