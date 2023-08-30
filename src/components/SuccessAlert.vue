<template>
  <div class="success">
    <div class="notification-body">
      <font-awesome-icon icon="fa-solid fa-circle-check" class="i" /> Fertig
    </div>
    <div class="notification-progress"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.success {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: max-content;
  border-radius: 6px;
  background: #313e2c;
  color: #aaec8a;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;
  animation: fade-in 2s linear;
}

.notification-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  gap: 0.5rem;
}

.i {
  color: #05d62b;
}

.notification-progress {
  position: absolute;
  bottom: 4px;
  left: 8px;
  height: 3px;
  width: calc(100% - 16px);
  background: linear-gradient(to right, #313e2c, #aaec8a);
  border-radius: inherit;
  transform: scaleX(0);
  transform-origin: left;
  animation: progress 1.5s 0.3s linear;
}

@keyframes fade-in {
  5% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  95% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes progress {
  to {
    transform: scaleX(1);
  }
}
</style>
