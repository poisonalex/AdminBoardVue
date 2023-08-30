<template>
  <header>
    <h1>{{ name }}</h1>
  </header>
</template>

<script>
export default {
  props: ["headerName"],
  data() {
    return {
      name: this.headerName,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 100%;
  background: #00688b;
  border-bottom: #0095c5 solid;
  color: white;
}
</style>
