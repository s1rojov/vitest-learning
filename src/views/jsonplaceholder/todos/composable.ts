import { useTodoStore } from './store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
export function useTodo() {
  const store = useTodoStore()
  const name: string = 'Todos'
  const { getAll, deleteById } = store
  const { todos } = storeToRefs(store)
  onMounted(() => {
    getAll()
  })

  function Delete(id: number | string) {
    deleteById(id)
    todos
  }
  return {
    name,
    Delete
  }
}
