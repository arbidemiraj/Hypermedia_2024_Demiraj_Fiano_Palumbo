<template>
    <NuxtLink :to="'/activities/projects/' + id" class="card-link">
        <div class="project-card">
            <img :src='image' :alt="`Image of the ${title} project`">
            <h2>{{ title }}</h2>
            <div class="description" v-html="truncatedDescription"></div>
            <button class="btn">Learn more</button>
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

// Compute the truncated description for the card (max 50 words)
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
.card-link {
    text-decoration: none;
    color: black;
    width: 100%;
    /* Adjusted for responsiveness */
    max-width: 400px;
    /* Maximum width for better appearance on larger screens */
    margin: 20px auto;
    /* Center cards on the page */
}

.project-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    height: auto;
    /* Changed to auto to accommodate content */
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* Smooth transition for hover effects */
}

.project-card:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
    /* Slightly darker shadow on hover for better contrast */
    transform: scale(1.03);
    /* Reduced scale effect for subtlety */
}

.project-card img {
    width: auto;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 15px;
}

.project-card h2 {
    margin-bottom: 10px;
    font-size: 1.25rem;
    color: #333;
    text-align: center;
}

.description {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
    text-align: center;
    overflow: hidden;
    /* Prevents overflow */
    text-overflow: ellipsis;
    /* Adds ellipsis to overflowed text */
    display: -webkit-box;
    line-clamp: 3;
    /* Limits to 3 lines */
    -webkit-box-orient: vertical;
    margin-bottom: 20px;
}

.project-card .btn {
    background-color: var(--bg-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s ease;
    /* Smooth transition for hover effect */
    align-self: center;
    /* Ensures button is centered within the card */
    margin-top: auto;
    /* Pushes the button to the bottom of the card */
}

.project-card .btn:hover {
    background-color: #be7687;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .card-link {
        width: 90%;
    }

    .card-link {
        max-width: 300px;
    }
}
</style>