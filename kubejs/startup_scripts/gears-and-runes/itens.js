StartupEvents.registry('block', event => {
  const ingots = [
    { id: 'vibranium', name: 'Vibranium', color: 0x19a290 },
    { id: 'mithril', name: 'Mithril', color: 0x61829e },
  ]
  ingots.forEach(ingot => {
    event.create(`${ingot.id}_block`)
      .textureAll(`kubejs:block/${ingot.id}_block`)
      .soundType('metal')
      .mapColor('metal')
      .hardness(20.0)
      .resistance(1200.0)
      .requiresTool(true)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('minecraft:needs_diamond_tool')
      .renderType('solid')
      .tagBlock(`forge:storage_blocks`)
      .tagBlock(`forge:storage_blocks/${ingot.id}`);
  })
});

StartupEvents.registry('item', event => {
  const ingots = [
    { id: 'vibranium', name: 'Vibranium', color: 0x19a290 },
    { id: 'mithril', name: 'Mithril', color: 0x61829e },
  ]
  ingots.forEach(ingot => {
    event.create(`kubejs:${ingot.id}_ingot`)
      .texture('layer0', `kubejs:item/${ingot.id}_ingot`)
      .tag(`forge:ingots`)
      .tag(`forge:ingots/${ingot.id}`);

    event.create(`kubejs:${ingot.id}_nugget`)
      .texture('layer0', `kubejs:item/nugget`)
      .color(0, ingot.color)
      .tag(`forge:nuggets`)
      .tag(`forge:nuggets/${ingot.id}`);

    event.create(`kubejs:${ingot.id}_dust`)
      .texture('layer0', `kubejs:item/dust`)
      .color(0, ingot.color)
      .tag(`forge:dusts`)
      .tag(`forge:dusts/${ingot.id}`);

  });

  event.create('kubejs:the_ether')
    .texture('layer0', 'kubejs:item/the_ether')
    .color(0, 0x3ce4cc)
    .tag('forge:gems');


});


