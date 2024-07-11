<template>
    <div class="project">
        <NuxtLink to="/activities/projects" class="back-link">
            <Icon name="eva:arrow-back-outline" /> Go to projects
        </NuxtLink>
        <div class="title">
            <div v-if="projectsPending">
                <Loader />
            </div>
            <img :src="Activity.image" alt="Project image" class="project-logo" />
            <div class="team">
                <h2 class="project-title">{{ Activity.name }}</h2>

                <div class="managed-by">
                    <p> managed by</p>
                    <div v-if="personPending">
                        <Loader />
                    </div>
                    <NuxtLink :to="'/team/' + Person.id" class="person-link"><b>{{ Person.name }} {{
                        Person.surname }}</b>&nbsp;&nbsp;
                        <img :src="Person.photo" alt="Person image" class="person-logo" />
                    </NuxtLink>
                </div>
            </div>


        </div>
        <div v-for="(section, index) in sections" :key="index">
            <h2>{{ sectionTitles[index] }}</h2>
            <div v-html="section"></div>
        </div>
    </div>
</template>

<script setup>

useSeoMeta({
    title: 'ByYourSide | Project',
    description: 'This is the single project page containing all the information about a specific project, including its detailed description and responsible.',
});

const { id } = useRoute().params;
const { data: Activity, pending: projectsPending, error: error1 } = await useFetch(`/api/activities/projects/${id}`);
const { data: Person, personPending, error: error2 } = await useFetch(`/api/team/${Activity.value.responsible}`);

const sectionTitles = ['Introduction', 'Our Mission', "Project details"]

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
    align-items: center;
    /* Ensure vertical alignment is centered */
    gap: 10px;
    /* Maintain spacing between elements */
    margin-top: 10px;
    /* Add some space above the managed-by section */
}

.person-link {
    text-decoration: none;
    color: #bb5f75;
    display: flex;
    align-items: center;
    /* This ensures that the text inside .person-link is also centered */
    margin: 0;
    /* Reset default margin */
    padding: 0;
    /* Reset default padding */
}

.person-link:hover {
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
        flex-direction: column;
        /* Stack elements vertically on smaller screens */
        align-items: flex-start;
        /* Align items to the start on smaller screens */
    }

    .person-link {
        display: flex;
        align-items: center;
        /* Ensure the text and image are aligned */
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