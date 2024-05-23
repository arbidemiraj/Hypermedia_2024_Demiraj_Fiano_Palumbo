<template>
  <NuxtLink class="team-member" to="/team">
      <img :src="image" :alt="name" class="team-member__image" />
      <h3 class="team-member__name">{{ name }}</h3>
      <p class="team-member__role">{{ role }}</p>
    </NuxtLink>
  </template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.team-member {
    background-color: rgb(249, 247, 247);
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: calc(20% - 50px); /* Ensures two cards per row with a gap */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin: 1rem;
    text-decoration: none;
}
.team-member:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
    transition: all 0.3s;
}
.team-member__image {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
.team-member__name {
  margin: 0.5rem 0;
}
.team-member__role {
  color: gray;
}
</style>