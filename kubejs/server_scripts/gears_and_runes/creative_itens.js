ServerEvents.recipes(event => {
    event.shaped({
        pattern: [
            'AAA',
            'ABA',
            'AAA'
        ],
        key: {
            A: { item: 'ae2:dense_energy_cell' },
            B: { item: 'kubejs:the_ether' }
        },
        result: {
            item: 'ae2:creative_energy_cell',
            count: 1
        }
    });
    event.shaped({
        pattern: [
            'AAA',
            'ABA',
            'ACA'
        ],
        key: {
            A: { item: 'minecraft:redstone_block' },
            B: { item: 'pipez:ultimate_upgrade' },
            C: { item: 'kubejs:the_ether' }
        },
        result: {
            item: 'pipez:infinity_upgrade',
            count: 1
        }
    });
    event.shaped({
        pattern: [
            'ACA',
            'BDB',
            'ABA'
        ],
        key: {
            A: { item: 'kubejs:vibranium_dust' },
            B: { item: 'ae2:cell_component_256k' },
            C: { item: 'kubejs:the_ether' },
            D: { item: 'ae2:item_cell_housing' }
        },
        result: {
            item: 'ae2:creative_item_cell',
            count: 1
        }
    });
    event.shaped({
        pattern: [
            'ACA',
            'BDB',
            'ABA'
        ],
        key: {
            A: { item: 'kubejs:vibranium_dust' },
            B: { item: 'ae2:cell_component_256k' },
            C: { item: 'kubejs:the_ether' },
            D: { item: 'ae2:fluid_cell_housing' }
        },
        result: {
            item: 'ae2:creative_fluid_cell',
            count: 1
        }
    });

    event.shaped({
        pattern: [
            'ACA',
            'BDB',
            'ABA'
        ],
        key: {
            A: { item: 'kubejs:vibranium_dust' },
            B: { item: 'ae2:cell_component_256k' },
            C: { item: 'kubejs:the_ether' },
            D: { item: 'appmek:chemical_cell_housing' }
        },
        result: {
            item: 'appmek:creative_chemical_cell',
            count: 1
        }
    });
    event.shaped({
        pattern: [
            'ABA',
            'CDC',
            'ABA'
        ],
        key: {
            A: { item: 'kubejs:vibranium_ingot' },
            B: { item: 'mekanism:energy_tablet' },
            C: { item: 'kubejs:the_ether' },
            D: { item: 'mekanism:ultimate_energy_cube' }
        },
        result: {
            item: 'mekanism:creative_energy_cube',
            count: 1,
            nbt: {
                EnergyContainers: [
                    {
                        container: 0,
                        stored: "9223372036854775807" // Valor absurdamente alto = energia infinita
                    }
                ],
                component_data: {
                    mekanism: {
                        EnergyContainer: {
                            "0": "9223372036854775807"
                        }
                    }
                }
            }
        }
    })

    event.shaped({
        pattern: [
            'ACA',
            'AAA',
            '   '
        ],
        key: {
            A: { item: 'botania:livingrock' },
            C: { item: 'kubejs:the_ether' },
        },
        result: {
            item: 'botania:creative_pool',
            count: 1
        }
    });
    event.shaped({
        pattern: [
            'ABC',
            'CCC',
            '   '
        ],
        key: {
            A: { item: 'ars_nouveau:archmage_spell_book' },
            B: { item: 'kubejs:the_ether' },
            C: { item: 'kubejs:mithril_ingot' },
        },
        result: {
            item: 'ars_nouveau:creative_spell_book',
            count: 1
        }
    });
});
