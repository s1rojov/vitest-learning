import { describe, expect, it, vi, beforeEach } from 'vitest'
import axios from 'axios'
import { setActivePinia, createPinia } from 'pinia'
import { useTodoStore } from '@/views/jsonplaceholder/todos/store'

vi.mock('axios')
const mockedAxios = axios as any

describe('testing todo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('testing get all todo', () => {
    it('fetch todo and update state', async () => {
      const store = useTodoStore()
      const todosData = [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false
        }
      ]

      mockedAxios.get.mockResolvedValueOnce({ data: todosData })
      await store.getAll()
      expect(store.todos).toEqual(todosData)
      expect(store.loading).toBe(false)
      expect(store.toastType).toBe('')
    })

    it('should handle errors and set toastType to "error"', async () => {
      const store = useTodoStore()

      mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'))

      await store.getAll()

      expect(store.todos).toEqual([])
      expect(store.loading).toBe(false)
      expect(store.toastType).toBe('error')
    })
  })
})
