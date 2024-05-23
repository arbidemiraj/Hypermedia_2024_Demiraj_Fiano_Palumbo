<template>
    <section>
      <div class="container">
        <h2>Our philosophy</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae elit dapibus, tincidunt lectus a, varius arcu. Nunc non mollis tellus. Sed arcu leo, faucibus vitae hendrerit at, eleifend et leo. Morbi facilisis rutrum imperdiet. Proin pharetra tincidunt neque eu imperdiet. Interdum et malesuada fames ac ante ipsum primis in.</p>
        <div class="projects">
          <div v-for="project in projects" :key="project.id" class="project-card">
            <img :src="project.image_url" alt="Project Image" />
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  useLazyFetch('/api/activities/allProjects.get')
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    padding: 2rem;
  }
  
  .projects {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .project-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
    width: 300px;
  }
  
  .project-card img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    object-fit: cover;
  }
  
  .project-card h3 {
    font-size: 1.25rem;
    margin: 1rem 0 0.5rem;
  }
  
  .project-card p {
    font-size: 1rem;
    color: #666;
  }
  
  .project-card button {
    background-color: #ff4081;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
  }
  
  .project-card button:hover {
    background-color: #e03570;
  }
  </style>
  