<template>
  <div class="alert-background">
    <div class="alert">
      <button class="close" @click="closeAlert">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
      <h2>{{ headline }}</h2>
      <span>
        <button @click="confirmeTask">Bestätigen</button>
        <button @click="closeAlert">Abrechen</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["alertName"],
  data() {
    return {
      headline: this.alertName,
    };
  },
  computed: {},
  methods: {
    closeAlert() {
      this.$emit("closeAlert");
    },
    confirmeTask() {
      this.$emit("confirmeTask");
    },
  },
};
</script>

<style lang="scss" scoped>
.alert-background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  .alert {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 1.5rem;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: black;

    .close {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.2rem 0.2rem;
      height: 1.2em;
      width: 1.2em;
      background: #a10d0d;
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 1.2em;
      cursor: pointer;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      button {
        padding: 0.5rem 0.5rem;
        background: #4d4d4d;
        border: none;
        border-radius: 24px;
        color: white;
        font-size: 1em;
        cursor: pointer;
        &:hover {
          background: #757575;
        }
      }
    }
  }
}
</style>
