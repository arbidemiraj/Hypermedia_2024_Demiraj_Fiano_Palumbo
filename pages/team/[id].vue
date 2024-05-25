<template>
  <div>
    <div class="person">
      <div class="header">
        <NuxtLink to="/team" class="back-link">← Back to our team </NuxtLink>
        <img :src="Person.photo" alt="Profile Picture" class="profile-picture" />
        <div class="info">
          <h1>{{ Person.name }}</h1>
          <p><strong>Email:</strong> {{ Person.email }}</p>
          <p><strong>Birthdate:</strong> {{ Person.birthdate }}</p>
        </div>
      </div>
      <div class="cv">
        <p>{{ Person.cv }}</p>
      </div>
    </div>

    <div class="navigation">
      <NuxtLink :to="previousLink">← PREVIOUS</NuxtLink>
      <NuxtLink :to="nextLink">NEXT →</NuxtLink>
    </div>
  </div>
</template>

        
<script setup>

  const { id } = useRoute().params;
  const { data: Person, pending, error } = await useFetch(`/api/team/${id}`);
  //const { data: managedProjects } = await useFetch(`/api/activities/projects/projectByPerson/${id}`)
  //const { data: managedServices } = await useFetch(`/api/activities/services/serviceByPerson/${id}`)
 
  const previousLink = computed(() => `/team/${parseInt(id) - 1}`)
  const nextLink = computed(() => `/team/${parseInt(id) + 1}`)
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
  margin: 0;
  font-size: 2rem;
  text-align: center;
}

.info p {
  margin: 0.5rem 0;
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
  

