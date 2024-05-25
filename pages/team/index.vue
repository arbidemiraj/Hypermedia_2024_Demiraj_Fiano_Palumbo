<template>
  <div class="team">
    <div class="title-background">
      <h1 class='title'>OUR<br>TEAM</h1>
    </div>

    <div class="team__members">
      <TeamMemberCard v-for="(member, index) in Person" :key="index" :name="member.name" :surname="member.surname"
        :image="member.photo" />
    </div>
  </div>
</template>

<script setup>
  const { data: Person, pending, error } = await useFetch('/api/team');
</script>

<style scoped>
.team {
  text-align: center;
}

.team__header {
  margin-bottom: 2rem;
}

.title-background {
  background-image: url('assets/images/image.png');
  background-size: cover;
  background-position: center;
  padding: 5px;
  text-align: left;
  color: white;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 5px black;
}

.team__members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;
  gap: 2rem;
}

.title {
  font-size: 36px;
  font-weight: bold;
}
</style>