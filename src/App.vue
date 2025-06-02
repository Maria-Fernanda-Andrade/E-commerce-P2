<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup>
import Navbar from './components/NavbarComponent.vue';
import Footer from './components/FooterComponent.vue';
</script>