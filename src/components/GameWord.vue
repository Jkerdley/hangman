<script setup>
defineProps({
  word: {
    type: String,
    required: true,
  },
  correctLetters: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <div class="word">
    <span v-for="(letter, index) in word" :key="index" class="letter">
      {{ correctLetters.includes(letter) ? letter : '' }}
    </span>
  </div>
</template>
