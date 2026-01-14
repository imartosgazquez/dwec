<script setup>
import { ref } from 'vue'
import UsersCrudView from '@/views/UsersCrudView.vue'
import UsersDetailsView from '@/views/UsersDetailsView.vue'

const view = ref('crud')
</script>

<template>
  <div class="app">
    <h1>Ejemplo de Slots en Vue 3</h1>

    <div class="toolbar">
      <button @click="view = 'crud'">Vista CRUD</button>
      <button @click="view = 'details'">Vista Detalles</button>
    </div>

    <UsersCrudView v-if="view === 'crud'" />
    <UsersDetailsView v-else />
  </div>
</template>

<style scoped>
.app {
  font-family: system-ui, sans-serif;
  padding: 24px;
}

.toolbar {
  margin-bottom: 16px;
}

button {
  margin-right: 8px;
  padding: 6px 12px;
}
</style>
