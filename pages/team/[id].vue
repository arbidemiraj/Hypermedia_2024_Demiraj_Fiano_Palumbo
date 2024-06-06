<template>
  <div class="container">
    <div class="person">
      <div class="header">
        <NuxtLink to="/team" class="back-link"><Icon name="eva:arrow-back-outline"/> Back to our team </NuxtLink>
        <div class="info">
          <img :src="person.photo" alt="Profile Picture" class="profile-picture" />
          <p class="person-name"><strong>{{ person.name }} {{ person.surname }}</strong></p>
          <p><strong>Email:</strong> {{ person.mail }}</p>
          <p><strong>Birthdate:</strong> {{ person.birthdate }}</p>
        </div>
      </div>
      <div class="cv">
        <p>{{ person.cv }}</p>
      </div>
      <div class="navigation">
        <NuxtLink :to="previousLink"><strong>← PREVIOUS</strong></NuxtLink>
        <NuxtLink :to="nextLink"><strong>NEXT →</strong></NuxtLink>
      </div>
    </div>

    <div class="side-content">
      <div class="managed-projects">
        <h2>MANAGED PROJECTS</h2>
        <div v-if=hasProjects class="projects">
          <div v-for="(project, index) in managedProjects" :key="index" class="project">
            <NuxtLink :to="'/projects/' + project.id">
            <img :src="project.image" alt="Project Image" class="project-image" />
            <p>{{ project.name }}</p>
          </NuxtLink>
          </div>
        </div>
        <div v-else>
          <p>Not responsible for any projects yet!</p>
        </div>
      </div>

      <div class="managed-services">
        <h2>MANAGED SERVICES</h2>
        <div v-if=hasServices class="services">
          <div v-for="(service, index) in managedServices" :key="index" class="service">
            <NuxtLink :to="'/services/' + service.id">
            <Icon :name="service.image" class="service-image" color="#bb5f75"/>
            <p>{{ service.name }}</p>
          </NuxtLink>
          </div>
        </div>
        <div v-else>
            <p>Not responsible for any service yet!</p>
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

  const hasProjects = managedProjects != null ? true : false;
  const hasServices = managedServices === null ? false : true;

</script>
  
<style scoped>

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
}

.person {
  flex: 1.0;
  margin-left: 40px;
}

.person-name {
  font-size: 2rem;
}

.profile-picture {
  align-self: center;
}

.cv {
  margin-top: 30px;
  margin-left: 60px;
}

.side-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin-top: 50px;
}

.managed-projects, .managed-services {
  margin-top: 20px;
}

.managed-projects h2, .managed-services h2 {
  text-align: center;
  margin-bottom: 10px;
}

.projects, .services {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project, .service {
  margin-bottom: 10px;
  text-align: center;
}

.project-image, .service-image {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}

.navigation {
  width: 40%;
  display: flex;
  flex: 1;
  margin-left: 200px;
  justify-content: space-between;
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


.info {
  font-size: 1rem;
  text-align: center;
}

.navigation a {
  text-decoration: none;
  color: #333;
}

</style>
  

