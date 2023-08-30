<template>
  <nav>
    <div class="slider"></div>
    <ul>
      <li>
        <button @click="trainingsweek">
          <span>
            <font-awesome-icon icon="fa-solid fa-calendar-week" class="icon" />
            Trainingswoche
          </span>
          <div class="line" :class="{ activeOne: isActiveOne }"></div>
        </button>
      </li>
      <li>
        <button @click="messages">
          <span>
            <font-awesome-icon icon="fa-solid fa-paper-plane" class="icon" />
            Nachrichten
          </span>
          <div class="line" :class="{ activeOne: isActiveTwo }"></div>
        </button>
      </li>
      <li>
        <button @click="edit">
          <span>
            <font-awesome-icon icon="fa-solid fa-file-pen" class="icon" />
            Bearbeiten
          </span>
          <div class="line" :class="{ activeOne: isActiveThree }"></div>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { faL } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      isActiveOne: true,
      isActiveTwo: false,
      isActiveThree: false,
    };
  },
  methods: {
    trainingsweek() {
      this.isActiveOne = true;
      this.isActiveTwo = false;
      this.isActiveThree = false;
      this.$emit("showTrainingsweek");
    },
    messages() {
      this.isActiveOne = false;
      this.isActiveTwo = true;
      this.isActiveThree = false;
      this.$emit("showMessages");
    },
    edit() {
      this.isActiveOne = false;
      this.isActiveTwo = false;
      this.isActiveThree = true;
      this.$emit("showEdit");
    },
  },
};
</script>

<style lang="scss" scoped>
$font-color: white;
$highlight-color: #0095c5;

nav {
  position: relative;
  display: flex;

  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    gap: 1rem;

    li {
      list-style: none;
      &:hover {
        button {
          .icon {
            scale: 1;
            margin: 0 0.3rem 0 0;
          }
        }
      }

      button {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 2rem;
        height: 2.5rem;
        width: 11rem;
        background: transparent;
        border: none;
        border-radius: 24px;
        color: $font-color;
        font-size: 1rem;
        cursor: pointer;
        transition: all 350ms ease-in-out;
        &:hover {
          background: #0095c5;
        }

        span {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          .icon {
            height: 1rem;
            width: 1rem;
            scale: 0;
            margin: 0 -1rem 0 0;
            transform-origin: -0.4rem 50%;
            transition: all 350ms ease-in-out;
          }
        }
        .line {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          height: 100%;
          width: 11rem;
          background: #0095c5;
          border-radius: 24px;
          scale: 0;
        }

        .activeOne {
          scale: 1;
        }
      }
    }
  }
}
</style>
