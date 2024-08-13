import { describe, it, expect } from "vitest";
const carList:string[] = [
    'bmw',
    'audi',
    'mers',
    'zeekr',
    'chevrolet',
  ];
describe('check non primitive data types', ()=>{
    it("check array's iterable", ()=>{
        expect(carList).toContain('bmw')
    })
})