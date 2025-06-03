<template>
  <div class="bg-gray-100">
    <div class="container mx-auto p-4">
      <div v-if="product" class="flex flex-col md:flex-row gap-6">
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full bg-white md:w-1/3 rounded shadow"
        />
        <div>
          <h1 class="text-3xl font-bold mb-2">{{ product.title }}</h1>
          <p class="text-gray-600 mb-2 capitalize">Categoria: <strong class="text-rose-600">{{ product.category }}</strong></p>
          <p class="text-lg mb-4">{{ product.description }}</p>
          <p class="text-2xl font-bold text-black mb-4">R$ {{ product.price }}</p>
          <p class="text-xs font-bold text-gray-600 mb-2">Avaliação: {{ product.rating }}</p>
          <p class="text-gray-600 mb-2 text-xs">Em estoque: {{ product.stock }}</p>

          <button
            @click="addToCart(product)"
            class="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <div v-else>
        <p>Carregando...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const product = ref(null)
const route = useRoute()

const fetchProduct = async () => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
    product.value = res.data
  } catch (error) {
    console.error('Erro ao buscar produto:', error)
  }
}

onMounted(() => {
  fetchProduct()
})

const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

const addToCart = (item) => {
  const exists = cart.value.find(p => p.id === item.id)
  if (exists) {
    exists.quantity++
  } else {
    cart.value.push({ ...item, quantity: 1 })
  }
  saveCart()
  alert('Produto adicionado ao carrinho!')
}
</script>
