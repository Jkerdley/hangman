<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

const closePopup = () => {
  isVisible.value = false
}

const openPopup = () => {
  isVisible.value = true

  setTimeout(() => {
    closePopup()
  }, 2000)
}

defineExpose({
  openPopup,
  closePopup,
})
</script>

<template>
  <div class="notification-container" :class="{ show: isVisible }">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>
