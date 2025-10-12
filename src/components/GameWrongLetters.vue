<script setup>
defineProps({
  wrongLetters: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <div v-if="wrongLetters.length" class="wrong-letters-container">
    <div class="wrong-letters">
      <p>Ошибки</p>
      <span v-for="(letter, index) in wrongLetters" :key="index"
        >{{ index === wrongLetters.length - 1 ? letter : `${letter}, ` }}
      </span>
    </div>
  </div>
</template>
