<script setup>
import { ref } from 'vue'
const menuAberto = ref(false)
</script>

<template>
  <header>
    <div class="text-center bg-rose-900 text-white text-sm py-1 px-4 border-b border-gray-300">
      <h1>Encontre os melhores produtos, com preços que cabem no seu bolso</h1>
    </div>

    <nav class="px-4 py-4 shadow-sm bg-white">
      <div class="flex items-center justify-between">
        
        <div class="flex items-center gap-4">
          <button class="md:hidden" @click="menuAberto = !menuAberto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rose-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          <div class="hidden md:flex space-x-4 items-center">
            <h1 class="text-sm">Filtrar por:</h1>
            <router-link to="/categoria/beauty" class="font-bold text-neutral-800 hover:text-rose-800">Beleza</router-link>
            <router-link to="/categoria/fragrances" class="font-bold text-neutral-800 hover:text-rose-800">Fragrâncias</router-link>
            <router-link to="/categoria/furniture" class="font-bold text-neutral-800 hover:text-rose-800">Mobília</router-link>
            <router-link to="/categoria/groceries" class="font-bold text-neutral-800 hover:text-rose-800">Mantimentos</router-link>
          </div>
        </div>

        <div class="absolute left-1/2 transform -translate-x-1/2">
          <router-link to="/">
            <img class="w-20 h-auto" src="/logo3.png" alt="logo" />
          </router-link>
        </div>

        <div class="flex space-x-4 items-center">
          <router-link to="/carrinho" class="text-neutral-800 hover:text-rose-800 transition">
            <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752  3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0  0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965 60.864 60.864 0 0 0-16.497-.877l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"/>
            </svg>
          </router-link>

          <button class="text-neutral-800 hover:text-rose-800 transition">
            <svg class="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.256.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.4867.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>

      <div v-if="menuAberto" class="md:hidden mt-4 flex flex-col space-y-2">
        <h1>Filtrar por:</h1>
        <router-link to="/categoria/beauty" class="font-bold text-neutral-800 hover:text-rose-800">Beleza</router-link>
        <router-link to="/categoria/fragrances" class="font-bold text-neutral-800 hover:text-rose-800">Fragrâncias</router-link>
        <router-link to="/categoria/furniture" class="font-bold text-neutral-800 hover:text-rose-800">Mobília</router-link>
        <router-link to="/categoria/groceries" class="font-bold text-neutral-800 hover:text-rose-800">Mantimentos</router-link>
      </div>
    </nav>
  </header>
</template>