<template>

    <Head>
        <Title>Services</Title>
    </Head>

    <main>
        <div class="title-background">
            <h1 class=title>Services</h1>
        </div>
        <div class="text">
            <p>Le attività di MicAccoglie si suddividono in diverse aree di intervento, dall'accompagnamento
                nei percorsi di uscita dalla violenza alle azioni di comunicazione, prevenzione e formazione scolastica
                e aziendale
            </p>
        </div>

        <div class="container">
            <Service v-for="(service, index) in Activity" :key="index" :title="service.name" :image="service.image"
                :description="service.description" :id="service.id" />
        </div>
        <div class="bottom-link-container">
            <NuxtLink to="/projects" class="bottom-link"> Go to all projects
                <Icon name="ep:arrow-right-bold" />
            </NuxtLink>
        </div>
    </main>
</template>

<script setup>
const { data: Activity } = await useFetch('/api/activities/services');
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

.title-background {
    background-image: url('assets/images/imageWomenScritta.png');
    background-size: cover;
    background-position: center;
    padding: 5px;
    text-align: left;
    color: white;
    width: 100%;
    box-shadow: 5px black;
}

.title {
    font-size: 50px;
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