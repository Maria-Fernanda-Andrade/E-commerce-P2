<template>
  <div>
    <div class="text-center py-6">
      <h1 class="text-3xl font-bold text-gray-800">Bem-vindo à nossa loja!</h1>
      <p class="text-gray-600 mt-2">Confira nossos produtos incríveis abaixo:</p>
    </div>

    <div class="mb-8">
      <img src="#" alt="Banner" class="w-full rounded-xl shadow-md" />
    </div>

    <div class="container mx-auto px-4 py-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div
          v-for="produto in produtos"
          :key="produto.id"
          class="bg-white rounded-lg shadow-md p-4 text-center">
          <img :src="produto.thumbnail" alt="Imagem do Produto" class="w-full h-32 object-cover rounded mb-2" />
          <h2 class="font-semibold text-lg">{{ produto.title }}</h2>
          <p class="text-green-600 font-bold">R$ {{ produto.price }}</p>
        </div>
      </div>

      <div class="flex justify-center mt-6 gap-4">
        <button
          @click="paginaAtual--"
          :disabled="paginaAtual === 1"
          class="px-4 py-2 bg-rose-500 text-white transition duration-300 transform hover:bg-rose-700 rounded disabled:bg-rose-200">
          Anterior
        </button>
        <button
          @click="paginaAtual++"
          :disabled="paginaAtual === totalPaginas"
          class="px-4 py-2 bg-rose-500 text-white transition duration-300 transform hover:bg-rose-700 rounded disabled:bg-gray-200">
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