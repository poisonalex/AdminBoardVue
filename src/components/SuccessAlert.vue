<template>
  <div class="success">
    <div class="notification-body">
      <i class="fa-solid fa-circle-check"></i> Fertig
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
  width: 35%;
  border-radius: 1em;
  background-image: linear-gradient(to right, #00688b 30%, #035671 70%);
  color: white;
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
  gap: 0.5em;
  padding: 1em;
}

.notification-body i {
  color: #05d62b;
}

.notification-progress {
  position: absolute;
  bottom: 4px;
  left: 8px;
  height: 3px;
  width: calc(100% - 16px);
  background: linear-gradient(to right, #757575, #05d62b);
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
