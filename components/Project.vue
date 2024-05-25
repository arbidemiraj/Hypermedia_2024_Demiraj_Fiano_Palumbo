<template>
    <NuxtLink :to="'/projects/' + id" class="card-link">
        <div class="project-card">
            <img :src='image' alt="Project Image">
            <h2>{{title}}</h2>
            <p>{{truncatedDescription}}</p>
            <button class="btn">Learn more</button>
        </div>
    </NuxtLink>
</template>

<script>
    export default {
        props: {
            title: {
            type: String,
            required: true,
            },
            description: {
            type: String,
            required: true,
            },
            image: {
            type: String,
            required: true,
            },
            id: {
            type: Number,
            required: true,
            },
        },
        computed: {
            truncatedDescription() {
            const introduction = this.description.split('###')[0];

            const words = introduction.split(' ');
            if (words.length > 50) {
                return words.slice(0, 50).join(' ') + '...';
            }
            
            return introduction;
            }
        }
    }
</script>

<style scoped>
.card-link {
    text-decoration: none;
    color: black;
}
.project-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 100%;
    max-width: 300px;
    text-align: left;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project-card:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}

.project-card img {
    width: 150px;
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

.project-card p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 20px;
}

.project-card .btn {
    background-color: #bb5f75;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
}

.project-card .btn:hover {
    background-color: #be7687;
}

</style>