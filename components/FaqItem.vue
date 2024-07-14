<template>
  <div class="faq-container">
    <div class="question-container" @click="toggleAnswer">
      <h3>{{ question }}</h3>
      <Icon v-if="!isVisible" class="show-icon" name="eva:arrow-ios-downward-outline" color="#bb5f75" size="30px"
        @click="toggleAnswer" />
      <Icon v-if="isVisible" class="hide-icon" name="ep:arrow-up-bold" color="#bb5f75" size="20px"
        @click="toggleAnswer" />
    </div>
    <p class="answer" v-if="isVisible">{{ answer }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

const isVisible = ref(false);

const toggleAnswer = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style scoped>
h3 {
  cursor: pointer;
  color: #bb5f75;
}

.faq-container {
  display: flex;
  max-width: calc(50% - 10px);
  /* Ensures two cards per row with a gap */
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #bb5f741f;
}

.question-container {
  display: flex;
  cursor: pointer;
  gap: 10px;
  align-items: center;
  text-align: left;
}

@media (max-width: 768px) {
  .faq-container {
    font-size: 14px;
    max-width: calc(100% - 10px);
  }

  .question-container {
    font-size: 14px;
  }

  .show-icon {
    height: 20px;
    width: 20px;
  }

  .hide-icon {
    height: 12px;
    width: 12px;
  }
}
</style>