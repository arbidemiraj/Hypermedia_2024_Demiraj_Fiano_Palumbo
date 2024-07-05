<template>

  <Head>
    <Title>Activities</Title>
  </Head>

  <main>
    <div class="title-background">
      <h1 class="title">Activities</h1>
    </div>
    <div class="container">
      <section>
        <h2>Our Main Projects</h2>
        <div class="text-card-box">
          <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div class="card-container" v-if="TopProjects">
            <NuxtLink class="card" v-for="project in TopProjects" :key="project.id" :to="'/projects/'+project.id">
              <img :src="project.image" alt="Project image" class="card-image">
              <h3 class="card-title">{{ project.name }}</h3>
              <button class="btn">Learn more</button>
            </NuxtLink>
          </div>
        </div>
        <div class="bottom-link-container">
            <NuxtLink to="/projects" class="bottom-link"> Go to all projects
                <Icon name="ep:arrow-right-bold" />
            </NuxtLink>
        </div>
      </section>
      <section>
        <h2>Our Main Services</h2>
        <div class="text-card-box">
          <div class="card-container" v-if="TopServices">
              <NuxtLink v-for="service in TopServices" :key="service.id" :to="'/services/' + service.id" class="card">
                  <Icon class="card-icon" :name="service.image" color="#bb5f75" size="40" />
                  <h3 class="card-title">{{ service.name }}</h3>
                  <button class="btn">Learn more</button>
              </NuxtLink>
          </div>
          <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div class="bottom-link-container">
            <NuxtLink to="/projects" class="bottom-link"> Go to all services
                <Icon name="ep:arrow-right-bold" />
            </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const { data: TopProjects } = await useAsyncData('topProjects', () =>
  $fetch('/api/activities/projects/topProjects')
);

const { data: TopServices } = await useAsyncData('topServices', () =>
  $fetch('/api/activities/services/topServices')
);
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.title-background {
  display: flex;
  text-align: left;
  color: #bb5f75;
}

.title {
  font-size: 50px;
  color: #bb5f75;
  font-family: 'Poppins', sans-serif;
}

section {
  margin-bottom: 40px;
}

.text-card-box {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 5px;
  max-width: 1200px;
  margin: 0 auto;
}

.description-text {
  flex: 1;
  margin-right: 20px;
  font-size: 1rem;
}

h2 {
  font-size: 24px;
  margin-top: 100px;
  margin-bottom: 30px;
}

.card-container {
  display: flex;
  gap: 16px;
  flex: 2;
}

.card {
  text-align: center;
  text-decoration: none;
  color: black;
  background-color: white;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  gap: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card:hover {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.03);
}

.card-image {
  width: 150px;
  height: 150px;
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
  margin: 10px;
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
    text-align: end;
    margin: 20px;
}

@media (max-width: 768px) {
  .container {
    padding: 10px 20px;
  }

  .text-card-box {
    flex-direction: column;
  }

  .description-text {
    margin-right: 0;
  }

  .card-container {
    flex-direction: column;
  }

  .card {
    width: 80%;
    height: auto;
  }
}
</style>
