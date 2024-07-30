import { ref } from 'vue'
export function counter() {
  const count = ref<number>(0)
  function incrFunc() {
    count.value = count.value + 1
  }
  function decrFunc() {
    count.value = count.value - 1
  }

  function reset() {
    count.value = 0
  }

  return {
    incrFunc,
    decrFunc,
    reset,
    count
  }
}
