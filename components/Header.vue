<template>
    <header class="site-header">
        <nav>
            <NuxtLink to="/"><img class='logo-image' src='/assets/images/logo.png' :width="200"></NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/aboutUs"><b>About us</b></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/activities"><b>Activities</b></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/team"><b>Team</b></NuxtLink>
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
    font-size: 18px;
}

.site-header {
    height: 55px;
    background: linear-gradient(90deg, #cf556c 78%, #b12a5b 100%);
    color: white;
    padding-bottom: 2rem;
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
