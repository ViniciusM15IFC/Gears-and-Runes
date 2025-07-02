ServerEvents.recipes(event => {
  const ingots = [
    { id: 'vibranium' },
    { id: 'mithril' },
  ];

  ingots.forEach(ingot => {
    const ingotId = `kubejs:${ingot.id}_ingot`;
    const nuggetId = `kubejs:${ingot.id}_nugget`;
    const blockId = `kubejs:${ingot.id}_block`;
    const dustId = `kubejs:${ingot.id}_dust`;

    // 9 nuggets -> 1 ingot
    event.shaped(ingotId, [
      'NNN',
      'NNN',
      'NNN'
    ], {
      N: nuggetId
    });

    // 1 ingot -> 9 nuggets
    event.shapeless(Item.of(nuggetId, 9), [ingotId]);

    // 9 ingots -> 1 block
    event.shaped(blockId, [
      'III',
      'III',
      'III'
    ], {
      I: ingotId
    });

    // 1 block -> 9 ingots
    event.shapeless(Item.of(ingotId, 9), [blockId]);

    event.custom({
      type: 'mekanism:crushing',
      input: { ingredient: { item: ingotId } },
      output: { item: dustId }
    });

    // Smelting: dust -> ingot
    event.smelting(ingotId, dustId).xp(0.5);

    // Blasting: dust -> ingot (mais rápido)
    event.blasting(ingotId, dustId).xp(0.5);
  });
});
