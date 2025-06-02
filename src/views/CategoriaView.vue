<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-6 capitalize">
      Categoria: {{ categoria }}
    </h1>

    <div v-if="produtos.length === 0" class="text-center">
      <p>Carregando produtos...</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="produto in produtos"
        :key="produto.id"
        class="bg-white rounded-lg shadow-md p-4 text-center">
        <img :src="produto.thumbnail" alt="Imagem do Produto"
          class="w-full h-32 object-cover rounded mb-2" />
        <h2 class="font-semibold text-lg">{{ produto.title }}</h2>
        <p class="text-black font-bold">R$ {{ produto.price }}</p>
        <router-link
          :to="`/produto/${produto.id}`"
          class="inline-block mt-2 px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-700">
          Ver Detalhes
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const categoria = ref(route.params.categoria)
const produtos = ref([])

const carregarProdutos = async () => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/category/${categoria.value}`)
    produtos.value = res.data.products
  } catch (error) {
    console.error('Erro ao carregar produtos da categoria:', error)
  }
}


onMounted(carregarProdutos)

watch(() => route.params.categoria, (newCategoria) => {
  categoria.value = newCategoria
  carregarProdutos()
})
</script>
