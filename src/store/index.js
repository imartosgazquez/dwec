// store.js
import { reactive } from 'vue'
import BooksRepository from '@/repositories/books.repository.js'

const repository = new BooksRepository()

export const store = {
  debug: true,
  state: reactive({
    messages: [],
    books: []
  }),

  // messages
  setMessageAction(newValue) {
    if (this.debug) console.log('setMessageAction triggered with ', newValue)
    this.state.messages.push(newValue)
  },
  clearMessageAction(index) {
    if (this.debug) console.log('clearMessageAction triggered with ', index)
    this.state.messages.splice(index, 1)
  },

  // books
  async fetchBooks() {
    try {
      const response = await repository.getAllBooks()
      this.state.books = response
    } catch (error) {
      console.error(error?.message)
      //Si error existe y tiene mensaje lo usamos, si no usamos mensaje por defecto
      this.setMessageAction(error?.message ?? 'Error cargando libros')
    }
  },

  async addBook(item) {
    try {
      // Calcular siguiente id
      const maxId = this.state.books.length
      // Si hay libros, obtener el id máximo si no tiene id forzar a 0
        ? Math.max(...this.state.books.map(b => Number(b.id) || 0))
        : 0

      const nextId = maxId + 1

      // Asignar id al nuevo libro
      const bookToSend = { ...item, id: nextId }
      const newBook = await repository.addBook(bookToSend)
      this.state.books.push(newBook)
      this.setMessageAction('Libro añadido correctamente')
    } catch (error) {
      this.setMessageAction(error?.message ?? 'Error añadiendo libro')
    }
  },

  async removeBook(id) {
    try {
      await repository.removeBook(id)
      const idx = this.state.books.findIndex(b => b.id === id)
      if (idx !== -1) this.state.books.splice(idx, 1)
    } catch (error) {
      this.setMessageAction(error?.message ?? 'Error borrando libro')
    }
  }
}
