<template>
  <Header :headerName="headline" />
  <div class="container">
    <header>
      <h2>{{ customers.name }}</h2>
      <NavBarStraitVue @toggleContainer="showContainer" />
    </header>
    <div class="box">
      <div class="section" v-if="!containerShowen">
        <h2>Trainingswoche</h2>
        <p>{{ customers.trainingsweek }}</p>
      </div>
      <div class="section" v-if="containerShowen">
        <MessagesVue />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NavBarStraitVue from "@/components/customerSide/NavBarStrait.vue";
import MessagesVue from "@/components/customerSide/Messages.vue";

export default {
  props: ["id"],
  components: { Header, NavBarStraitVue, MessagesVue },
  data() {
    return {
      customerId: this.$route.params.id,
      customers: [],
      headline: "Training zum Bearbeiten",
      containerShowen: false,
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
    showContainer() {
      this.containerShowen = !this.containerShowen;
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
    height: 8rem;
    width: 100%;
    background: #646464;

    h2 {
      border-bottom: #757575 solid;
    }
  }

  .box {
    margin-top: 1rem;
    padding: 1rem 0;
    width: 100%;
    background: #757575;
    border-radius: 24px;

    .section {
      @include center();
      width: 100%;
    }
  }
}
</style>
