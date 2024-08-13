import { defineStore } from 'pinia'
const base_url = import.meta.env.VITE_BASE_URL
import axios from 'axios'
export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      posts: [],
      toastType: '',
      loading: false
    }
  },
  actions: {
    async getAllTodos() {
      this.loading = true
      await axios
        .get(`${base_url}todos`)
        .then((res: any) => {
          this.posts = res.data
        })
        .catch(() => {
          this.toastType = 'error'
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
})
