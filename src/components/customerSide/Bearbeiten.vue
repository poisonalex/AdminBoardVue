<template>
  <div class="edit-container">
    <p>Bearbeiten:</p>
    <form class="border" @submit.prevent="submitForm">
      <input type="file" name="" id="" class="upload" />
      <button @click="saveNewPlan">Speichern</button>
    </form>
    <span class="border">
      <button @click="downloadCheckin">
        CheckIn Pdf-download
        <font-awesome-icon icon="fa-solid fa-download" class="fas" />
      </button>
    </span>
  </div>
  <Alert
    :alertName="headlineAlert"
    @closeAlert="alertClose"
    @confirmeTask="taskConfirme()"
    v-if="alert"
  />
  <SuccessAlert v-if="showSuccess" />
</template>

<script>
import Alert from "../Alert.vue";
import SuccessAlert from "@/components/SuccessAlert.vue";

export default {
  components: { Alert, SuccessAlert },
  data() {
    return {
      headlineAlert: "Willst du einen neuen Plan hochladen?",
      alert: false,
      showSuccess: false,
    };
  },
  methods: {
    saveNewPlan() {
      this.alert = !this.alert;
    },
    downloadCheckin() {
      this.showSuccess = true;
      //hier pdf download
      this.timer = setTimeout(() => {
        this.showSuccess = false;
      }, 3000); // 3 seconds in milliseconds
    },
    //Alert Struckutr
    alertClose() {
      this.alert = !this.alert;
    },
    taskConfirme() {
      this.alert = !this.alert;
      this.showSuccess = true;
      //hier speichern vom neuen Plan
      this.timer = setTimeout(() => {
        this.showSuccess = false;
      }, 3000); // 3 seconds in milliseconds
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 1rem;
  height: 3rem;
  width: 100%;
  background: #757575;
  border: #00688b solid;
  border-radius: 24px;

  .border {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
    height: 100%;
    border-left: #4d4d4d solid;
  }

  .upload {
    width: 20rem;
    &::file-selector-button {
      padding: 0.5rem 0.5rem;
      width: 50%;
      background-color: #00688b;
      border: none;
      border-radius: 24px;
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

  button {
    padding: 0.5rem 0.5rem;
    margin: 1rem 0;
    width: 250px;
    background: #00688b;
    border: none;
    border-radius: 24px;
    color: white;
    font-size: 1em;
    cursor: pointer;
    &:hover {
      background: #0095c5;
      .fas {
        color: #00688b;
      }
    }
  }
}
</style>
