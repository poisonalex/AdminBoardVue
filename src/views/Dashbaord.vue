<template>
  <Header :headerName="headline" />
  <div class="update-container"><span>Updates:</span> 0</div>
  <div class="dashboard">
    <div
      class="customer-container"
      v-for="(customer, index) in customers"
      :key="customer.id"
    >
      <span class="customer name">
        <p>{{ customer.name }}</p>
      </span>
      <span class="customer">
        <button>
          <router-link :to="{ name: 'customer', params: { id: customer.id } }">
            Zum Kunden
          </router-link>
        </button>
      </span>
      <span class="customer options">
        <div class="options-container" v-if="showOptions[index]">
          <button name="loeschen" @click="deleteCustomer(index)">
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
          <button name="bearbeiten">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
          <button class="options" @click="toggleOptions(index)">
            <font-awesome-icon icon="fa-solid fa-circle-xmark" />
          </button>
        </div>
        <button class="options" @click="toggleOptions(index)" v-else>
          Optionen <font-awesome-icon icon="fa-solid fa-caret-down" />
        </button>
      </span>
    </div>
    <div class="createcustomer-container">
      <router-link to="/createcustomer">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </router-link>
    </div>
  </div>
  <Alert
    :alertName="headlineAlert"
    @closeAlert="alertClose"
    @confirmeTask="taskConfirme(index)"
    v-if="alert"
  />
  <SuccessAlert v-if="showSuccess" />
</template>

<script>
import Header from "@/components/Header.vue";
import Alert from "@/components/Alert.vue";
import SuccessAlert from "@/components/SuccessAlert.vue";

export default {
  name: "dashboard",
  components: { Header, Alert, SuccessAlert },
  data() {
    return {
      headline: "Dashboard",
      headlineAlert: "Bist du dir sicher",
      showOptions: Array(this.customers).fill(false),
      alert: false,
      timer: null,
      showSuccess: false,

      customers: [],
    };
  },
  methods: {
    toggleOptions(index) {
      this.showOptions[index] = !this.showOptions[index];
      console.log(index);
    },
    deleteCustomer() {
      this.alert = !this.alert;
    },
    //Alert Struckutr
    alertClose() {
      this.alert = !this.alert;
    },
    taskConfirme(index) {
      this.customers.splice(index, 1);
      this.alert = !this.alert;
      this.showSuccess = true;

      this.timer = setTimeout(() => {
        this.showSuccess = false;
      }, 3000); // 3 seconds in milliseconds
    },
  },
  mounted() {
    // get data out of .json (fetch function)
    fetch("http://localhost:3000/customers")
      .then((res) => res.json())
      .then((data) => (this.customers = data))
      .catch((err) => console.log(err.message));
  },
  beforeDestroy() {
    // Clear the timer when the component is destroyed
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.update-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0 0 0rem;
  gap: 1rem;
  background: #757575;
  border-radius: 24px;
  color: white;
}
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
  width: 90%;
  border-top: #00688b solid;
  border-bottom: #00688b solid;
  color: white;

  .customer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;
    margin: 0.5rem 0;
    width: 90%;

    .customer {
      height: 100%;
      width: 100%;
      background: #757575;
      border: solid #4d4d4d;
      cursor: pointer;

      button {
        padding: 1rem 1rem;
        height: 100%;
        width: 100%;
        background: #757575;
        border: none;
        font-size: 1em;
        color: white;
        cursor: pointer;
        &:hover {
          background: #cccccc;
        }

        a {
          text-decoration: none;
          color: white;
        }
      }
    }

    .options {
      width: 50%;
    }

    .options-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  .createcustomer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 1rem;
    height: 1.5em;
    width: 1.5em;
    background: #00688b;
    border-radius: 50%;
    font-size: 2em;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      background: #00688b;
      border: none;
      border-radius: 50%;
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
