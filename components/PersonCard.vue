<template>
    <div class="person">
      <div class="header">
        <img :src="photo" :alt="`Profile picture of ${name} ${surname}`" class="profile-picture" />
        <div class="info">
          <h1>{{ name }}</h1>
          <p><strong>Email:</strong> {{ email }}</p>
          <p><strong>Birthdate:</strong> {{ birthdate }}</p>
        </div>
      </div>
      <div class="cv">
        <h2>CV:</h2>
        <div class="cv-text">
          <p>{{ cv }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Person',
    props: {
      name: {
        type: String,
        required: true
      },
      surname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      birthdate: {
        type: String,
        required: true
      },
      photo: {
        type: String,
        required: true
      },
      cv: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .person {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }
  
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 1rem;
  }
  
  .info h1 {
    margin: 0;
    font-size: 2rem;
  }
  
  .info p {
    margin: 0.5rem 0;
  }
  
  .cv {
    margin-bottom: 1rem;
  }
  
  .cv h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .cv-text {
    font-size: 1rem;
    line-height: 1.5;
  }
  </style>
  