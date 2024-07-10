<template>
    <div class="loader-container">
        <Icon name="mingcute:loading-fill" class="loader-icon" size="100" />
    </div>
</template>

<style scoped>
.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
}

.loader-icon {
    color: #b35c6e;
    animation: spin 1.5s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>