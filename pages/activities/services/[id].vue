<template>
    <div class="service">
        <NuxtLink to="/activities/services" class="back-link">
            <Icon name="eva:arrow-back-outline" /> Back to services
        </NuxtLink>
        <div class="title">
            <Icon class="service-logo" :name='Activity.image' alt="Service image" />
            <div class="team">
                <h2 class="project-title">{{ Activity.name }}</h2>

                <div class="managed-by">
                    <p> managed by 
                        <NuxtLink :to="'/team/' + Person.id" class="person-link"><b>{{ Person.name }} {{
                                Person.surname }}</b>&nbsp;&nbsp;<img :src="Person.photo" alt="Person image" class="person-logo" /></NuxtLink>
                    </p>
                    
                </div>
            </div>
        </div>

        <div v-for="(section, index) in sections" :key="index">
            <h2>{{ sectionTitles[index] }}</h2>
            <div v-html="section"></div>
        </div>
        <div class="testimonials-container">
            <h2>Testimonials</h2>
            <div v-for="(testimonial, index) in Activity.testimonials" :key="index" class="testimonial">
                <Icon name="system-uicons:user" class="testimonial-icon" />
                <p>"{{ testimonial }}"</p>
            </div>
        </div>

    </div>
</template>

<script setup>

useSeoMeta({
    title: 'ByYourSide | Service',
    description: 'This is the single service page containing all the information about a specific service, including its detailed description and responsible.',
});

const { id } = useRoute().params;
const { data: Activity, pending, error } = await useFetch(`/api/activities/services/${id}`);

const { data: Person } = await useFetch(`/api/team/${Activity.value.responsible}`);

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

.person-link {
    text-decoration: none;
    color: #bb5f75;
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
    color:#bb5f75;
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

.team {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}

.managed-by {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

@media (max-width: 768px) {
    .service {
        padding-inline: 20px;
    }

    .managed-by {
        font-size: 14px;
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