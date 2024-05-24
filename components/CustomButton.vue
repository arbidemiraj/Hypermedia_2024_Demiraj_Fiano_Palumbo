<template>
    <div class="button-container">
      <button class="btn-primary" @click="handleClick"><b>Get Help</b></button>
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
    padding: 12px 22px;
    font-size: 18px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-primary:hover {
    opacity: 0.6;
  }
  </style>
  