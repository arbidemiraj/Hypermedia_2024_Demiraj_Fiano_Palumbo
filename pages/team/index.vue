<template>
  <div class="team">
    <header class="title-background">
      <h1 class='title'>OUR TEAM</h1>
    </header>
    <main>
      <div class="team__header">
        <p>Welcome to our team page! Here, you'll meet the compassionate and dedicated professionals committed to
          empowering and supporting women. Our team of experts provides a safe and nurturing environment, offering the
          care and resources needed for healing and rebuilding lives with dignity and strength.</p>
      </div>
      <section class="team__members" aria-label="Team Members">
        <TeamMemberCard v-for="(member, index) in Person" :key="index" :id="member.id" :name="member.name"
          :surname="member.surname" :image="member.photo" />
      </section>
    </main>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'ByYourSide | Team',
  description: 'This is the team page with a list of the members working in the center.',
});

const { data: Person, pending, error } = await useFetch('/api/team');
</script>

<style scoped>
.team {
  text-align: center;
}

.team__header {
  margin: 2rem;
  font-size: 1rem;
  text-align: start;
  padding: 0 2rem;
}

.title-background {
  background-image: url('assets/images/image.png');
  background-size: cover;
  background-position: center;
  padding: 5px;
  text-align: left;
  color: white;
  width: 100%;
  box-shadow: 5px black;
  background-color: rgba(255, 255, 255, 0.3);
  /* White overlay with 80% opacity */
}

.team__members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;
  gap: 2rem;
}

.title {
  font-size: 50px;
  margin-left: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
}

@media (max-width: 768px) {
  .title {
    text-align: center;
  }
}
</style>