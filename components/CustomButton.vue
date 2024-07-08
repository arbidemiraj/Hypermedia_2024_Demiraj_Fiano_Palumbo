<template>
    <div class="button-container">
      <button class="btn-primary" @click="handleClick"><b>{{text}}</b></button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped> 
  .btn-primary {
    background: linear-gradient(90deg, #DDB98E, #d2b392);
    color: white;
    border: none;
    padding: 12px 22px;
    font-size: 18px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .btn-primary:hover {
    opacity: 0.8;
  }
  </style>
  