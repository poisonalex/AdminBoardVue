<template>
  <div class="navbarside" :style="{ width: sidebarWidth }">
    <h1 @click="toggleSidebar">
      <span v-if="collapsed">
        <div><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></div>
      </span>
      <span v-else><font-awesome-icon icon="fa-solid fa-bars" /> Menü</span>
      <hr />
    </h1>

    <span class="links">
      <router-link to="/" class="icon">
        <font-awesome-icon icon="fa-solid fa-house" class="icon" />
      </router-link>
      <NavBarSideLinks to="/"> Dashboard </NavBarSideLinks>
    </span>
    <span class="links">
      <router-link to="/createcustomer" class="icon">
        <font-awesome-icon icon="fa-solid fa-plus" class="icon" />
      </router-link>
      <NavBarSideLinks to="/createcustomer"> Create Kunde </NavBarSideLinks>
    </span>
    <span class="links">
      <router-link to="/" class="icon">
        <font-awesome-icon icon="fa-solid fa-apple-whole" class="icon" />
      </router-link>
      <NavBarSideLinks to=""> Ernährung </NavBarSideLinks>
    </span>
    <span class="links">
      <router-link to="/" class="icon">
        <font-awesome-icon icon="fa-solid fa-book" class="icon" />
      </router-link>
      <NavBarSideLinks to=""> Übungslexicon </NavBarSideLinks>
    </span>
    <span class="links">
      <router-link to="/" class="icon">
        <font-awesome-icon icon="fa-solid fa-gear" class="icon" />
      </router-link>
      <NavBarSideLinks to=""> Einstellungen </NavBarSideLinks>
    </span>
    <span class="links">
      <router-link to="/" class="icon">
        <font-awesome-icon
          icon="fa-solid fa-arrow-right-from-bracket"
          class="icon"
        />
      </router-link>
      <NavBarSideLinks to=""> Abmelden </NavBarSideLinks>
    </span>

    <span
      class="collapse-icon"
      :class="{ 'rotation-180': collapsed }"
      @click="toggleSidebar"
    >
      <font-awesome-icon icon="fa-solid fa-angles-left" />
    </span>
  </div>
</template>

<script>
import NavBarSideLinks from "./NavBarSideLinks.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
export default {
  components: { NavBarSideLinks },
  props: {},
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
    };
  },
};
</script>

<style lang="scss" scoped>
$bg-color: #00688b;
$hover-color: #0095c5;
$active-color: #035671;

.navbarside {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  float: left;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 1rem;
  background: $bg-color;
  border-right: $hover-color solid;
  color: white;
  transition: 0.3s ease;

  h1 {
    cursor: pointer;

    hr {
      border: white solid 1px;
    }
  }

  .collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    color: rgb(255, 255, 255, 0.7);
    transition: 0.2s linear;
    cursor: pointer;
  }
  .rotation-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0;
    width: 100%;
    &:hover {
      background: $hover-color;
    }
  }
  .icon {
    flex-shrink: 0;
    margin-right: 10px;
    margin-left: 5px;
    width: 25px;
    color: white;
    text-decoration: none;
  }
}
</style>
