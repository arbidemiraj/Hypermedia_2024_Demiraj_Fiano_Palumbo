<template>
    <div>
        <div class="question-container">
            <h3 @click="toggleAnswer">{{ question }}</h3> <Icon name="eva:arrow-ios-downward-outline" color="#007BFF" size="30px" @click="toggleAnswer"/>
        </div>
      <p v-if="isVisible">{{ answer }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: {
        type: String,
        required: true
      },
      answer: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isVisible: false
      };
    },
    methods: {
      toggleAnswer() {
        this.isVisible = !this.isVisible;
      }
    }
  };
  </script>
  
  <style scoped>
  h3 {
    cursor: pointer;
    color: #007BFF;
  }
  p {
    margin: 0;
  }
  .question-container {
    display: flex;
    cursor: pointer;
    gap: 10px;
    align-items: center;
  }
  </style>
  