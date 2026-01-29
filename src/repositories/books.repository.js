import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default class BooksRepository {
  async getAllBooks() {
    const response = await apiClient.get('/books')
    return response.data
  }

  async getBookById(idBook) {
    const response = await apiClient.get(`/books/${idBook}`)
    return response.data
  }

  async bookExists(idUser, idModule) {
    const response = await apiClient.get(`/books?idUser=${idUser}&idModule=${idModule}`)
    return response.data.length
  }

  async addBook(item) {
    const response = await apiClient.post(`/books`, item)
    return response.data
  }

  async removeBook(id) {
    const response = await apiClient.delete(`/books/${id}`)
    return response.data
  }

  async changeBook(item) {
    const response = await apiClient.put(`/books/${item.id}`, item)
    return response.data
  }

  async updatePriceOfBook(idBook, newPrice) {
    const response = await apiClient.patch(`/books/${idBook}`, { price: newPrice })
    return response.data
  }
}
