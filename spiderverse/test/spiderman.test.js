// describe('Test Suite Dummy Description',()=>{
//     test('Case 1 Dummy',()=>{
//         const resultado= 1+2;
//         expect(resultado).toBe(4)
//     });
// })

const Superhero = require('./../app/Superhero.js')

describe('Unit Test for Superhero',()=>{
    test('Case 1: Get a Superhero',()=>{
        const ironman= new Superhero("Iron Man","Tony Stark","Robert Downey Jr.");

        expect(ironman.name).toBe('Iron Man');
        expect(ironman.actor).toBe('Robert Downey Jr.');
        expect(ironman.heroname).toBe('Tony Stark');
    })
})