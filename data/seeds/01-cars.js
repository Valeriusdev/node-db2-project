// STRETCH
const cars = [
    {
        vin: '111111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '222222222222222',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',   
    },
    {
        vin: '333333333333333',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
        title: 'clean',    
    },
]

// exports.seed = function(knex){
//     return knex('cars')
//       .trancate().then(()=>{
//           return knex('cars').insert(cars)
//       })    
// }

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
