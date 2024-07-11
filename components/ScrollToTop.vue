<template>
  <div v-show="isVisible" class="scroll-to-top" @click="scrollToTop">
    <Icon name="solar:round-alt-arrow-up-bold" color="#bb5f75" size="65" :aria-label="ariaLabel" :tabIndex="tabIndex"/>
  </div>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue';
defineProps({
  ariaLabel: String,
  tabIndex: Number
})

const isVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleScroll = () => {
  isVisible.value = window.scrollY > 2000;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 200px;
  right: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.scroll-to-top:hover {
  opacity: 1;
}

</style>
