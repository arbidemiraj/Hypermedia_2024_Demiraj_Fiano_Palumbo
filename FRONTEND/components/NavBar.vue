<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" ref="navbarCollapse">
        <div class="container">
            <NuxtLink class="navbar-brand" to="/"><img src="/images/logo.png" width="50" alt="Logo"> <b>ByYourSide</b>
                </NuxtLink>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" aria-current="page" to="/">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/about">About Us</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/team">Team</NuxtLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Activities
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <NuxtLink class="dropdown-item" to="/projects">Projects</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="dropdown-item" to="/services">Services</NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/help">Get Help</NuxtLink>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
  </template>
  




<style scoped>

box { box-sizing: border-box; }

Auto layout
{
    display: flex;
flex-direction: row;
align-items: center;
padding: 20px 269px 20px 162px;
gap: 548px;
}

b {
    position: absolute;
    width: 1440px;
    height: 75px;
    left: 0px;
    top: 0px;
    background: rgba(180, 65, 92, 0.8);
    border-bottom: 1px solid rgba(180, 65, 92, 0.8);
}

</style>