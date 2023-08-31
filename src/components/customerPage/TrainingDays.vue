<template>
  <div class="list">
    <div v-for="(item, index) in trainngDayData" :key="index" class="acc">
      <input type="checkbox" :id="'acc-' + (index + 1)" class="input" />
      <label :for="'acc-' + (index + 1)">
        {{ item.day }}
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="fas" />
      </label>
      <div class="content">
        <!--Warmup-->
        <div
          class="container"
          v-if="!showWarmup[index]"
          @click="toggleWarmup(index)"
        >
          <h2>
            Warmup
            <font-awesome-icon
              icon="fa-solid fa-fire-flame-curved"
              class="fas"
            />
          </h2>
        </div>
        <form class="container warmup" v-if="showWarmup[index]">
          <h3 @click="toggleWarmup(index)">
            Warmup
            <font-awesome-icon
              icon="fa-solid fa-fire-flame-curved"
              class="fas"
            />
          </h3>
          <div class="body">
            <div class="warmup-beschreibung">
              <h4>Beschreibung:</h4>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="warmup-uebungen">
              <span>
                <h4>Übungen:</h4>
                <span
                  v-for="(warmupQuestion, index) in warupQuestions"
                  :key="index"
                >
                  <div v-if="warmupQuestion.type === 'text'">
                    <input type="text" v-model="warmupQuestion.answer" />
                  </div>
                </span>
                <span class="body">
                  <button @click="addExesise" type="button">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                  </button>
                  <button @click="removeExesise" type="button">
                    <font-awesome-icon icon="fa-solid fa-minus" />
                  </button>
                </span>
              </span>
              <span>
                <h4>Material:</h4>
                <span
                  v-for="(warmupMaterial, index) in warupMaterials"
                  :key="index"
                >
                  <div v-if="warmupMaterial.type === 'text'">
                    <input type="text" v-model="warmupMaterial.answer" />
                  </div>
                </span>
                <span class="body">
                  <button @click="addExesise" type="button">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                  </button>
                  <button @click="removeExesise" type="button">
                    <font-awesome-icon icon="fa-solid fa-minus" />
                  </button>
                </span>
              </span>
            </div>
          </div>
          <button class="save-warmup">Speichern</button>
        </form>
        <!--Trainingsplan-->
        <div
          class="container"
          v-if="!showTraining[index]"
          @click="toggleTraining(index)"
        >
          <h2>
            Trainingsplan <u>{{ item.headline }}</u>
            <font-awesome-icon icon="fa-solid fa-dumbbell" class="fas" />
          </h2>
        </div>
        <div class="container" v-if="showTraining[index]">
          <div class="trainingsplan">
            <h3 @click="toggleTraining(index)">
              Trainingsplan <u>{{ item.headline }}</u>
              <font-awesome-icon icon="fa-solid fa-dumbbell" class="fas" />
            </h3>
            <p
              v-for="(contentItem, contentIndex) in item.exercise"
              :key="contentIndex"
            >
              {{ contentItem }}
            </p>
          </div>
        </div>
        <!--Protokoll-->
        <div class="container">
          <h2>
            Protokoll
            <button @click="downloadProtocol(index)">
              Download
              <font-awesome-icon icon="fa-solid fa-download" class="fa" />
            </button>
            <font-awesome-icon icon="fa-solid fa-file-lines" class="fas" />
          </h2>
        </div>
        <!--Kommentar-->
        <div class="container">
          <h2>
            Kommentar
            <button @click="downloadComment(index)">
              Download
              <font-awesome-icon icon="fa-solid fa-download" class="fa" />
            </button>
            <font-awesome-icon icon="fa-solid fa-comment" class="fas" />
          </h2>
        </div>
        <SuccessAlertVue v-if="showSuccess[index]" />
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "../Alert.vue";
import SuccessAlertVue from "../SuccessAlert.vue";

export default {
  props: { trainngDayData: Array },
  components: { Alert, SuccessAlertVue },
  data() {
    return {
      timer: null,
      showSuccess: Array(this.trainngDayData).fill(false),
      showWarmup: Array(this.trainngDayData).fill(false),
      showTraining: Array(this.trainngDayData).fill(false),
      warupQuestions: [
        { type: "text", answer: "" },
        { type: "text", answer: "" },
        { type: "text", answer: "" },
        { type: "text", answer: "" },
        { type: "text", answer: "" },
      ],
      warupMaterials: [
        { type: "text", answer: "" },
        { type: "text", answer: "" },
        { type: "text", answer: "" },
        { type: "text", answer: "" },
        { type: "text", answer: "" },
      ],
    };
  },
  methods: {
    addExesise() {
      this.warupQuestions.push({ type: "text", answer: "" });
      this.warupMaterials.push({ type: "text", answer: "" });
    },
    removeExesise() {
      this.warupQuestions.splice(-1);
      this.warupMaterials.splice(-1);
    },
    toggleWarmup(index) {
      this.showWarmup[index] = !this.showWarmup[index];
    },
    toggleTraining(index) {
      this.showTraining[index] = !this.showTraining[index];
    },
    downloadProtocol(index) {
      //download
      this.showSuccess[index] = true;

      this.timer = setTimeout(() => {
        this.showSuccess[index] = false;
      }, 3000); // 3 seconds in milliseconds
    },
    downloadComment(index) {
      //download
      this.showSuccess[index] = true;

      this.timer = setTimeout(() => {
        this.showSuccess[index] = false;
      }, 3000); // 3 seconds in milliseconds
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/warmup.scss";
@import "./scss/trainingsplan.scss";

.list {
  width: 100%;

  .acc {
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem 0;
    width: 100%;

    .input {
      position: absolute;
      z-index: -1;
      opacity: 0;
      &:checked {
        & ~ label {
          .fas {
            transform: translate(0, -50%) rotate(180deg);
          }
          background: #035671;
        }
        & ~ .content {
          height: auto;
          opacity: 1;
          transform: translate(0, 0);
        }
      }
    }

    label {
      position: relative;
      z-index: 2;
      padding: 1rem 0;
      width: 100%;
      background: #00688b;
      border-radius: 1rem;
      font-size: 1.5em;
      cursor: pointer;
      transition: all 150ms;
      &:hover {
        background: #035671;
      }

      .fas {
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translate(0, -50%);
        transition: all 350ms;
      }
    }

    .content {
      position: relative;
      z-index: 1;
      height: 0;
      width: 100%;
      opacity: 0;
      transform: translate(0, -20%);
      transition: all 350ms;
      overflow: hidden;

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        width: 100%;
        background: #757575;
        border-radius: 24px;

        h2 {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0 0.5rem;
          margin: 0.5rem;
          width: 90%;
          cursor: pointer;

          button {
            height: 100%;
            width: 900px;
            background: #757575;
            border: none;
            border-left: #4d4d4d solid;
            border-right: #4d4d4d solid;
            color: white;
            font-size: 0.7em;
            cursor: pointer;
            &:hover {
              .fa {
                color: #00688b;
              }
            }
          }
        }

        h3 {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
          margin: 0;
          width: 90%;
          border-bottom: #4d4d4d solid;
          cursor: pointer;
        }

        .fas {
          color: #ffa500;
        }

        .body {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
      }
    }
  }
}
</style>
