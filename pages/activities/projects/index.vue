<template>
    <main>
        <div class="title-background">
            <h1 class="title">PROJECTS</h1>
        </div>
        <div class="text-container">
            <h2>Our philosophy</h2>
            <p>Welcome to our Projects, where we showcase the impactful initiatives led by ByYourSide to support women
                victims of abuse. Here, you'll find information on our diverse projects aimed at promoting safety,
                empowerment, and healing. Explore how we are making a difference in the lives of countless women and
                communities.
            </p>
        </div>
        <div class="carousel-container" aria-label="Project carousel">
            <div v-if="projectsPending" role="alert" aria-busy="true">
                <Loader alt="Loading projects..." />
            </div>
            <Carousel :key="carouselKey" ref="carousel" :items-to-show="itemsToShow" :wrapAround="true"
                :transition="500" aria-roledescription="carousel" v-else>
                <Slide class="carousel" v-for="(project, index) in Activity" :key="project.id"
                    aria-roledescription="slide">
                    <Project :title="project.name" :description="project.description" :image="project.image"
                        :id="project.id" />
                </Slide>
                <template #addons>
                    <Navigation aria-label="Carousel navigation" />
                </template>
            </Carousel>
        </div>
        <div class="bottom-link-container">
            <NuxtLink to="/activities/services" class="bottom-link" aria-label="Navigate to all services page"> Go to
                all
                services
                <Icon name="ep:arrow-right-bold" aria-hidden="true" />
            </NuxtLink>
        </div>
    </main>
</template>


<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

useSeoMeta({
    title: 'ByYourSide | Projects',
    description: 'This is the projects page with a list of all the projects offered by the center, with summarized information.',
});

const { data: Activity, pending: projectsPending, error } = await useFetch('/api/activities/projects');

const screenWidth = ref(0);
const carouselKey = ref(0);

//Handles the screen width change for the carousel responsiveness

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
    carouselKey.value += 1;
};

onMounted(() => {
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateScreenWidth);
});

//Determines the number of items to show in the carousel based on the screen width

const itemsToShow = computed(() => {
    if (screenWidth.value >= 1200) {
        return 3;
    } else if (screenWidth.value >= 800) {
        return 2;
    } else {
        return 1;
    }
});
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

.text-container {
    padding: 20px;
}

.title {
    font-size: 50px;
    margin-left: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
}

.title-background {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.3)), url('assets/images/forwomen.webp');
    background-size: cover;
    background-position: center;
    padding: 5px;
    text-align: left;
    color: white;
    width: 100%;
    box-shadow: 5px black;
}

.carousel-container {
    margin: 20px 0;
}

.bottom-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.bottom-link {
    background-color: transparent;
    color: #bb5f75;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
}

.bottom-link:hover {
    color: #be7687;
}

.bottom-link-container {
    margin: 20px;
}

@media (max-width: 768px) {
    .carousel {
        height: 100%;
    }
}
</style>
