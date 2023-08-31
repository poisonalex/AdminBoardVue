<template>
  <div class="message-container">
    <header>
      <h3>Nachrichten</h3>
      <font-awesome-icon icon="fa-solid fa-paper-plane" class="i" />
    </header>
    <form class="body" @submit.prevent="submitForm">
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        v-model="newMessage"
      ></textarea>
      <button @click="addNewMessage">
        <font-awesome-icon icon="fa-solid fa-paper-plane" />
      </button>
    </form>
    <footer>
      <button
        class="toggle-messages"
        @click="toggleMessages"
        v-if="!showMessages"
      >
        <span>Nachrichten anzeigen</span>
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </button>
      <button
        class="toggle-messages"
        @click="toggleMessages"
        v-if="showMessages"
      >
        <span>Nachrichten anzeigen</span>
        <font-awesome-icon icon="fa-solid fa-chevron-up" />
      </button>
      <div v-if="showMessages" class="alte-nachrichten-container">
        <div
          v-for="(message, index) in messagesData"
          :key="index"
          class="alte-nachtichten"
        >
          <p>
            {{ message }}
          </p>
          <button @click="deleteOldMessage(index)">
            <font-awesome-icon icon="fa-solid fa-delete-left" />
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: { messagesData: Array },
  data() {
    return {
      newMessage: "",
      showMessages: true,
    };
  },
  methods: {
    toggleMessages() {
      this.showMessages = !this.showMessages;
    },
    addNewMessage() {
      this.messagesData.push(this.newMessage);
    },
    deleteOldMessage(index) {
      this.messagesData.splice(index, 1);
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
.message-container {
  position: relative;
  @include center();
  flex-direction: column;
  padding: 1rem 1rem;
  width: 100%;
  background: #757575;
  border-radius: 24px;

  header {
    position: relative;
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

  .body {
    @include center();
    padding: 0rem 0.5rem;
    margin-top: 1rem;
    gap: 0.5rem;
    height: 7rem;
    width: 90%;
    background: #568259;
    border-radius: 24px;

    textarea {
      text-align: center;
      height: 80%;
      width: 100%;
      background: #cccccc;
      border-radius: 20px;
      resize: none;
    }

    button {
      height: 80%;
      width: 10%;
      background: #00688b;
      border: none;
      border-radius: 20px;
      color: #0095c5;
      font-size: 1.5em;
      cursor: pointer;
      &:hover {
        background: #0095c5;
        color: #00688b;
      }
    }
  }

  footer {
    @include center();
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;

    .toggle-messages {
      @include center();
      justify-content: space-between;
      width: 50%;
      background: #00688b;
      border: none;
      border-radius: 24px;
      color: white;
      font-size: 1em;
      cursor: pointer;

      span {
        width: 100%;
      }
    }

    .alte-nachrichten-container {
      @include center();
      flex-direction: column;
      margin-top: 1rem;
      margin-bottom: 1rem;
      height: 10rem;
      width: 100%;
      overflow: auto;

      .alte-nachtichten {
        @include center();
        flex-direction: row;
        padding: 0 1rem;
        margin-top: 1rem;
        height: 4rem;
        width: 95%;
        background: #568259;
        border-radius: 20px;

        button {
          background: #568259;
          border: none;
          color: #a10d0d;
          font-size: 1.2em;
          cursor: pointer;
        }

        p {
          text-align: center;
          width: 100%;
          background: #cccccc;
          border-radius: 20px;
          color: black;
        }
      }
    }
  }
}
</style>
