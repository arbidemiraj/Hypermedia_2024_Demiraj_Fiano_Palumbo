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
          <NuxtLink to="/activities" :class="{ 'active': isActivitiesPage }"><b>ACTIVITIES</b></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/team" exact-active-class="active"><b>TEAM</b></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contactUs" exact-active-class="active">
            <button class="btn-primary">GET HELP</button>
          </NuxtLink>
        </li>
      </ul>
      <transition name="btn-fade">
        <button class="mobile-menu-btn" @click="toggleMenu" aria-label="Toggle mobile menu">
          <Icon :name="isMenuOpen ? 'material-symbols:close' : 'charm:menu-hamburger'" size="30px" color="white" />
        </button>
      </transition>
    </nav>
    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="mobile-menu" role="navigation">
        <ul class="mobile-links">
          <li>
            <NuxtLink @click="toggleMenu" class="mobile-link" to="/aboutUs" exact-active-class="active"><b>ABOUT US</b>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMenu" class="mobile-link" to="/activities" exact-active-class="active">
              <b>ACTIVITIES</b>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMenu" class="mobile-link" to="/team" exact-active-class="active"><b>TEAM</b>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="toggleMenu" class="mobile-link" to="/contactUs" exact-active-class="active"><b>GET
                HELP</b></NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>


<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

let isMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.querySelector('body')?.classList.toggle('disable-scrolling');
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.querySelector('body')?.classList.remove('disable-scrolling');
};

const isActivitiesPage = computed(() => {
  return route.path.startsWith('/activities');
});

</script>

<style scoped>
.logo-image {
  transition: opacity 0.3s;
}

.btn-primary {
  background-color: var(--btn-color);
  font-family: 'Poppins', sans-serif;
  color: white;
  border: none;
  padding: 12px 22px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  opacity: 0.8;
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
  background: var(--gradient-color);
  color: var(--text-color);
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
  color: var(--text-color);
  text-decoration: none;
  transition: background-color 0.3s, opacity 0.3s;
}

nav ul li a:hover {
  color: var(--btn-hover-color);
}

nav ul li a.active {
  color: var(--btn-color);
}

a.active:hover {
  opacity: 0.5;
}

.disable-scrolling {
  overflow: hidden;
  height: 100vh;
}

.mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  .standard-nav {
    display: none;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease-in;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(200px);
    opacity: 0;
  }

  .site-header {
    background: var(--gradient-color);
    color: var(--text-color);
    padding: 0.5rem 1rem;
    height: 100%;
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
    z-index: 1000;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  .mobile-menu-btn:hover {
    opacity: 0.5;
  }

  .mobile-menu {
    top: 0;
    bottom: 0;
    right: 0;
    height: 2000px;
    background: var(--gradient-color);
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
    color: var(--text-color);
  }

  .mobile-link:hover {
    color: var(--btn-hover-color);
  }
}
</style>
