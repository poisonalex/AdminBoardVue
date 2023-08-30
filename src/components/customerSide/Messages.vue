<template>
  <div class="container">
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
        v-model="messages"
      ></textarea>
      <button @click="sendMessage">
        <font-awesome-icon icon="fa-solid fa-paper-plane" />
      </button>
    </form>
    <!--Next steps-->
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
      <div
        class="alte-nachtichten"
        v-for="(message, index) in oldMessage"
        :key="message.text"
        v-if="showMessages"
      >
        <span>
          <h4>
            Datum: --.--.--
            <button @click="deleteOlsMessage(index)">
              <font-awesome-icon icon="fa-solid fa-delete-left" />
            </button>
          </h4>
          <p>{{ message.text }}</p>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["messages", "oldMessagesContainer"],
  data() {
    return {
      messages: "",
      oldMessage: [{ text: "Hallo" }],
      oldMessagesContainer: this.oldMessage,
      showMessages: false,
    };
  },
  methods: {
    toggleMessages() {
      this.showMessages = !this.showMessages;
    },
    //--Next Steps--
    sendMessage() {
      this.$emit("sendMessage", this.messages);
      if (this.messages !== "") {
        this.oldMessage.push({ text: this.messages });
        this.messages = "";
      }
    },
    deleteOlsMessage(index) {
      this.oldMessage.splice(index, 1);
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
.container {
  @include center();
  width: 100%;
  border: none;

  header {
    @include center();
    justify-content: space-between;
    padding: 0 1rem;
    width: 100%;
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
    margin-top: 0.5rem;
    gap: 0.5rem;
    height: 7rem;
    width: 100%;
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

    .alte-nachtichten {
      @include center();
      flex-direction: column;
      margin: 1rem;
      height: 7rem;
      width: 100%;

      span {
        @include center();
        flex-direction: column;
        align-items: start;
        padding: 1rem 1rem;
        margin-top: 0.5rem;
        height: 100%;
        width: 90%;
        background: #568259;
        border-radius: 24px;

        h4 {
          @include center();
          justify-content: space-between;
          padding: 0;
          margin: 0;
          width: 100%;

          button {
            background: #568259;
            border: none;
            color: #a10d0d;
            font-size: 1.2em;
            cursor: pointer;
          }
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
