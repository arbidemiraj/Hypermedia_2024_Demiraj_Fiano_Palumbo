<template>
  <main>
    <header class="title-background">
      <h1 class="title">ACTIVITIES</h1>
    </header>
    <div class="container">
      <div class="intro-container">
        <h2 class="section-title">OUR MISSION</h2>
      <p>At ByYourSide, we are dedicated to providing comprehensive support and assistance to women who have experienced
        or are currently experiencing violence. Our mission is to empower and protect, ensuring that every woman has
        access to the resources and services she needs to build a safer, brighter future. Our center offers a range of
        projects and services designed to address the immediate and long-term needs of our clients, fostering an
        environment of care, understanding, and hope.</p>

      <p>On this page, you will find information about our main projects and services, all tailored to provide holistic
        support to those in need. From legal counseling and emergency shelter to psychological support and educational
        programs, ByYourSide is committed to being a beacon of hope and a pillar of strength for women in our community.
        Explore our activities to learn more about how we can help you or someone you know.</p>
      
      
        <div class="links">
          <a href="#services" class="goto-link" @click.prevent="scrollTo('#services')">View our main services</a>
          <a href="#projects" class="goto-link" @click.prevent="scrollTo('#projects')">View our main projects</a>
        </div>
      </div>
      <div id="projects" class="main-container">
        <h2 class="section-title">OUR MAIN PROJECTS</h2>
        <article class="text-card-box">
          <p class="description-text">
            Our social center is dedicated to empowering and supporting women who have faced all forms of violence.
            Inspired by the resilience and strength of survivors, our mission is to create a safe haven where women can
            heal, rebuild, and thrive. Our projects were born out of a profound commitment to address the root causes of
            violence and to foster a community of solidarity and support. Through various initiatives, we aim to provide
            educational opportunities, skill-building workshops, and advocacy programs that empower women to reclaim
            their lives and voices. Our ultimate goal is to transform pain into power and to cultivate a society where
            every woman can live free from fear and violence
          </p>
          <div class="card-container" v-if="TopProjects">
            <div v-if="projectsPending">
              <Loader />
            </div>
            <NuxtLink class="card" v-for="project in TopProjects" :key="project.id"
              :to="'/activities/projects/' + project.id">
              <img :src="project.image" :alt="`Image of the ${project.name} project`" class="card-image">
              <h3 class="card-title">{{ project.name }}</h3>
              <button class="btn">Learn more</button>
            </NuxtLink>
          </div>
        </article>
        <footer class="bottom-link-container">
          <NuxtLink to="/activities/projects" class="bottom-link"> Go to all projects
            <Icon name="ep:arrow-right-bold" />
          </NuxtLink>
        </footer>
      </div>
      <div id="services" class="main-container">
        <h2 class="section-title">OUR MAIN SERVICES</h2>
        <article class="text-card-box">
          <p class="description-text">
            At our social center, we offer a comprehensive range of services designed to support and uplift women
            who have experienced violence. Driven by a deep understanding of the unique challenges faced by survivors,
            our services include
            personalized counseling, legal assistance, and emergency shelter. We also provide health and wellness
            programs, job placement support,
            and childcare services to ensure holistic care for every woman and her family. These services were
            established to create a network
            of care that addresses immediate needs and fosters long-term stability and independence. Our commitment is
            to walk alongside
            each woman on her journey to recovery, providing the resources and support necessary for her to rebuild her
            life with dignity and hope.
          </p>
          <div class="card-container" v-if="TopServices">
            <div v-if="servicesPending">
              <Loader />
            </div>
            <NuxtLink v-for="service in TopServices" :key="service.id" :to="'/activities/services/' + service.id"
              class="card">
              <Icon class="card-icon" :alt="`Icon of the ${service.name} service`" :name="service.image" color="#bb5f75"
                size="40" />
              <h3 class="card-title">{{ service.name }}</h3>
              <button class="btn">Learn more</button>
            </NuxtLink>
          </div>
        </article>
        <footer class="bottom-link-container">
          <NuxtLink to="/activities/services" class="bottom-link"> Go to all services
            <Icon name="ep:arrow-right-bold" />
          </NuxtLink>
        </footer>
      </div>
    </div>
  </main>
</template>

<script setup>

const selected = ref(false);

useSeoMeta({
  title: 'ByYourSide | Activities',
  description: 'This is the activities page with a list of the activities the company has worked on, classifying them into projects or services.',
});

const { data: TopProjects, pending: projectsPending, error: error1 } = await useAsyncData('topProjects', () =>
  $fetch('/api/activities/projects/topProjects')
);

const { data: TopServices, pending: servicesPending, error: error2 } = await useAsyncData('topServices', () =>
  $fetch('/api/activities/services/topServices')
);

const scrollTo = (hash) => {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.links {
  display: flex;
  gap: 100px;
  margin-top: 20px;
}

.goto-link {
  color: var(--bg-color);
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
}

.intro-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
}

.main-container {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
}

.section-title {
  font-size: 26px;
}

.title-background {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.3)), url('assets/images/forwomen.png');
  background-size: cover;
  background-position: center;
  opacity: 2;
  padding: 5px;
  text-align: left;
  color: white;
  width: 100%;
  box-shadow: 5px black;
}

.title {
  font-size: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
}

.text-card-box {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  align-items: center;
}

.description-text {
  flex: 1;
  margin-bottom: 50px;
  font-size: 1rem;
}

.card-container {
  display: flex;
  gap: 100px; /* Adjusted gap for better spacing */
  flex-wrap: wrap; /* Allows cards to wrap onto the next line */
  justify-content: center; /* Centers cards within the container */
  align-items: flex-start; /* Aligns items at the start of the container */
}

.card {
  text-align: center;
  text-decoration: none;
  color: black;
  background-color: white;
  width: 280px;
  height: auto; /* Adjusts height automatically based on content */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; /* Adds bottom margin for when cards wrap */
}

.card:hover {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.03);
}

.card-image {
  width: auto;
  height: 200px;
  border-radius: 50px;
}

.card-icon {
  width: 150px;
  height: 150px;

}

.card-title {
  font-size: 18px;
  margin: 12px 0;
}

.card-description {
  font-size: 14px;
  color: #555;
}

.view-all-link {
  text-decoration: none;
}

.btn {
  background-color: #bb5f75;
  color: white;
  border: none;
  padding: 10px 20px;
  bottom: 10px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.view-all-button {
  display: block;
  margin: 16px auto 0;
  padding: 8px 16px;
  background-color: #bb5f75;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0, 9rem;
}

.view-all-button:hover {
  background-color: #be7687;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.bottom-link {
  background-color: transparent;
  text-decoration: none;
  color: #bb5f75;
  font-size: 1.2rem;
  font-weight: bold;
}

.bottom-link:hover {
  color: #be7687;
}

.bottom-link-container {
  text-align: center;
  margin: 50px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .title-background{
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.3)), url('assets/images/home_main_image.jpg');
    text-align: center;
    background-size: cover;
  }

  .container {
    padding: 10px 10px;
    text-align: center;
  }

  .links {
    flex-direction: column;
    gap: 20px;
  }

  .services {
    margin: 0;
  }

  .text-card-box {
    flex-direction: column;
  }

  .description-text {
    margin-right: 0;
  }

  .card-container {
    gap: 10px; /* Reduces gap on smaller screens */
  }

  .card {
    width: 100%; /* Allows cards to expand to full container width */
    max-width: none; /* Removes max-width restriction */
  }
}
</style>
