/* ServerEvents.recipes(event => {
  global.tinkersMaterials.forEach(mat => {
    const material = mat.material;

    const moltenFluid = mat.generateFluid === false
      ? `tconstruct:molten_${material}`
      : `kubejs:molten_${material}`;

    const materialId = `tconstruct:${material}`;

    const parts = [
      { cast: 'tconstruct:pick_head_cast', result: 'tconstruct:pick_head', amount: 180 },
      { cast: 'tconstruct:hatchet_head_cast', result: 'tconstruct:hatchet_head', amount: 160 },
      { cast: 'tconstruct:hammer_head_cast', result: 'tconstruct:hammer_head', amount: 240 },
      { cast: 'tconstruct:large_plate_cast', result: 'tconstruct:large_plate', amount: 360 },
      { cast: 'tconstruct:crossbar_cast', result: 'tconstruct:crossbar', amount: 90 },
      { cast: 'tconstruct:binding_cast', result: 'tconstruct:binding', amount: 90 },
      { cast: 'tconstruct:tool_handle_cast', result: 'tconstruct:tool_handle', amount: 90 },
      { cast: 'tconstruct:tough_handle_cast', result: 'tconstruct:tough_handle', amount: 270 },
      { cast: 'tconstruct:small_axe_head_cast', result: 'tconstruct:small_axe_head', amount: 180 },
      { cast: 'tconstruct:small_blade_cast', result: 'tconstruct:small_blade', amount: 180 },
      { cast: 'tconstruct:adze_head_cast', result: 'tconstruct:adze_head', amount: 180 },
      { cast: 'tconstruct:broad_axe_head_cast', result: 'tconstruct:broad_axe_head', amount: 720 },
      { cast: 'tconstruct:broad_blade_cast', result: 'tconstruct:broad_blade', amount: 720 },
      { cast: 'tconstruct:repair_kit_cast', result: 'tconstruct:repair_kit', amount: 180 }
    ];
    const armorParts = [
      { cast: 'tconstruct:helmet_plating_cast', result: 'tconstruct:helmet_plating', amount: 360 },
      { cast: 'tconstruct:chestplate_plating_cast', result: 'tconstruct:chestplate_plating', amount: 540 },
      { cast: 'tconstruct:leggings_plating_cast', result: 'tconstruct:leggings_plating', amount: 450 },
      { cast: 'tconstruct:boots_plating_cast', result: 'tconstruct:boots_plating', amount: 270 },
      { cast: 'tconstruct:chainmail_cast', result: 'tconstruct:chainmail', amount: 90 }
    ];

    // Peças de ferramentas
    parts.forEach(part => {
      event.custom({
        type: "tconstruct:casting_table",
        cast: { item: part.cast },
        fluid: { name: moltenFluid, amount: part.amount },
        result: { item: part.result, nbt: { Material: materialId } },
        cooling_time: 60
      });
    });

    if (mat.armor) {
      armorParts.forEach(part => {
        event.custom({
          type: "tconstruct:casting_table",
          cast: { item: part.cast },
          fluid: { name: moltenFluid, amount: part.amount },
          result: { item: part.result, nbt: { Material: materialId } },
          cooling_time: 60
        });
      });
    }

    if (mat.generateFluid === false) return; // Skip if no fluid

    const ingotItem = mat.ingotId;
    const nuggetItem = mat.nuggetId;
    const blockItem = mat.blockId;

    const temperature = mat.generateFluid.temperature || 800;

    // --- SMELTING: Ingot -> Molten fluid
    event.custom({
      type: "tconstruct:melting",
      ingredient: { item: ingotItem },
      result: { fluid: moltenFluid, amount: 90 },
      temperature: temperature,
      time: 100
    });

    // --- SMELTING: Block -> Molten fluid
    event.custom({
      type: "tconstruct:melting",
      ingredient: { item: blockItem },
      result: { fluid: moltenFluid, amount: 810 }, // 9x ingots
      temperature: temperature,
      time: 800
    });

    // --- CASTING: Molten fluid -> Ingot
    event.custom({
      type: "tconstruct:casting_table",
      cast: { tag: "tconstruct:casts/multi_use/ingot" },
      fluid: { name: moltenFluid, amount: 90 },
      result: { item: ingotItem },
      cooling_time: 60
    });

    // --- CASTING: Molten fluid -> Nugget
    event.custom({
      type: "tconstruct:casting_table",
      cast: { tag: "tconstruct:casts/multi_use/nugget" },
      fluid: { name: moltenFluid, amount: 10 },
      result: { item: nuggetItem },
      cooling_time: 20
    });

    // --- CASTING: Molten fluid -> Block
    event.custom({
      type: "tconstruct:casting_basin",
      fluid: { name: moltenFluid, amount: 810 },
      result: { item: blockItem },
      cooling_time: 200
    });

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
});
 */