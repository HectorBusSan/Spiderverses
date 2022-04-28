const Ajolonauta= require('./../app/Ajolonauta.js')
// describe("Esto es una prueba",()=>{
//     test('Caso de prueba 1',()=>{
//         const result=1+2
//         expect(result).toBe(10);
//     });
// });

describe('Pruebas de unidad de Ajolonauta',()=>{
    test('Caso de prueba1: Creación de Objeto',()=>{
        const woopa= new Ajolonauta('Woopa')
        expect(woopa.name).toBe("Woopa!!!!")
    })
})