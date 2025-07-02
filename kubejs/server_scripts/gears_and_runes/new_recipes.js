ServerEvents.recipes(event => {
// Mekanism Mekasuit Crafting Recipes
  // Helmet
  event.remove({ id: 'mekanism:mekasuit_helmet' })
  event.shaped('mekanism:mekasuit_helmet', [
    'HUH',
    'HNH',
    'VCV'
  ], {
    V: 'kubejs:vibranium_block',
    U: 'mekanism:ultimate_control_circuit',
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:basic_induction_cell',
    N: 'minecraft:netherite_helmet'

  })

  // Chestplate
  event.remove({ id: 'mekanism:mekasuit_bodyarmor' })
  event.shaped('mekanism:mekasuit_bodyarmor', [
    'HUH',
    'HNH',
    'VCV'
  ], {
    V: 'kubejs:vibranium_block',
    U: 'mekanism:ultimate_control_circuit',
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:basic_induction_cell',
    N: 'minecraft:netherite_chestplate'
  })

  // Leggings
  event.remove({ id: 'mekanism:mekasuit_pants' })
  event.shaped('mekanism:mekasuit_pants', [
    'HUH',
    'HNH',
    'VCV'
  ], {
    V: 'kubejs:vibranium_block',
    U: 'mekanism:ultimate_control_circuit',
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:basic_induction_cell',
    N: 'minecraft:netherite_leggings'
  })

  // Boots
  event.remove({ id: 'mekanism:mekasuit_boots' })
  event.shaped('mekanism:mekasuit_boots', [
    'HUH',
    'HNH',
    'VCV'
  ], {
    V: 'kubejs:vibranium_block',
    U: 'mekanism:ultimate_control_circuit',
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:basic_induction_cell',
    N: 'minecraft:netherite_boots'
  })

// Iron's Spellbooks Recipes
  // Common Ink
  event.shapeless(
    'irons_spellbooks:common_ink', // resultado
    [
      Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), // frasco de água com NBT
      'minecraft:ink_sac',
      'irons_spellbooks:arcane_essence',
      'irons_spellbooks:arcane_essence'
    ]
  )
})