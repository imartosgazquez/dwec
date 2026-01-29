<template>
  <div class="card">
    <img :src="book.photo" :alt="'Libro: ' + book.id" />
    <div>
      <h5>{{ book.idModule + ' (' + book.id + ')' }}</h5>
      <h6>{{ book.publisher }}</h6>
      <p>Precio: {{ book.price }} €</p>
      <p>Páginas: {{ book.pages }}</p>
      <p>Estado: {{ book.status }}</p>
      <p>{{ book.soldDate ? 'Vendido el ' + book.soldDate : 'En venta' }}</p>
      <p>Comentarios: {{ book.comments || '' }}</p>
    </div>
    <div>
      <button class="cart add-cart" title="Añadir al carrito">
        <CartPlus />
      </button>
      <button class="edit" title="Editar">
        <Pencil />
      </button>
      <button class="delete" title="Eliminar" @click="remove">
        <Delete />
      </button>
    </div>
  </div>
</template>

<script setup>
import Delete from 'vue-material-design-icons/Delete.vue'
import CartPlus from 'vue-material-design-icons/CartPlus.vue'
import Pencil from 'vue-material-design-icons/Pencil.vue'

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['remove'])

function remove() {
  if (
    confirm(
      'Vas a borrar el libro con id ' +
        props.book.id +
        ' del módulo "' +
        props.book.idModule +
        '"'
    )
  ) {
    emit('remove')
  }
}
</script>

<style scoped>
.card {
  margin: 1em;
  background-color: beige;
}
</style>
