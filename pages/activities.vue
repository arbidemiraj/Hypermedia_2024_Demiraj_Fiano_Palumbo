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
        <div class="card-container">
          <TopProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :image_id="project.image"
            :title="project.title"
          />
        </div>
        <NuxtLink to="/projects">
          <button class="view-all-button">View all projects</button>
        </NuxtLink>
      </section>
      <section>
        <h2>Our Main Services</h2>
        <div class="card-container">
          <TopServiceCard
            v-for="(service, index) in services"
            :key="index"
            :image_id="service.image"
            :title="service.title"
          />
        </div>
        <NuxtLink to="/services">
          <button class="view-all-button">View all services</button>
        </NuxtLink>
      </section>
    </div>
  </main>
</template>

<script>
import TopProjectCard from "@/components/TopProjectCard.vue";
import TopServiceCard from "@/components/TopServiceCard.vue";

export default {
  components: {
    TopProjectCard,
    TopServiceCard,
  },
  data() {
    return {
      projects: [
        { image: 2, title: "Re-Birth" },
        { image: 2, title: "Project" },
        { image: 2, title: "Re-Birth" },
      ],
      services: [
        { image: 1, title: "Consulenza legale" },
        { image: 3, title: "Case rifugio" },
        { image: 4, title: "Pronto soccorso" },
      ],
    };
  },
};
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
h2 {
  font-size: 24px;
  margin-bottom: 16px;
}
.card-container {
  display: flex;
  gap: 16px;
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
}
</style>
