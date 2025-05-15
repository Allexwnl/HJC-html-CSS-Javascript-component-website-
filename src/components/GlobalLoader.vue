<template>
  <transition name="fade">
    <div v-if="show" class="loader-overlay">
      <div class="loader">Loading...</div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(true)

const showLoader = () => (show.value = true)
const hideLoader = () => (show.value = false)

onMounted(() => {
  window.addEventListener('show-loader', showLoader)
  window.addEventListener('hide-loader', hideLoader)

  setTimeout(hideLoader, 500) // Initial 0.5s load
})

onUnmounted(() => {
  window.removeEventListener('show-loader', showLoader)
  window.removeEventListener('hide-loader', hideLoader)
})
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  inset: 0;
  background: rgb(0, 0, 0, 0.9);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.9;
}
</style>
