<template>
  <Header :headerName="headline" />
  <div class="container">
    <header>
      <h2>{{ customers.name }}</h2>
      <Navbar
        @showTrainingsweek="toggleTrainingsweek"
        @showMessages="toggleMessages"
        @showEdit="toggleEdit"
        @showNutrition="toggleNutrition"
      />
    </header>
    <div class="box">
      <div class="section" v-if="containerTrainingsweek">
        <TrainingsWeek :trainingsWeekData="customers" />
      </div>
      <div class="section" v-if="containerMessages">
        <Messages :messagesData="customers" />
      </div>
      <div class="section" v-if="containerEdit">
        <Bearbeiten />
      </div>
      <div class="nutririon" v-if="containerNutrition">
        <h1>Ernährung</h1>
        <p>comming soon!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/customerSide/Navbar.vue";
import Messages from "@/components/customerSide/Messages.vue";
import TrainingsWeek from "@/components/customerSide/TrainingsWeek.vue";
import Bearbeiten from "@/components/customerSide/Bearbeiten.vue";

export default {
  components: {
    Header,
    Navbar,
    Messages,
    TrainingsWeek,
    Bearbeiten,
  },
  data() {
    return {
      customerId: this.$route.params.id,
      customers: [],
      headline: "Training zum Bearbeiten",
      containerTrainingsweek: true,
      containerMessages: false,
      containerEdit: false,
      containerNutrition: false,
    };
  },
  created() {
    this.getCustomerData();
  },
  methods: {
    async getCustomerData() {
      try {
        const response = await fetch("http://localhost:3000/customers"); // Pfade können projektabhängig sein
        const data = await response.json();
        this.customers = data.find(
          (item) => item.id === parseInt(this.customerId),
        );
      } catch (error) {
        console.error("Fehler beim Abrufen der Kundendaten:", error);
      }
    },
    toggleTrainingsweek() {
      this.containerTrainingsweek = true;
      this.containerMessages = false;
      this.containerEdit = false;
      this.containerNutrition = false;
    },
    toggleMessages() {
      this.containerTrainingsweek = false;
      this.containerMessages = true;
      this.containerEdit = false;
      this.containerNutrition = false;
    },
    toggleEdit() {
      this.containerTrainingsweek = false;
      this.containerMessages = false;
      this.containerEdit = true;
      this.containerNutrition = false;
    },
    toggleNutrition() {
      this.containerTrainingsweek = false;
      this.containerMessages = false;
      this.containerEdit = false;
      this.containerNutrition = true;
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
  flex-direction: column;
  margin-top: 1rem;
  width: 90%;
  color: white;

  header {
    position: relative;
    @include center();
    flex-direction: column;
    height: 9rem;
    width: 100%;
    background: #646464;

    h2 {
      width: 100%;
      border-bottom: #757575 solid;
    }
  }

  .box {
    margin-top: 1rem;
    padding: 1rem 0;
    height: 20rem;
    width: 100%;
    border: none;
    border-radius: 24px;

    .section {
      @include center();
      width: 100%;
    }
  }
}
</style>
