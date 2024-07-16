<template>
    <main class="project" role="main">
        <NuxtLink to="/activities/projects" class="back-link" aria-label="Go back to projects list">
            <Icon name="eva:arrow-back-outline" aria-hidden="true" /> Go to projects
        </NuxtLink>
        <section class="title" aria-labelledby="projectTitle">
            <div v-if="projectsPending" role="alert" aria-live="polite">
                <Loader />
            </div>
            <img :src="Activity.image" :alt="`Image of ${Activity.name} project`" class="project-logo" />
            <div class="team">
                <h2 id="projectTitle" class="project-title">{{ Activity.name }}</h2>
                <div class="managed-by" aria-label="Project manager">
                    <p>Managed by</p>
                    <div v-if="personPending" role="alert" aria-live="polite">
                        <Loader />
                    </div>
                    <NuxtLink :to="'/team/' + Person.id" class="person-link" aria-label="View manager profile">
                        <b>{{ Person.name }} {{ Person.surname }}</b>&nbsp;&nbsp;
                        <img :src="Person.photo" :alt="`Image of ${Person.name} ${Person.surname}`"
                            class="person-logo" />
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section v-for="(section, index) in sections" :key="index" :aria-labelledby="'sectionTitle' + index">
            <h2 :id="'sectionTitle' + index">{{ sectionTitles[index] }}</h2>
            <div v-html="section"></div>
        </section>
    </main>
</template>

<script setup>
import handleFetchError from '~/composables/errorHandler.js';

useSeoMeta({
    title: 'ByYourSide | Project',
    description: 'This is the single project page containing all the information about a specific project, including its detailed description and responsible.',
});

const { id } = useRoute().params;
const { data: Activity, pending: projectsPending, error: error1 } = await useFetch(`/api/activities/projects/${id}`);

if (error1.value?.statusCode) handleFetchError(Activity, error1.statusCode);

const { data: Person, personPending, error: error2 } = await useFetch(`/api/team/${Activity.value.responsible}`);

if (error2.value?.statusCode) handleFetchError(Person, error2.statusCode);

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
        font-size: 16px;
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