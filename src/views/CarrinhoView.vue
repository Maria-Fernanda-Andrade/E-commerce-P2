<template>
  <div class="max-w-5xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">🛒 Meu Carrinho</h1>

    <div v-if="cart.length === 0" class="text-center text-gray-500">
      Seu carrinho está vazio.
    </div>

    <div v-else class="space-y-6">
      <div
        v-for="item in cart"
        :key="item.id"
        class="flex justify-between items-center bg-white p-4 rounded-lg shadow"
      >
        <div class="flex items-center gap-4">
          <img :src="item.thumbnail" alt="" class="w-24 h-24 object-cover rounded" />
          <div>
            <h2 class="text-lg font-semibold">{{ item.title }}</h2>
            <p class="text-sm text-gray-500">Preço: R$ {{ item.price }}</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button @click="updateQty(item.id, item.quantity - 1)" class="px-3 py-1 bg-gray-200 rounded">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="updateQty(item.id, item.quantity + 1)" class="px-3 py-1 bg-gray-200 rounded">+</button>
        </div>

        <div class="text-right">
          <p class="font-bold">R$ {{ (item.quantity * item.price).toFixed(2) }}</p>
          <button @click="removeFromCart(item.id)" class="text-rose-500 text-sm hover:underline">Remover</button>
        </div>
      </div>

      <div class="text-right border-t pt-6">
        <p class="text-xl font-bold">Total: R$ {{ total.toFixed(2) }}</p>
        <button class="mt-4 bg-rose-600 text-white px-6 py-2 rounded hover:bg-rose-800">
          Finalizar Compra
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

watch(cart, () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}, { deep: true })

function addToCart(product) {
  const existing = cart.value.find(p => p.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
}

function removeFromCart(id) {
  cart.value = cart.value.filter(p => p.id !== id)
}

function updateQty(id, quantity) {
  const item = cart.value.find(p => p.id === id)
  if (item && quantity >= 1) {
    item.quantity = quantity
  }
}

const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>
