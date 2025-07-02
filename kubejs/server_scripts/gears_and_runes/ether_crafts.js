ServerEvents.recipes(event => {
    event.custom({
        type: "tconstruct:alloy",
        result: {
            fluid: "kubejs:molten_vibranium",
            amount: 90 // 1 ingot
        },
        temperature: 1200,
        inputs: [
            { name: "tcintegrations:molten_calorite", amount: 18 }, // 1/5 ingot
            { name: "tconstruct:molten_brass", amount: 18 },
            { name: "kubejs:molten_polonium", amount: 18 },
            { name: "kubejs:molten_nitro", amount: 18 },
            { name: "tconstruct:molten_manyullyn", amount: 18 }
        ]
    });
    event.custom({
        type: "occultism:ritual",
        ritual_type: "occultism:craft",
        activation_item: {
            item: "occultism:iesnium_ingot"
        },
        pentacle_id: "occultism:possess_foliot",
        duration: 600,
        spirit_max_age: -1,
        ritual_dummy: {
            item: "occultism:ritual_dummy/craft_dimensional_matrix" // Formato CORRETO
        },
        ingredients: [
            { item: "alexsmobs:capsid" },
            { item: "apotheosis:mythic_material" },
            { item: "botania:life_essence" },
            { item: "ars_nouveau:thread_spellpower" },
            { item: "irons_spellbooks:legendary_ink" }
        ],
        result: {
            item: "kubejs:mithril_ingot",
            count: 1
        }
    });


    event.shaped({
        pattern: [
            'ABC',
            'DEF',
            'GHI'
        ],
        key: {
            A: { item: 'ae2:singularity' },
            B: { item: 'occultism:dimensional_matrix' }, 
            C: { item: 'alexsmobs:void_worm_eye' },
            D: { item: 'kubejs:vibranium_dust' },
            E: { item: 'mekanism:pellet_antimatter'},
            F: { item: 'kubejs:mithril_dust' },
            G: { item: 'botania:blacker_lotus' },
            H: { item: 'createaddition:electric_motor' },
            I: { item: 'apotheosis:infused_breath' }
        },
        result: {
            item: 'kubejs:the_ether',
        }
    })
});
