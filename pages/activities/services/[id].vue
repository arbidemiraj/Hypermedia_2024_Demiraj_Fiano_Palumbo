<template>
    <main class="service" role="main">
        <NuxtLink to="/activities/services" class="back-link" aria-label="Go back to services list">
            <Icon name="eva:arrow-back-outline" aria-hidden="true" /> Back to services
        </NuxtLink>
        <section class="title">
            <Icon class="service-logo" :name='Activity.image' alt="Service logo" />
            <section class="team">
                <div v-if="servicesPending" role="alert" aria-live="polite">
                    <Loader />
                </div>
                <h2 class="project-title">{{ Activity.name }}</h2>
                <div class="managed-by">
                    <div v-if="personPending" role="alert" aria-live="polite">
                        <Loader />
                    </div>
                    <p> Managed by </p>
                    <NuxtLink :to="'/team/' + Person.id" class="person-link" aria-label="View manager profile">
                        <b>{{ Person.name }} {{ Person.surname }}</b>
                        <img :src="Person.photo" :alt="`Profile image of ${Person.name} ${Person.surname}`"
                            class="person-logo" />
                    </NuxtLink>
                </div>
            </section>
        </section>
        <section v-for="(section, index) in sections" :key="index" :aria-labelledby="'sectionTitle' + index">
            <h2 :id="'sectionTitle' + index">{{ sectionTitles[index] }}</h2>
            <div v-html="section"></div>
        </section>
        <aside class="testimonials-container" aria-labelledby="testimonialsHeading">
            <h2 id="testimonialsHeading">Testimonials</h2>
            <div v-for="(testimonial, index) in Activity.testimonials" :key="index" class="testimonial">
                <Icon name="system-uicons:user" class="testimonial-icon" aria-hidden="true" />
                <blockquote>"{{ testimonial }}"</blockquote>
            </div>
        </aside>
    </main>
</template>

<script setup>
import handleFetchError from '~/composables/errorHandler';

useSeoMeta({
    title: 'ByYourSide | Service',
    description: 'This is the single service page containing all the information about a specific service, including its detailed description and responsible.',
});

const { id } = useRoute().params;
const { data: Activity, pending: servicesPending, error: error1 } = await useFetch(`/api/activities/services/${id}`);

if (error1.value?.statusCode) handleFetchError(Activity, error1.statusCode);

const { data: Person, pending: personPending, error: error2 } = await useFetch(`/api/team/${Activity.value.responsible}`);

if (error2.value?.statusCode) handleFetchError(Person, error2.statusCode);

const sectionTitles = ['Introduction', 'Our Mission', "Service details", 'Benefits', 'How it works'];

const sections = computed(() => {
    return Activity.value?.description ? Activity.value.description.split('###') : [];
});

</script>

<style scoped>
.service-logo {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 20px;
    margin-top: 50px;
    color: #bb5f75;
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

.testimonials-container {
    display: flex;
    flex-direction: column;
    margin: 50px 0;
}

.testimonial {
    display: flex;
    font-style: italic;
    padding: 20px;
    gap: 5px;
    flex-direction: row;
    align-items: center;
}

.testimonial-icon {
    color: #bb5f75;
    width: 180px;
    height: 180px;
}

strong {
    color: #bb5f75;
}

.service {
    display: flex;
    flex-direction: column;
    padding-inline: 200px;
    padding-block: 50px;
    color: black;
}

.person-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
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

@media (max-width: 768px) {
    .service {
        padding-inline: 20px;
    }

    .managed-by {
        font-size: 16px;
        flex-direction: column;
        align-items: flex-start;
    }

    .service-logo {
        width: 100px;
        height: 100px;
    }

    .person-logo {
        width: 40px;
        height: 40px;
    }

    .project-title {
        font-size: 30px;
    }

    .team {
        margin-top: 20px;
    }
}
</style>