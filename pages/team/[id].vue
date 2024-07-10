<template>
  <div class="container">
    <div class="person" :class="{ 'centered': !hasActivities }">
      <div class="header">
        <NuxtLink to="/team" class="back-link"><Icon name="eva:arrow-back-outline"/> Back to our team </NuxtLink>
        <div class="navigation">
          <NuxtLink :to="previousLink" class="nav-button">
            <Icon name="eva:arrow-back-outline" /> <strong>PREVIOUS</strong>
          </NuxtLink>
          <NuxtLink :to="nextLink" class="nav-button">
            <strong>NEXT</strong> <Icon name="eva:arrow-forward-outline" />
          </NuxtLink>
        </div>
        <div class="info">
          <div v-if="personPending">
            <Loader />
          </div>
          <img :src="person.photo" alt="Profile Picture" class="profile-picture" />
          <div class="person-details">
            <p class="person-name"><strong>{{ person.name }} {{ person.surname }}</strong></p>
            <p><strong>Email:</strong> {{ person.mail }}</p>
            <p><strong>Birthdate:</strong> {{ person.birthdate }}</p>
          </div>
        </div>
        <div :class="{ 'cv': true, 'centered-cv': !hasActivities }">
          <p>{{ person.cv }}</p>
        </div>
      </div>
    </div>
    <div v-if="hasActivities" class="side-content">
      <div v-if="hasProjects" class="managed-projects">
        <h2>MANAGED PROJECTS</h2>
        <div v-if="projectsPending">
          <Loader />
        </div>
        <div class="projects">
          <div v-for="(project, index) in managedProjects" :key="index" class="project">
            <NuxtLink :to="'/projects/' + project.id">
              <img :src="project.image" alt="Project Image" class="project-image" />
              <p>{{ project.name }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div v-if="hasServices" class="managed-services">
        <h2>MANAGED SERVICES</h2>
        <div v-if="servicesPending">
          <Loader />
        </div>
        <div class="services">
          <div v-for="(service, index) in managedServices" :key="index" class="service">
            <NuxtLink :to="'/services/' + service.id">
              <Icon :name="service.image" class="service-image" color="#bb5f75"/>
              <p>{{ service.name }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import handleFetchError from '~/composables/errorHandler';

useSeoMeta({
    title: 'ByYourSide | Person',
    description: 'This is the single person page with all relevant information about a team member, including its curriculum vitae and the activities they are responsible for.',
});

  const { id } = useRoute().params; //person id

  const { data: person, pending: personPending, error: error1 } = await useFetch(`/api/team/${id}`);
  if (error1.value?.statusCode) handleFetchError(person, error1.statusCode);

  const { data: managedProjects, pending: projectsPending, error: error2 } = await useFetch(`/api/activities/projects/projectsByPerson/${id}`);
  if (error2.value?.statusCode) handleFetchError(managedProjects, error2.statusCode);

  const { data: managedServices, pending: servicesPending, error: error3 } = await useFetch(`/api/activities/services/servicesByPerson/${id}`);
  if (error3.value?.statusCode) handleFetchError(managedServices, error3.statusCode);

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

  const hasProjects = computed(() => managedProjects.value && managedProjects.value.length > 0);
  const hasServices = computed(() => managedServices.value && managedServices.value.length > 0);
  const hasActivities = computed(() => hasProjects.value || hasServices.value);


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
  width: 250px; 
  height: auto;
}

.person-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  margin-top: 30px;
}

.side-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin-top: 100px;
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
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin: 0 10px;
  text-decoration: none;
  color: white;
  background-color: #c96d81; 
  border: none;
  border-radius: 25px; 
  font-weight: bold;
  font-size: 16px;
}

.nav-button:hover {
  background-color: #b35c6e; 
}

.nav-button svg {
  margin-right: 5px; 
}

.nav-button strong {
  margin-left: 5px; 
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

.container.centered {
  justify-content: center;
}

.person.centered {
  margin-left: 0;
}

.centered-cv {
  text-align: center;
  max-width: 600px; 
  margin: 0 auto; 
}

</style>
