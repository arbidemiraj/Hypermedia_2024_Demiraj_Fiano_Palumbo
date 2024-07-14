<template>
  <NuxtLink class="team-member" :to="'/team/' + id">
      <img :src='image' class="team-member__image" :alt="`Photo of ${name} ${surname}`" />
      <h3 class="team-member__name">{{ name }} {{ surname }}</h3>
    </NuxtLink>
  </template>

<script setup>
defineProps({
    id: Number,
    name: String,
    surname: String,
    image: String
});
</script>

<style scoped>
.team-member {
    background-color: rgba(249, 247, 247, 0.147);
    color: black;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: calc(22% - 20px); /* Ensures two cards per row with a gap */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
  width: 200px;
  height: 200px;
  margin: 1rem;
}
.team-member__name {
  margin: 1rem 0;
  font-size: 22px;
  padding: 10px;
}
.team-member__role {
  color: gray;
}

@media (max-width: 768px) {
  .team-member {
    max-width: calc(90% - 20px);
  }
}
</style>