<template>
    <div class="button-container">
      <button class="btn-primary" @click="handleClick">Get Help</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyButtonComponent',
    methods: {
    handleClick() {
        this.$router.push('/contact');
    }
    }
  }
  </script>
  
  <style scoped> 
  .btn-primary {
    background-color: #DDB98E;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-primary:hover {
    opacity: 0.6;
  }
  </style>
  