<template>
  <div class="trainings-woche-container">
    <header>
      <h3>Trainingswoche</h3>
      <font-awesome-icon icon="fa-solid fa-dumbbell" class="i" />
    </header>
    <div class="body">
      <div class="section main" v-for="(day, index) in week" :key="index">
        <span class="tage">{{ day.day }}</span>
        <span class="aufgabe">{{ getExerciseForDay(day.day) || "-" }}</span>
      </div>
    </div>
    <h3 class="button" @click="toggleEditSection">
      Plan bearbeiten:
      <font-awesome-icon
        icon="fa-solid fa-chevron-down"
        v-if="!showEditSection"
        class="fa"
      />
      <font-awesome-icon
        icon="fa-solid fa-chevron-up"
        v-if="showEditSection"
        class="fa"
      />
    </h3>
    <div class="body edit-plan" v-if="showEditSection">
      <div class="section edit">
        <span class="days-toedit">
          <span class="tage" v-for="(day, index) in week" :key="index">
            {{ day.day }}
          </span>
        </span>
        <span class="edit-days">
          <div v-for="index in 7" :key="index">
            <select v-model="selectedOptions[index - 1]">
              <option
                v-for="(option, optionIndex) in options"
                :key="optionIndex"
                :value="option.value"
              >
                <!--<font-awesome-icon :icon="option.icon" />-->
                {{ option.label }}
              </option>
            </select>
          </div>
        </span>
      </div>
      <button>Speichern</button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPersonRunning, faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default {
  props: { trainingsWeekData: Array },
  components: { FontAwesomeIcon },
  data() {
    return {
      week: [
        { day: "Montag" },
        { day: "Dienstag" },
        { day: "Mittwoch" },
        { day: "Donnerstag" },
        { day: "Freitag" },
        { day: "Samsatg" },
        { day: "Sonntag" },
      ],
      selectedOptions: Array(7).fill(""),
      options: [
        { label: "-", value: "option0", icon: "" },
        { label: "Krafttraining", value: "option1", icon: faDumbbell },
        { label: "Laufen", value: "option2", icon: faPersonRunning },
        { label: "Radfahren", value: "option3", icon: "" },
        { label: "Schwimmen", value: "option3", icon: "" },
        { label: "Fußball", value: "option3", icon: "" },
        { label: "Handball", value: "option3", icon: "" },
        { label: "Basketball", value: "option3", icon: "" },
        { label: "Voleyball", value: "option3", icon: "" },
        { label: "Golf", value: "option3", icon: "" },
        { label: "Krafttraining & Laufen", value: "option3", icon: "" },
        { label: "Krafttraining & Radfahren", value: "option3", icon: "" },
        { label: "Krafttraining & Schwimmen", value: "option3", icon: "" },
        // Weitere Optionen mit entsprechenden Font Awesome Klassen
      ],
      showEditSection: false,
    };
  },
  methods: {
    getExerciseForDay(day) {
      if (this.trainingsWeekData && this.trainingsWeekData.trainingsweek) {
        const index = this.week.findIndex((item) => item.day === day);
        if (index !== -1 && this.trainingsWeekData.trainingsweek[index]) {
          return this.trainingsWeekData.trainingsweek[index];
        }
        return null;
      }
    },
    toggleEditSection() {
      this.showEditSection = !this.showEditSection;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin center() {
  display: flex;
  align-items: center;
  justify-content: center;
}
.trainings-woche-container {
  @include center();
  flex-direction: column;
  padding: 1rem 1rem;
  width: 100%;
  background: #757575;
  border-radius: 24px;

  header {
    @include center();
    justify-content: space-between;
    padding: 0 1rem;
    width: 90%;
    border-bottom: #4d4d4d solid;

    h3 {
      padding: 0;
      margin: 0;
    }

    .i {
      color: #ffa500;
    }
  }

  .button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    margin: 1rem 0;
    width: 92.5%;
    border-top: #4d4d4d solid;
    border-bottom: #4d4d4d solid;
    cursor: pointer;

    .fa {
      position: absolute;
      right: 10px;
    }
  }

  .body {
    @include center();
    flex-direction: row;
    padding: 0.5rem 0.5rem;
    margin-top: 1rem;
    width: 90%;
    background: #646464;
    border: #00688b none;
    .section {
      @include center();
      flex-direction: column;
      width: 100%;
      border: none;
      .tage {
        width: 100%;
        border-bottom: #4d4d4d solid;
      }
    }

    .main {
      border: none;
    }
  }
  .edit-plan {
    flex-direction: column;
    background: #757575;
    border: none;
    border-top: #4d4d4d solid;

    h3 {
      width: 50%;
      border-bottom: #4d4d4d solid;
    }
    .edit {
      @include center();
      flex-direction: column;
      border: none;

      .days-toedit {
        @include center();
        flex-direction: row;
        width: 100%;
      }

      .edit-days {
        @include center();
        flex-direction: row;
        margin-top: 0.5rem;
        width: 100%;

        select {
          width: 100%;
          height: 3em;
          background: #cccccc;
        }
      }
    }

    button {
      padding: 0.5rem 0.5rem;
      margin: 1rem 0;
      width: 150px;
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
  }
}
</style>
