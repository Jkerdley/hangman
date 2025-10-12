<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import GameFigure from './components/GameFigure.vue'
import GameHeader from './components/GameHeader.vue'
import GameNotification from './components/GameNotification.vue'
import GamePopup from './components/GamePopup.vue'
import GameWord from './components/GameWord.vue'
import GameWrongLetters from './components/GameWrongLetters.vue'

const word = ref('василий')
const letters = ref([])
const correctLetters = computed(() => letters.value.filter((letter) => word.value.includes(letter)))
const wrongLetters = computed(() => letters.value.filter((letter) => !word.value.includes(letter)))
const isStatusLoose = computed(() => wrongLetters.value.length === 6)
const isStatusWin = computed(() =>
  [...word.value].every((letter) => correctLetters.value.includes(letter)),
)

const notification = ref(null)
const popup = ref(null)

const handleKeydown = ({ key }) => {
  if (isStatusLoose.value || isStatusWin.value) {
    return
  }
  if (letters.value.includes(key)) {
    notification.value?.openPopup()
    return
  }

  if (/[а-яА-ЯёЁ]/.test(key)) {
    letters.value.push(key.toLowerCase())
  }
}

const handleRestart = () => {
  letters.value = []
  popup.value?.close()
  if (isStatusLoose.value || isStatusWin.value) {
    return
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

watch(wrongLetters, () => {
  if (isStatusLoose.value) {
    popup.value?.open('loose')
  }
})
watch(correctLetters, () => {
  if (isStatusWin.value) {
    popup.value?.open('win')
  }
})
</script>

<template>
  <div id="app">
    {{ wrongLetters }}
    <GameHeader />
    <div class="game-container">
      <GameFigure :wrongLettersCount="wrongLetters.length" />

      <GameWrongLetters :wrong-letters="wrongLetters" />

      <GameWord :word="word" :correct-letters="correctLetters" />
    </div>

    <GamePopup ref="popup" @restart="handleRestart" :wordString="word" />

    <GameNotification ref="notification" />
  </div>
</template>

<style scoped></style>
