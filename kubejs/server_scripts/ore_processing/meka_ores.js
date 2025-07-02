ServerEvents.recipes(event => {
  const addedMaterials = new Set();

  global.myMaterials.forEach(entry => {
    if (entry.modId === 'mekanism' || entry.raw === false) return;

    const material = entry.material;
    const count = entry.defaultCount || 1;
    const dustId = entry.makeDust === false
      ? `${entry.modId}:${material}_dust`
      : `kubejs:${material}_dust`;

    if (addedMaterials.has(material)) return;
    addedMaterials.add(material);

    //
// Enriching
//
const enrichingInputs = [
  { tag: `forge:ores/${material}`, outputCount: 2, inputCount: 1 },
  { tag: `forge:raw_materials/${material}`, outputCount: 4, inputCount: 3 },
  { tag: `forge:storage_blocks/raw_${material}`, outputCount: 12, inputCount: 1 },
  { tag: `mekanism:dirty_dusts/${material}`, outputCount: 1, inputCount: 1 }
];

enrichingInputs.forEach(data => {
  Ingredient.of(`#${data.tag}`).itemIds.forEach(itemId => {
    event.custom({
      type: "mekanism:enriching",
      input: {
        ingredient: { item: itemId },
        amount: data.inputCount
      },
      output: {
        item: dustId,
        count: data.outputCount
      }
    });
  });
});

    //
    // Crushing (Clump > Dirty Dust)
    //
    event.custom({
      type: "mekanism:crushing",
      input: {
        ingredient: { tag: `mekanism:clumps/${material}` }
      },
      output: {
        item: `kubejs:${material}_dirty_dust`
      }
    });

    //
    // Purifying (Ore/Raw/Storage/Shard > Clump)
    //
    const purifyingInputs = [
      { tag: `forge:ores/${material}`, count: 3 },
      { tag: `forge:raw_materials/${material}`, count: 2 },
      { tag: `forge:storage_blocks/raw_${material}`, count: 18 },
      { tag: `mekanism:shards/${material}`, count: 1 }
    ];

    purifyingInputs.forEach(data => {
      event.custom({
        type: "mekanism:purifying",
        itemInput: {
          ingredient: { tag: data.tag }
        },
        chemicalInput: {
          amount: 1,
          gas: "mekanism:oxygen"
        },
        output: {
          item: `kubejs:${material}_clump`,
          count: data.count
        }
      });
    });

    //
    // Injecting (Ore/Raw/Storage/Crystal > Shard)
    //
    const injectingInputs = [
      { tag: `forge:ores/${material}`, outputCount: 4, inputCount: 1 },
      { tag: `forge:raw_materials/${material}`, outputCount: 8, inputCount: 3 },
      { tag: `forge:storage_blocks/raw_${material}`, outputCount: 24, inputCount: 1 },
      { tag: `mekanism:crystals/${material}`, outputCount: 1, inputCount: 1 }
    ];

    injectingInputs.forEach(data => {
      Ingredient.of(`#${data.tag}`).itemIds.forEach(itemId => {
        event.custom({
          type: "mekanism:injecting",
          itemInput: {
            ingredient: { item: itemId },
            amount: data.inputCount
          },
          chemicalInput: {
            amount: 1,
            gas: "mekanism:hydrogen_chloride"
          },
          output: {
            item: `kubejs:${material}_shard`,
            count: data.outputCount
          }
        });
      });
    });






    //
    // Crystallizing (Clean Slurry > Crystal)
    //
    event.custom({
      type: "mekanism:crystallizing",
      chemicalType: "slurry",
      input: {
        amount: 200,
        slurry: `kubejs:clean_${material}_slurry`
      },
      output: {
        item: `kubejs:${material}_crystal`
      }
    });
    //
    // Washing (Dirty Slurry > Clean Slurry)
    //
    event.custom({
      type: "mekanism:washing",
      fluidInput: {
        amount: 5,
        fluid: "minecraft:water"
      },
      slurryInput: {
        amount: 1,
        slurry: `kubejs:dirty_${material}_slurry`
      },
      output: {
        slurry: `kubejs:clean_${material}_slurry`,
        amount: 1
      }
    });
    //
    // Dissolution (Ore > Dirty Slurry)
    //
    const dissolutionInputs = [
      { tag: `forge:ores/${material}`, slurryCount: 1000, itemCount: 1 },
      { tag: `forge:raw_materials/${material}`, slurryCount: 2000, itemCount: 3 },
      { tag: `forge:storage_blocks/raw_${material}`, slurryCount: 6000, itemCount: 1 },
    ];
    dissolutionInputs.forEach(data => {
      event.custom({
        type: "mekanism:dissolution",
        itemInput: {
          ingredient: { tag: data.tag },
          amount: data.itemCount
        },
        gasInput: {
          amount: 1,
          gas: "mekanism:sulfuric_acid"
        },
        output: {
          chemicalType: "slurry",
          slurry: `kubejs:dirty_${material}_slurry`,
          amount: data.slurryCount
        }
      });
    });
  });
});

