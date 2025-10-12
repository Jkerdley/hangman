<script setup>
import { ref } from 'vue'

defineProps({
  wordString: {
    type: String,
  },
})

const gameStatus = ref(null)
const isVisible = ref(false)

const close = () => {
  isVisible.value = false
}

const open = (status) => {
  isVisible.value = true
  gameStatus.value = status
}

defineExpose({
  open,
  close,
})

const emit = defineEmits(['restart'])
</script>

<template>
  <div v-show="isVisible" class="popup-container">
    <div class="popup">
      <h2 v-if="gameStatus === 'win'">Поздравляю, вы победили! 😃</h2>
      <template v-else>
        <h2>Вы проиграли 😃</h2>
        <h3>Имя: {{ wordString }}</h3>
      </template>
      <button @click="emit('restart')">Сыграть еще раз</button>
    </div>
  </div>
</template>
