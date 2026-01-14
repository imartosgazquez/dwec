<script setup>
import { ref } from 'vue'
import userRow from '@/components/userRow.vue'

const users = ref([
  { id: 1, name: 'Ana', email: 'ana@demo.com', age: 21 },
  { id: 2, name: 'Luis', email: 'luis@demo.com', age: 34 },
  { id: 3, name: 'Marta', email: 'marta@demo.com', age: 28 }
])

function editUser(user) {
  alert(`Editar: ${user.name}`)
}

function deleteUser(id) {
  users.value = users.value.filter(u => u.id !== id)
}
</script>

<template>
  <div>
    <h2>Usuarios (CRUD)</h2>

    <table border="1" cellpadding="8" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th class="text-end">Edad</th>
          <th class="text-end">Acciones</th>
        </tr>
      </thead>

      <tbody>
        <userRow v-for="u in users" :key="u.id" :user="u">
          <button @click="editUser(u)">Editar</button>
          <button @click="deleteUser(u.id)">Borrar</button>
        </userRow>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.text-end { text-align: right; }
button { margin-left: 6px; }
</style>
