import { computed, ref } from 'vue'

export const useLetters = (word) => {
  const letters = ref([])
  const correctLetters = computed(() =>
    letters.value.filter((letter) => word.value.includes(letter)),
  )
  const wrongLetters = computed(() =>
    letters.value.filter((letter) => !word.value.includes(letter)),
  )
  const isStatusLoose = computed(() => wrongLetters.value.length === 6)
  const isStatusWin = computed(() =>
    [...word.value].every((letter) => correctLetters.value.includes(letter)),
  )
  return { letters, correctLetters, wrongLetters, isStatusLoose, isStatusWin }
}
