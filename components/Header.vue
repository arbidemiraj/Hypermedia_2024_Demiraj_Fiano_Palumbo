<template>
    <header class="site-header">
        <nav>
            <NuxtLink to="/">
                <img class="logo-image" src="/assets/images/logo.png" width="220" alt="Site Logo">
            </NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/aboutUs" exact-active-class="active"><b>About Us</b></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/activities" exact-active-class="active"><b>Activities</b></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/team" exact-active-class="active"><b>Team</b></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contactUs" exact-active-class="active"><CustomButton text="Get Help"/></NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.logo-image {
    transition: opacity 0.3s;
}

.logo-image:hover {
    opacity: 0.5;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
}

.site-header {
    height: 35px;
    background: linear-gradient(90deg, #cf556c 78%, #b12a5b 100%);
    color: white;
    padding: 0 1rem 2rem;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
    align-items: center;
}

nav ul li a {
    color: white;
    text-decoration: none;
    transition: background-color 0.3s, opacity 0.3s;
}

nav ul li a:hover {
    color: #b12a5b;
}

nav ul li a.active {
    color: #ddba8e;
}
</style>
