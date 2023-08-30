<template>
  <NavBarSide />
  <router-view />
</template>

<script>
import NavBarSide from "./components/NavSideBar/NavBarSide.vue";
import { sidebarWidth } from "./components/NavSideBar/state";

export default {
  name: "dashboard",
  components: { NavBarSide },
  props: {},
  setup() {
    return {
      sidebarWidth,
    };
  },
};
</script>

<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
  background: #4d4d4d;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
