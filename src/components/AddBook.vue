<template>
  <div>
    <form @submit.prevent="handleSubmit" novalidate>
      <legend>Añadir libro</legend>

      <div>
        <label>Id:</label>
        <input type="text" v-model="book.id" disabled /><br />
        <span class="error"></span>
      </div>

      <div>
        <label>Módulo:</label>
        <select v-model="book.idModule" required>
          <option value="">- Selecciona un módulo -</option>
          <option v-for="module in modules" :key="module.code" :value="module.code">
            {{ module.cliteral }}
          </option>
        </select>
        <br />
        <span class="error"></span>
      </div>

      <div>
        <label>Editorial:</label>
        <input type="text" v-model.trim="book.publisher" required /><br />
        <span class="error"></span>
      </div>

      <div>
        <label>Precio:</label>
        <input type="number" v-model.number="book.price" required min="0" step="0.01" /><br />
        <span class="error"></span>
      </div>

      <div>
        <label>Páginas:</label>
        <input type="number" v-model.number="book.pages" required min="0" /><br />
        <span class="error"></span>
      </div>

      <div>
        <label>Estado:</label>
        <input type="radio" name="status" v-model="book.status" value="new" required /> Nuevo<br />
        <input type="radio" name="status" v-model="book.status" value="good" /> Bueno<br />
        <input type="radio" name="status" v-model="book.status" value="used" /> Usado<br />
        <input type="radio" name="status" v-model="book.status" value="bad" /> Malo<br />
        <span class="error"></span>
      </div>

      <div>
        <label>Comentarios:</label>
        <textarea v-model.trim="book.comments"></textarea>
        <span class="error"></span>
      </div>

      <button type="submit">Añadir</button>
      <button type="reset" @click.prevent="resetForm">Reset</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import ModulesRepository from '../repositories/modules.repository'
import { store } from '@/store'

const modules = ref([])

const emptyBook = () => ({
  id: '',
  idModule: '',
  publisher: '',
  price: null,
  pages: null,
  status: '',
  comments: ''
})

const book = reactive(emptyBook())

function resetForm() {
  Object.assign(book, emptyBook())
}

async function loadModules() {
  const repository = new ModulesRepository()
  try {
    modules.value = await repository.getAllModules()
  } catch (error) {
    store.setMessageAction(error?.message ?? 'Error cargando módulos')
  }
}

async function handleSubmit() {
  try {
    // IMPORTANTE: añadir usando el store para que se actualice la lista en el DOM
    await store.addBook({ ...book })
    resetForm()
  } catch (error) {
    // El store ya registra el mensaje; esto es por si quieres depurar
    store.setMessageAction(error?.message ?? 'Error añadiendo libro')
  }
}

onMounted(() => {
  loadModules()
})
</script>

<style scoped>
span.error {
  color: red;
}
</style>
