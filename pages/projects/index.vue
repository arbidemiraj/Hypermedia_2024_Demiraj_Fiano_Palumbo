<template>
    <main>
        <div class="title-background">
            <h1 class="title">Projects</h1>
        </div>
        <div class="text-container">
            <h2>Our philosophy</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae elit dapibus, tincidunt lectus a,
                varius arcu.
                Nunc non mollis tellus. Sed arcu leo, faucibus vitae hendrerit at, eleifend et leo. Morbi facilisis
                rutrum
                imperdiet.
                Proin pharetra tincidunt neque eu imperdiet. Interdum et malesuada fames ac ante ipsum primis in.</p>
        </div>
        <div class="carousel-container">
            <Carousel :items-to-show="itemsToShow" :wrapAround="true" :transition="500">
                <Slide v-for="(project, index) in Activity" :key="project.id">
                    <Project :title="project.name" :description="project.description" :image="project.image"
                        :id="project.id" />
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <div class="bottom-link-container">
            <NuxtLink to="/services" class="bottom-link"> Go to all services
                <Icon name="ep:arrow-right-bold" />
            </NuxtLink>
        </div>
    </main>
</template>

<script setup>
const { data: Activity, pending, error } = await useFetch('/api/activities/projects');
const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

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

.title-background {
    background-image: url('assets/images/imageWomenScritta.png');
    background-size: cover;
    background-position: center;
    padding: 20px;
    text-align: left;
    color: white;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 50px;
    margin-left: 10px;
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
</style>
