<template>
  <img src="/public/banner3.png" alt="Banner">
  <div class="text-center bg-gray-100 py-16">
    <h1 class="text-3xl font-bold text-gray-800">Bem-vindo à nossa loja!</h1>
    <p class="text-gray-600 mt-2">Confira nossos produtos incríveis abaixo:</p>
  </div>

  <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-6">
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <router-link
          v-for="produto in produtos"
          :key="produto.id"
          :to="`/produto/${produto.id}`"
          class="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">

          <img :src="produto.thumbnail" alt="Imagem do Produto" class="w-full h-32 object-cover rounded mb-2"/>
          <h2 class="font-semibold text-lg">{{ produto.title }}</h2>
          <p class="text-rose-600 font-bold">R$ {{ produto.price }}</p>
          <p class="text-gray-600 text-xs">Em estoque: {{ produto.stock }}</p>
          </router-link>
        </div>

        <div class="flex justify-center mt-6 gap-4">
          <button
            @click="paginaAtual--"
            :disabled="paginaAtual === 1"
            class="px-4 py-2 bg-rose-500 text-white hover:bg-rose-700 rounded disabled:bg-rose-200">
            Anterior
          </button>

          <button
            @click="paginaAtual++"
            :disabled="paginaAtual === totalPaginas"
            class="px-4 py-2 bg-rose-500 text-white hover:bg-rose-700 rounded disabled:bg-rose-200">
            Próximo
          </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

const produtos = ref([])
const paginaAtual = ref(1)
const produtosPorPagina = 10
const totalPaginas = ref(0)

const carregarProdutos = async () => {
  const skip = (paginaAtual.value - 1) * produtosPorPagina
  try {
    const res = await axios.get(`https://dummyjson.com/products?limit=${produtosPorPagina}&skip=${skip}`)
    produtos.value = res.data.products
    totalPaginas.value = Math.ceil(res.data.total / produtosPorPagina)
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
  }
}

onMounted(carregarProdutos)
watch(paginaAtual, carregarProdutos)
</script>

<style scoped>
</style>
