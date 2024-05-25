<template>
    <div class="project">
        <NuxtLink to="/projects" class="back-link"><Icon name="eva:arrow-back-outline"/> Back to projects</NuxtLink>
        <div class="title">
            <img :src="Activity.image" alt="Project image" class="project-logo"/>
            <h2>{{ Activity.name }}</h2>
        </div>
        <div v-for="(section, index) in sections" :key="index">
            <p>{{ section }}</p>
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: Activity, pending, error } = await useFetch(`/api/activities/projects/${id}`);

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
</style>