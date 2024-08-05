import { expect, describe, it } from 'vitest'


const myVarNull: null = null
const myVarUndefined: undefined = undefined
const myVarTrue: boolean = true
const myVarFalse: boolean = false
const myVarDefined: string = 'for test'

describe('checking variable to truthiness', () => {
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

//checking number
const myNumber = 1

describe('checking variable to number', () => {
  it('greater than number (>)', () => {
    expect(myNumber).toBeGreaterThan(0)
  })
  it('greater than or equal number (>=)', () => {
    expect(myNumber).toBeGreaterThanOrEqual(0.5)
  })
  it('less than  number (<)', () => {
    expect(myNumber).toBeLessThan(2)
  })
  it('less than or equal number (<=)', () => {
    expect(myNumber).toBeLessThanOrEqual(2)
  })
  it('equal to number', () => {
    expect(myNumber).toBe(1) //when myNumber = 0.2, this doesn't work
    expect(myNumber).toEqual(1) 
    // expect(myNumber).toBeCloseTo(0.3) //when myNumber = 0.3, this works   
  })
})

//checking string

describe('checking string', () => {
  it('there is no I in team', () => {
    expect('team').not.toMatch(/T/)
  })

  it('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
  })
})
