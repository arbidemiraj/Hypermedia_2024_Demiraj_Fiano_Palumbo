<template>
    <div class="card">
      <img :src="`https://rvghxglrqukcznmytpnn.supabase.co/storage/v1/object/public/images/projects/project${image_id}.png`" alt="Project image" class="card-image">
      <h3 class="card-title">{{ title }}</h3>
      <button class="card-button">See more ></button>
    </div>
  </template>

<script>
  export default {
    props: {
      image_id: Number,
      title: String,
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
  }
  .card-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .card-title {
    font-size: 18px;
    margin: 12px 0;
  }
  .card-description {
    font-size: 14px;
    color: #555;
  }
  .card-button {
    margin-top: 12px;
    padding: 8px 16px;
    border: none;
    background-color: #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  