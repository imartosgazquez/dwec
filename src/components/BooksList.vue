<template>
  <div>
    <BookItem v-for="book in books" :key="book.id" :book="book" @remove="delBook(book.id)" />
  </div>

  <div>Total de libros: {{ total }}</div>
  <div class="total-amount">Importe total: {{ totalAmount }} €</div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import BookItem from './BookItem.vue'
import { store } from '@/store'

onMounted(() => {
  store.fetchBooks()
})

const books = computed(() => store.state.books)
const total = computed(() => store.state.books.length)
const totalAmount = computed(() =>
  store.state.books
    .reduce((sum, book) => sum + (Number(book.price) || 0), 0)
    .toFixed(2)
)

async function delBook(id) {
  await store.removeBook(id)
}
</script>

<style scoped>
.total-amount {
  font-weight: bold;
  margin-top: 10px;
}
</style>
