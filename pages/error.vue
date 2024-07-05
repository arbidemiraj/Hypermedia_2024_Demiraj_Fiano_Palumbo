<script setup lang="ts">
interface Props {
    error: {
        statusCode: number;
        message: string;
    };
}

const { error } = defineProps<Props>();
console.log(error);

const handleClearError = () => {
    clearError({ redirect: '/' });
};

</script>

<template>
    <div class="container">
        <main class="main">
            <h1 class="err-code">{{ error.statusCode }}</h1>
            <h2 v-if="error.statusCode === 404">{{ error.message ? error.message : 'Page not found' }}</h2>
            <h2 v-else>An error occurred, {{ error.message }}</h2>
            <div class="err-links">
                <GenericButton value="Back to HomePage" :alt-style="true" @func="handleClearError" />
                <GenericButton
                    class="border"
                    value="Back to Last valid screen"
                    :alt-style="false"
                    @func="$router.go(-1)"
                />
            </div>
        </main>
    </div>
</template>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--bg-color);
}
.main {
    text-align: center;
    background-color: var(--bg-color);
}

.err-code {
    padding-top: 3rem;
    font-size: 7rem;
    color: var(--title-color-accent);
}

.err-links {
    padding: 3rem 0;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
    gap: 2rem;
    margin: auto;
}
</style>