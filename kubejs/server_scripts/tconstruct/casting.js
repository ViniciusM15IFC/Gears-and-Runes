ServerEvents.recipes(event => {
  const partFluidAmounts = {
    'tconstruct:pick_head': 180,
    'tconstruct:hatchet_head': 160,
    'tconstruct:hammer_head': 240,
    'tconstruct:large_plate': 360,
    'tconstruct:binding': 90,
    'tconstruct:tool_handle': 90,
    'tconstruct:tough_handle': 270,
    'tconstruct:small_axe_head': 180,
    'tconstruct:small_blade': 180,
    'tconstruct:adze_head': 180,
    'tconstruct:broad_axe_head': 720,
    'tconstruct:broad_blade': 720,
    'tconstruct:repair_kit': 180,
    'tconstruct:tough_binding': 180,
    'tconstruct:bow_limb' : 180,
    'tconstruct:bow_grip': 180,
    'tconstruct:helmet_plating': 360,
    'tconstruct:chestplate_plating': 540,
    'tconstruct:leggings_plating': 450,
    'tconstruct:boots_plating': 270,
    'tconstruct:maille': 90
  }

  global.tinkeringMaterials.forEach(mat => {
    const material = mat.name;
    const materialId = `tconstruct:${material}`;

    if (mat.craftable) {
      mat.items.forEach(item => {
        event.custom({
          type: "tconstruct:material",
          ingredient: { item: item },
          value: 1,
          needed: 1,
          material: materialId,
        });
      });
    }
    const moltenFluid = mat.molten === false
      ? `tconstruct:molten_${material}`
      : `kubejs:molten_${material}`;
    // Para cada parte que o material suporta:
    if (mat.parts !== undefined) {
      mat.parts.forEach(partName => {
        const cast = `${partName}_cast`;
        const amount = partFluidAmounts[partName] ?? 180;
        event.custom({
          type: "tconstruct:casting_table",
          cast: { item: cast },
          fluid: { name: moltenFluid, amount: amount },
          result: {
            item: partName,
            nbt: { Material: materialId }
          },
          cooling_time: 60
        });
      });
    }
    if (mat.molten === false) return; // Skip if no fluid

    const ingotItem = mat.ingotId;
    const gemItem = mat.gemId;
    const nuggetItem = mat.nuggetId;
    const blockItem = mat.blockId;

    // --- CASTING: Molten fluid -> Ingot
    if (ingotItem) {
      event.custom({
      type: "tconstruct:casting_table",
      cast: { tag: "tconstruct:casts/multi_use/ingot" },
      fluid: { name: moltenFluid, amount: 90 },
      result: { item: ingotItem },
      cooling_time: 60
    });
    }
    if (gemItem) {
      // --- CASTING: Molten fluid -> Gem
      event.custom({
        type: "tconstruct:casting_table",
        cast: { tag: "tconstruct:casts/multi_use/gem" },
        fluid: { name: moltenFluid, amount: 90 },
        result: { item: gemItem },
        cooling_time: 60
      });
    }
    if (!nuggetItem || !blockItem) return; // Skip if no nugget or block
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
  });
});
