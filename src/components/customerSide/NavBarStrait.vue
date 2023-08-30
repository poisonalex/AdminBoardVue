<template>
  <nav ref="nav">
    <div class="slider" ref="slider"></div>
    <ul>
      <li
        v-for="(item, index) in navigationItems"
        :key="index"
        @click="setActive(index)"
        :class="{ active: activeIndex === index }"
      >
        <a @mouseenter="handleMouseEnter(index)">
          <font-awesome-icon :icon="item.icon" class="fa-solid" />
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCalendarWeek,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      navigationItems: [
        { label: "Trainingswoche", icon: faCalendarWeek },
        { label: "Nachrichten", icon: faPaperPlane },
        // weitere Navigationselemente hinzufügen
      ],
      hoveredIndex: -1,
      activeIndex: 0,
    };
  },
  methods: {
    handleMouseEnter(index) {
      this.hoveredIndex = index;
    },
    setActive(index) {
      this.activeIndex = index;
      this.$emit("toggleContainer");
    },
  },
  watch: {
    hoveredIndex(newIndex) {
      const navigationElements = this.$refs.nav.querySelectorAll("li");
      const element = navigationElements[newIndex];
      const slider = this.$refs.slider;

      if (element) {
        const { x: elmX } = element.getBoundingClientRect();
        const { x: navX } = this.$refs.nav.getBoundingClientRect();
        slider.style.translate = `${elmX - navX}px 0`;
      }
    },
  },
  mounted() {
    const nav = this.$refs.nav;

    nav.addEventListener("mouseleave", () => {
      nav.classList.remove("animate");
    });

    nav.addEventListener("mouseenter", () => {
      setTimeout(() => {
        nav.classList.add("animate");
      }, 50);
    });
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  height: 40%;
  width: 100%;

  &:hover {
    a.router-link-exact-active {
      background: none;
      transition: all 350ms ease-in-out;
    }
    .slider {
      opacity: 1;
    }
  }
  &.animate {
    .slider {
      transition-delay: 400ms;
      transition: all 350ms ease-in-out;
    }
  }

  .slider {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    padding: 0rem 2rem;
    width: 7rem;
    height: 100%;
    background: #58a4b0;
    border-radius: 3rem;
    opacity: 0;
    transition: opacity 250ms ease;
  }

  ul {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0;
    margin: 0;

    .active {
      background: #58a4b0;
      border-radius: 3rem;
    }

    li {
      list-style: none;
      &:hover {
        a {
          .fa-solid {
            scale: 1;
            margin: 0 0.5rem 0 0;
          }
        }
      }

      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 2.1rem;
        width: 7rem;
        border-radius: 3rem;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        color: white;
        cursor: pointer;

        .fa-solid {
          height: 1.1rem;
          width: 1.1rem;
          scale: 0;
          margin: 0 -1rem 0 0;
          transform-origin: -0.4rem 50%;
          transition: all 350ms ease-in-out;
        }
      }
    }
  }
}
</style>
