<template>
  <div class="container">
    <div class="person">
      <div class="header">
        <NuxtLink to="/team" class="back-link"><Icon name="eva:arrow-back-outline"/> Back to our team </NuxtLink>
        <img :src="person.photo" alt="Profile Picture" class="profile-picture" />
        <div class="info">
          <h1>{{ person.name }}</h1>
          <p><strong>Email:</strong> {{ person.mail }}</p>
          <p><strong>Birthdate:</strong> {{ person.birthdate }}</p>
        </div>
      </div>
      <div class="cv">
        <p>{{ person.cv }}</p>
      </div>
    </div>

    <div class="navigation">
      <NuxtLink :to="previousLink">← PREVIOUS</NuxtLink>
      <NuxtLink :to="nextLink">NEXT →</NuxtLink>
    </div>

  <div class="managed-projects">
  <h2>MANAGED PROJECTS</h2>
  <div class="projects">
    <div v-for="(project, index) in managedProjects" :key="index" class="project">
      <img :src="project.image" alt="Project Image" class="project-image" />
      <p>{{ project.name }}</p>
    </div>
  </div>
</div>

<div class="managed-services">
  <h2>MANAGED SERVICES</h2>
  <div class="services">
    <div v-for= "(service, index) in managedServices" 
    :key="index" class="service">
      <Icon :name="service.image" class="service-image" color="#bb5f75"/>
      <p>{{ service.name }}</p>
    </div>
  </div>
</div>
</div>
</template>

        
<script setup>

  const { id } = useRoute().params; //person id
  const { data: person, pending, error } = await useFetch(`/api/team/${id}`);
  const { data: managedProjects } = await useFetch(`/api/activities/projects/projectsByPerson/${id}`);
  const { data: managedServices } = await useFetch(`/api/activities/services/servicesByPerson/${id}`);

  const firstId = 2;
  const lastId = 21;

  const previousLink = computed(() => {
    const currentId = parseInt(id);
    const prevId = currentId === firstId ? lastId : currentId - 1;
    return `/team/${prevId}`;
  });

  const nextLink = computed(() => {
    const currentId = parseInt(id);
    const nextId = currentId === lastId ? firstId : currentId + 1;
    return `/team/${nextId}`;
  });

</script>
  
<style scoped>
.container{
  padding: 20px;
}
.managed-projects, .managed-services {
  margin-top: 1rem;
  padding: 20px;
}

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
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.back-link {
  align-self: flex-start;
  text-decoration: none;
  color: #333;
  margin-bottom: 1rem;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.info h1 {
  font-size: 2rem;
  text-align: center;
}

.biography {
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1rem;
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
}

.navigation a {
  text-decoration: none;
  color: #333;
}

.managed-projects, .managed-services {
  margin-top: 2rem;
}

.projects, .services {
  display: flex;
  gap: 1rem;
}

.project, .service {
  text-align: center;
}

.project-image, .service-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
  

