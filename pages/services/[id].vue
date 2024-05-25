<template>
    <div class="service">
        <NuxtLink to="/services" class="back-link"><Icon name="eva:arrow-back-outline"/> Back to services</NuxtLink>
        <div class="title">
            <Icon class="service-logo" :name='Activity.image' alt="Service image"/>
            <h2>{{ Activity.title }}</h2>
        </div>
        <p>{{ Activity.description }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params;
    const { data: Activity, pending, error } = await useFetch(`/api/activities/services/${id}`);

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

    .service{
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
</style>