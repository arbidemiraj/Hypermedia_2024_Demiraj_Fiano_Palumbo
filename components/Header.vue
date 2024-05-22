<template>
    <header class="site-header">
        <nav>
            <NuxtLink to="/"><img class='logo-image' src='/assets/images/logo.png' :width="200"></NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/aboutUs">About us</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/activities">Activities</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/team">Team</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact"><CustomButton/></NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
}

</script>

<style scoped>
.logo-image:hover {
    opacity: 0.5;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    font-size: 20px;
}

.site-header {
    height: 55px;
    background-color: #bb5f75;
    color: white;
    padding-bottom: 1rem;
    padding-inline: 1rem;
}

.site-header nav ul {
    list-style: none;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    gap: 2rem;
}

.site-header nav ul li a {
    color: white;
    text-decoration: none;
}

.site-header nav ul li a:hover {
    background-color: #bb5f75;
    opacity: 0.5;
}
</style>
