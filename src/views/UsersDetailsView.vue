<script setup>
import { ref } from 'vue'
import userRow from '@/components/userRow.vue'

const users = ref([
  { id: 1, name: 'Ana', email: 'ana@demo.com', age: 21 },
  { id: 2, name: 'Luis', email: 'luis@demo.com', age: 34 },
  { id: 3, name: 'Marta', email: 'marta@demo.com', age: 28 }
])

function showDetails(user) {
  alert(`Detalles de ${user.name}\nEmail: ${user.email}\nEdad: ${user.age}`)
}
</script>

<template>
  <div>
    <h2>Usuarios (solo detalles)</h2>

    <table border="1" cellpadding="8" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th class="text-end">Edad</th>
          <th class="text-end">Acción</th>
        </tr>
      </thead>

      <tbody>
        <userRow v-for="u in users" :key="u.id" :user="u">
          <button @click="showDetails(u)">Detalles</button>
        </userRow>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.text-end { text-align: right; }
button { margin-left: 6px; }
</style>
