function getIngotId(modId, material) {
    return modId === 'mekanism'
        ? `${modId}:ingot_${material}`
        : `${modId}:${material}_ingot`;
}

function getDustId(modId, material) {
    if (modId === 'mekanism') {
        return `${modId}:dust_${material}`;
    }
    if (modId === 'mysticalagriculture') {
        if (material === 'inferium') return 'mysticalagriculture:inferium_essence';
        if (material === 'prosperity') return 'mysticalagriculture:prosperity_shard';
        if (material === 'soulium') return 'mysticalagriculture:soulium_dust';
    }
    return `${modId}:${material}_dust`;
}


ServerEvents.recipes(event => {
    global.myMaterials.forEach(entry => {

        const modId = entry.modId;
        const material = entry.material;
        const defaultCount = entry.defaultCount || 1;

        const ingot = getIngotId(modId, material);
        const dust = entry.makeDust === false ? getDustId(modId, material) : `kubejs:${material}_dust`;
        const create_crushed = `kubejs:crushed_raw_${material}`;

        //
        // ✅ Dusts (smelting/blasting/crushing do Mekanism)
        //
        if (entry.makeDust) {
            event.smelting(ingot, dust).xp(0.5);
            event.blasting(ingot, dust).xp(0.5);

            event.smelting(ingot, create_crushed).xp(0.5);

            event.custom({
                type: "mekanism:crushing",
                input: { ingredient: { item: ingot } },
                output: { item: dust, count: 1 }
            });
        }

        //
        // ✅ Create Crushing (raw, ores, storage blocks)
        //
        if (modId !== 'ad_astra' && modId !== 'mekanism' && modId !== 'create' && entry.raw !== false) {
            // raw
            event.custom({
                type: "create:crushing",
                ingredients: [{ tag: `forge:raw_materials/${material}` }],
                results: [
                    { item: `kubejs:crushed_raw_${material}`, count: 1 },
                    { item: "create:experience_nugget", chance: 0.75 }
                ]
            });

            // ores
            event.custom({
                type: "create:crushing",
                ingredients: [{ tag: `forge:ores/${material}` }],
                results: [
                    { item: `kubejs:crushed_raw_${material}`, count: 1 },
                    { item: `kubejs:crushed_raw_${material}`, count: 1, chance: 0.75 },
                    { item: "create:experience_nugget", chance: 0.75 }
                ]
            });

            // raw storage block
            event.custom({
                type: "create:crushing",
                ingredients: [{ tag: `forge:storage_blocks/raw_${material}` }],
                results: [
                    { item: `kubejs:crushed_raw_${material}`, count: 9 },
                    { item: "create:experience_nugget", count: 9, chance: 0.75 }
                ]
            });
        }

        //
        // ✅ Map custom itemId para Dusts/Essências especiais
        //
        const itemId = entry.raw === true
            ? (entry.makeDust === true ? `kubejs:${material}_dust` : getDustId(modId, material))
            : getDustId(modId, material);

        /* //
        // ✅ Ender IO (Desativado)
        //
        event.custom({
            type: "enderio:sag_milling",
            input: { tag: `forge:ores/${material}` },
            outputs: [
                { item: itemId, count: defaultCount },
                { item: itemId, count: defaultCount, chance: 0.33 }
            ],
            energy: 1000
        }); */

        //
        // ✅ Occultism
        //
        event.custom({
            type: "occultism:crushing",
            ingredient: { tag: `forge:ores/${material}` },
            result: { item: itemId, count: defaultCount * 2 },
            crushing_time: 200,
            ignore_crushing_multiplier: false
        });


        // Enriching
        event.custom({
            "type": "mekanism:enriching",
            "input": {
                "ingredient": {
                    "tag": `forge:ores/${entry.material}`
                }
            },
            "output": {
                "item": itemId,
                "count": defaultCount * 2
            }
        });

    });
});
