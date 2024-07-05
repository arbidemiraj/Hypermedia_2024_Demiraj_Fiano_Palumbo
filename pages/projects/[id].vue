<template>
    <div class="project">
        <NuxtLink to="/projects" class="back-link"><Icon name="eva:arrow-back-outline"/> Back to projects</NuxtLink>
        <div class="title">
            <div class="project-title-container">
                <img :src="Activity.image" alt="Project image" class="project-logo"/>
                <div class="team">
                <h2 class="project-title">{{ Activity.name }}</h2>
                
                <div class="managed-by">
                <p> managed by <NuxtLink :to="'/team/'+Person.id" class="person-link"><b>{{ Person.name }} {{ Person.surname }}</b>&nbsp;&nbsp;<img :src="Person.photo" alt="Person image" class="person-logo"/></NuxtLink></p>
                </div>
                </div>
            </div>
            
            
        </div>
        <div v-for="(section, index) in sections" :key="index">
            <p v-html="newLineOnEnter(section)"></p>
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: Activity, pending, error } = await useFetch(`/api/activities/projects/${id}`);
const { data: Person} = await useFetch(`/api/team/${Activity.value.responsible}`);


const newLineOnEnter = (text) => {
    return text.replace(/\n/g, '<br>');
}

const sections = computed(() => {
  return Activity.value?.description ? Activity.value.description.split('###') : [];
});

</script>


<style scoped>
.project-logo {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 20px;
    margin-top: 50px;
}

.project {
    display: flex;
    flex-direction: column;
    padding-inline: 200px;
    padding-block: 50px;
    color: black;
}
.back-link {
    display: flex;
    gap: 5px;
    text-decoration: none;
    align-items: center;
}

.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
}

.project-title {
    font-size: 50px;
    margin: 0;
}

.project-title-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.person-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.team {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}
.managed-by {
    display: flex;
    flex-direction: row;
}
.person-link {
    text-decoration: none;
    color: #bb5f75;
}

.person-link:hover{
    opacity: 0.8;
}

@media (max-width: 768px) {
    .project {
        padding-inline: 20px;
    }
    .project-logo {
        width: 100px;
        height: 100px;
    }
    .project-title {
        font-size: 30px;
    }
    .managed-by {
        display: flex;
        flex-direction: row;
        font-size: 14px;
    }
    .person-logo {
        width: 40px;
        height: 40px;
    }
    .team {
        margin-top: 20px;
    }
}
</style>