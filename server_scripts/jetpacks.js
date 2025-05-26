// kubejs/server_scripts/recipe.js

ServerEvents.recipes(event => {
    event.shaped(Item.of('ironjetpacks:jetpack', {Id:"ironjetpacks:emerald",Throttle:1.0}), [ // Substitua pelo item que será criado
        'ECE',
        'EJE',
        'T T'
    ], {
        E: 'minecraft:emerald', // Substitua pelo item correspondente na receita
        C: Item.of('ironjetpacks:capacitor', {Id:"ironjetpacks:emerald"}), // Substitua pelo item correspondente
        T: Item.of('ironjetpacks:thruster', {Id:"ironjetpacks:emerald"}), // Substitua pelo item correspondente
        J: Item.of('ironjetpacks:jetpack', {Id:"ironjetpacks:diamond"}), // Substitua pelo item correspondente
    })
})
