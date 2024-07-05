<template>
    <header class="site-header">
      <nav>
        <NuxtLink to="/" @click="closeMenu">
          <img class="logo-image" src="/assets/images/logo.png" width="220" alt="Site Logo" />
        </NuxtLink>
        <ul class="standard-nav">
          <li>
            <NuxtLink to="/aboutUs" exact-active-class="active"><b>ABOUT US</b></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/activities" exact-active-class="active"><b>ACTIVITIES</b></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/team" exact-active-class="active"><b>TEAM</b></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contactUs" exact-active-class="active">
              <CustomButton text="GET HELP" />
            </NuxtLink>
          </li>
        </ul>
        <button class="mobile-menu-btn" @click="toggleMenu">
          <Icon :name="isMenuOpen ? 'material-symbols:close' : 'charm:menu-hamburger'" size="30px" color="white" />
        </button>
      </nav>
      <div v-if="isMenuOpen" class="lateral-menu">
        <ul class="mobile-links">
          <li>
            <NuxtLink @click="toggleMenu" class="mobile-link" to="/aboutUs" exact-active-class="active"><b>ABOUT US</b></NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMenu" class="mobile-link" to="/activities" exact-active-class="active"><b>ACTIVITIES</b></NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMenu" class="mobile-link" to="/team" exact-active-class="active"><b>TEAM</b></NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMenu" class="mobile-link" to="/contactUs" exact-active-class="active"><b>GET HELP</b></NuxtLink>
          </li>
        </ul>
      </div>
    </header>
  </template>
  

<script setup>
  let isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    document.querySelector('body')?.classList.toggle('disable-scrolling');
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
    document.querySelector('body')?.classList.remove('disable-scrolling');
  };
  
</script>

<style scoped>
.logo-image {
  transition: opacity 0.3s;
}

.mobile-menu-btn {
  display: none;
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
  background: linear-gradient(90deg, #b35c6e 78%, #b35c6e 100%);
  color: white;
  padding: 0rem 2rem;
  overflow: hidden;
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
  color: #ddba8e;
}

nav ul li a.active {
  color: #ddba8e;
}

.disable-scrolling {
  overflow: hidden;
  height: 100vh; /* Prevents scrolling */
}

.lateral-menu {
  display: none;
}

@media (max-width: 800px) {
  .standard-nav {
    display: none;
  }

  .site-header {
    background: linear-gradient(90deg, #b35c6e 78%, #b35c6e 100%);
    color: white;
    padding: 0.5rem 1rem;
  }

  .logo-image {
    width: 200px;
  }

  .mobile-menu-btn {
    display: block;
    position: sticky;
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    z-index: 1000;
  }

  .mobile-menu-btn:hover {
    opacity: 0.5;
  }

  .lateral-menu {
    top: 0;
    bottom: 0;
    right: 0;
    height: auto;
    background: linear-gradient(90deg, #de90a1c4 78%,#d5697f 100%,#d58696 100% #d58696 100%);
    width: auto;
    color: white;
    display: flex;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    font-size: 36px;
    padding: 1rem;
    z-index: 1000;
  }

  .mobile-links {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-weight: 100;
    gap: 50px;
    margin-top: 100px;
    list-style-type: none;
  }

  .mobile-link {
    text-decoration: none;
    color: white;
  }

  .mobile-link:hover {
    color: #ddba8e;
  }
}
</style>

