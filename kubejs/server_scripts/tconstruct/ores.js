ServerEvents.recipes(event => {
    global.tinkeringMaterials.forEach(mat => {
        if (!mat.ore) return;
        const material = mat.name;
        const moltenFluid = mat.molten === false
            ? `tconstruct:molten_${material}`
            : `kubejs:molten_${material}`;

        const temperature = mat.temperature || 800;

        const meltingInputs = [
            { tag: `forge:ores/${material}`, amount: 180, time: 200 },
            { tag: `forge:raw_materials/${material}`, amount: 90, time: 100 },
            { tag: `forge:storage_blocks/raw_${material}`, amount: 810, time: 800 }
        ];

        meltingInputs.forEach(input => {
            event.custom({
                type: "tconstruct:melting",
                ingredient: { tag: input.tag },
                result: { fluid: moltenFluid, amount: input.amount },
                temperature: temperature,
                time: input.time,
                boosted: true
            });
        });
    });
})
