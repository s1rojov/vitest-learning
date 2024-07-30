import { describe, it, expect } from 'vitest'
import { counter } from './composable'
const { incrFunc, decrFunc, reset, count } = counter()

describe('counter test', () => {
  it('decrement', () => {
    decrFunc()
    expect(count.value).toBe(-1)
  })
  it('increment', () => {
    incrFunc()
    expect(count.value).toBe(0)
  })
  it('reset', () => {
    reset()
    expect(count.value).toBe(0)
  })
})
