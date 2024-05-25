<template>
  <div>
    <div class="person">
      <div class="header">
        <router-link to="/team" class="back-link">← Back to our team </router-link>
        <img :src="person.imageUrl" alt="Profile Picture" class="profile-picture" />
        <div class="info">
          <h1>{{ person.name }}</h1>
          <p><strong>Email:</strong> {{ person.email }}</p>
          <p><strong>Birthdate:</strong> {{ person.birthdate }}</p>
        </div>
      </div>
      <div class="cv">
        <p>{{ person.cv }}</p>
      </div>
    </div>

    <div class="navigation">
      <router-link :to="previousLink">← PREVIOUS</router-link>
      <router-link :to="nextLink">NEXT →</router-link>
    </div>
  </div>
</template>

        
<script>
  const { id } = useRoute().params;
  const { data: Person, pending, error } = await useFetch(`/api/team/${id}`);

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
  

