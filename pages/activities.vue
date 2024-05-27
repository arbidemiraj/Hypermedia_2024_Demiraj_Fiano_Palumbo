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
          <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="card-container" v-if="TopProjects">
            <div class="card" v-for="project in TopProjects" :key="project.id">
              <img :src="project.image" alt="Project image" class="card-image">
              <h3 class="card-title">{{ project.name }}</h3>
              <button class="btn">Learn more</button>
            </div>
          </div>
        </div>
        <NuxtLink to="/projects">
          <button class="view-all-button">View all projects</button>
        </NuxtLink>
      </section>
      <section>
        <h2>Our Main Services</h2>
        <div class="text-card-box">
          <div class="card-container" v-if="TopServices">
            <div class="card" v-for="service in TopServices" :key="service.id">
              <Icon class="card-image" :name="service.image" color="#bb5f75" size="40"/>
              <h3 class="card-title">{{ service.name }}</h3>
              <button class="btn">Learn more</button>
            </div>
          </div>
          <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <NuxtLink to="/services">
          <button class="view-all-button">View all services</button>
        </NuxtLink>
      </section>
    </div>
  </main>
</template>

<script setup>
  const { data: TopProjects } = await useAsyncData('topProjects', () =>
    $fetch('/api/activities/projects/topProjects')
  );

  const { data: TopServices} = await useAsyncData('topServices', () =>
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
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}
.title-background {
  background-image: url("assets/images/imageWomenScritta.png");
  background-size: cover;
  background-position: center;
  padding: 5px;
  text-align: left;
  color: white;
  width: 100%;
  box-shadow: 5px black;
}
.title {
  font-size: 50px;
  margin-left: 10px;
}
.nav {
  background-color: #bb5f75;
  text-align: left;
  width: 100%;
  height: 50px;
}
section {
  margin-bottom: 40px;
}

.text-card-box{
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
}

h2 {
  font-size: 24px;
  margin-bottom: 16px;
}
.card-container {
  display: flex;
  gap: 16px;
  flex: 2;
}

.card {
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
    width: 90%;
    height: auto;
    border-radius: 50px;
  }
  .card-title {
    font-size: 18px;
    margin: 12px 0;
  }
  .card-description {
    font-size: 14px;
    color: #555;
  }

.btn {
    background-color: #bb5f75;
    color: white;
    border: none;
    padding: 10px 20px;
    position: relative;
    margin-bottom: 10px;
    border-radius: 20px;
    font-size: 0.9rem;
}

.view-all-button {
  display: block;
  margin: 16px auto 0;
  padding: 8px 16px;
  background-color:#bb5f75;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0,9rem;
}

.view-all-button:hover {
    background-color: #be7687;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}
</style>
