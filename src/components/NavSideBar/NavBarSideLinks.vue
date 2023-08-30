<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <transition name="fade">
      <span v-if="!collapsed"> <slot /> </span>
    </transition>
  </router-link>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./state";

export default {
  props: {
    to: { type: String, required: true },
  },

  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);

    return {
      isActive,
      collapsed,
    };
  },
};
</script>

<style lang="scss" scoped>
$bg-color: #00688b;
$hover-color: #0095c5;
$active-color: #035671;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.4em;
  margin: 0.1em 0;
  height: 1.5em;
  color: white;
  text-decoration: none;
  font-weight: 400;
  user-select: none;
  cursor: pointer;
  &:hover {
    background: $hover-color;
  }
}
</style>
