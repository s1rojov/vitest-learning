import { expect, describe, it } from 'vitest'

const myVarNull: null = null
const myVarUndefined: undefined = undefined
const myVarTrue: boolean = true
const myVarFalse: boolean = false
const myVarDefined: string = 'for test'

describe('checking variable', () => {
  it('checking to undefined', () => {
    expect(myVarUndefined).toBeUndefined()
  })
  it('checking to null', () => {
    expect(myVarNull).toBeNull()
  })
  it('checking to true', () => {
    expect(myVarTrue).toBeTruthy()
  })
  it('checking to fasle', () => {
    expect(myVarFalse).toBeFalsy()
  })
  it('checking to undefined', () => {
    expect(myVarDefined).toBeDefined()
  })
})
