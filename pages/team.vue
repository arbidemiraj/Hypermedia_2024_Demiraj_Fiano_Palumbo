<template>
    <div class="team">
        <div class="title-background">
            <h1 class=title>Our<br>Team</h1>
        </div>
      <div class="team__members">
        <TeamMemberCard
          v-for="(member, index) in teamMembers"
          :key="index"
          :name="member.name"
          :role="member.role"
          :image="member.image"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Team",
    data() {
      return {
        teamMembers: [
          { name: "Ethan Harris", role: "Role", image: "./assets/images/ethan-harris.png" },
          { name: "Olivia Parker", role: "Role", image: "/assets/images/olivia-parker.png" },
          { name: "Ethan Harris", role: "Role", image: "/assets/images/ethan-harris.png" },
          { name: "Olivia Parker", role: "Role", image: "/assets/images/olivia-parker.png" },
          { name: "Ethan Harris", role: "Role", image: "/assets/images/ethan-harris.png" },
          { name: "Olivia Parker", role: "Role", image: "/assets/images/olivia-parker.png" },
          { name: "Ethan Harris", role: "Role", image: "/assets/images/ethan-harris.png" },
          { name: "Olivia Parker", role: "Role", image: "/assets/images/olivia-parker.png" }
        ]
      };
    }
  };
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
  </style>
  