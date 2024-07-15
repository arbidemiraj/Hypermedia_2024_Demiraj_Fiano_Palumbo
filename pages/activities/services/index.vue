<template>
    <main>
        <div class="title-background">
            <h1 class="title">SERVICES</h1>
        </div>
        <div class="text">
            <p>
                Welcome to Our Services,
                we offer a comprehensive range of services designed to provide safety, healing, and empowerment. Our
                compassionate team is here to help you navigate your journey towards recovery and a brighter future.
            </p>
        </div>

        <div class="container">
            <div v-if="servicesPending">
                <Loader />
            </div>
            <Service v-for="(service, index) in Activity" :key="index" :title="service.name" :image="service.image"
                :description="service.description" :id="service.id" />
        </div>
        <nav class="bottom-link-container">
            <NuxtLink to="/activities/projects" class="bottom-link"> Go to all projects
                <Icon name="ep:arrow-right-bold" aria-hidden="true" />
            </NuxtLink>
        </nav>
    </main>
</template>

<script setup>

useSeoMeta({
    title: 'ByYourSide | Services',
    description: 'This is the services page with a list of all the services offered by the center, with summarized information.',
});

const { data: Activity, pending: servicesPending, error } = await useFetch('/api/activities/services');

console.log(Activity)
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

.text {
    padding: 20px;
}

.title {
    font-size: 50px;
    margin-left: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
}

.title-background {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.3)), url('assets/images/forwomen.png');
    background-size: cover;
    background-position: center;
    padding: 10px;
    text-align: left;
    color: white;
    width: 100%;
    box-shadow: 5px black;
    background-color: rgba(255, 255, 255, 0.3);
    /* White overlay with 80% opacity */
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.bottom-link {
    background-color: transparent;
    text-decoration: none;
    color: #bb5f75;
    font-size: 1.2rem;
    font-weight: bold;
}

.bottom-link:hover {
    color: #be7687;
}

.bottom-link-container {
    margin: 20px;
}
</style>