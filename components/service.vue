<template>
    <NuxtLink :to="'/activities/services/' + id" class="card">
        <div class="card-content">
            <div class="title-icon-container">
                <h2>{{ title }}</h2>
                <Icon class="service-icon" :name='image' color="#bb5f75" size="40"
                    :alt="`Icon of the ${title} service`" />
            </div>
            <div class="description" v-html="truncatedDescription"></div>
        </div>
        <div class="card-footer">
            <button class="btn">See more</button>
        </div>
    </NuxtLink>
</template>

<script setup>

import { ref, onMounted } from 'vue';

const props = defineProps({
    title: String,
    image: String,
    description: String,
    id: Number
});

const truncatedDescription = ref('');

const computeDescription = () => {
    const introduction = props.description.split('###')[0];
    const words = introduction.split(' ');

    if (words.length > 50) {
        truncatedDescription.value = words.slice(0, 50).join(' ') + '...';
    }
    else {
        truncatedDescription.value = introduction;
    }
}

onMounted(() => {
    computeDescription();
});
</script>

<style scoped>
.card {
    background-color: rgb(249, 247, 247);
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: calc(50% - 10px);
    /* Ensures two cards per row with a gap */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
    transition: all 0.3s;
}

.card-content {
    padding: 20px;
}

.description {
    font-size: 0.9rem;
    color: #000;
    line-height: 1.5;
}

.title-icon-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.service-icon {
    border-radius: 50px;
}

.card-content h2 {
    margin-bottom: 15px;
    font-size: 1.25rem;
    color: #333;
}

.card-content p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
}

.card-footer {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
}

.btn {
    background-color: #bb5f75;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
}

/*.btn:hover {
    background-color: #be7687;
}*/

@media (max-width: 768px) {
    .card {
        max-width: calc(100% - 20px);
    }
}
</style>