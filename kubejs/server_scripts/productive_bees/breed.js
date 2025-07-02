ServerEvents.recipes(event => {
    event.custom({
        type: 'productivebees:bee_breeding',
        parent1: 'productivebees:wasted_radioactive',
        parent2: 'productivebees:calorite',
        offspring: ['productivebees:vibranium'],
        conditions: []
    });
    event.custom({
        type: 'productivebees:bee_breeding',
        parent1: 'productivebees:iesnium',
        parent2: 'productivebees:elementium',
        offspring: ['productivebees:mithril'],
        conditions: []
    });
});
