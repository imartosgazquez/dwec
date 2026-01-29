<script setup>
import AppMenu from './components/AppMenu.vue'
import AppMessages from './components/AppMessages.vue'
import BooksList from './components/BooksList.vue'
import AddBook from './components/AddBook.vue'
import AppAbout from './components/AppAbout.vue'
import AppCart from './components/AppCart.vue'
</script>

<template>
  <header>
    <a href="http://www.cipfpbatoi.es" target="_blank" rel="noopener">
      <img src="/logoBatoi.png" class="logo" alt="CIP FP Batoi" />
    </a>
    <h1>BatoiBooks</h1>
  </header>

  <div>
    <AppMenu />
    <AppMessages />
    <BooksList /><br />
    <AddBook /><br />
    <AppCart /><br />
    <AppAbout />
  </div>

  <footer>Iván Martos - DWEC</footer>
</template>

<style scoped></style>
