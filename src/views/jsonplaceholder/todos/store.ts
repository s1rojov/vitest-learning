import { defineStore } from 'pinia'
const base_url = import.meta.env.VITE_BASE_URL
import axios from 'axios'
export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todos: [],
      toastType: '',
      loading: false,
      deleteloading: false
    }
  },
  actions: {
    async getAll() {
      this.loading = true
      await axios
        .get(`${base_url}todos`)
        .then((res: any) => {
          this.todos = res.data
        })
        .catch(() => {
          this.toastType = 'error'
        })
        .finally(() => {
          this.loading = false
        })
    },
    async deleteById(id: number | string) {
      this.deleteloading = true
      await axios
        .delete(`${base_url}todos/${id}`)
        .then(() => {
          this.getAll()
        })
        .catch(() => {
          this.toastType = 'error'
        })
        .finally(() => {
          this.deleteloading = false
        })
    }
  }
})
