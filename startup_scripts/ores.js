const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')

global.myMaterials = [
  {material: 'zinc', color: 0xa4bc9c, makeDust: true, modId:'create', raw: true, defaultCount: 1},
  {material: 'silver', color: 0xb4b4b4, makeDust: false, modId:'occultism', raw: true, defaultCount: 1},
  {material: 'iesnium', color: 0xbce5f8, makeDust: false, modId:'occultism', raw: true, defaultCount: 1},
  {material: 'desh', color: 0xc57041, makeDust: true, modId:'ad_astra', raw: true, defaultCount: 1},
  {material: 'ostrum', color: 0x76525f, makeDust: true, modId:'ad_astra', raw: true, defaultCount: 1},
  {material: 'calorite', color: 0x9c1f3e, makeDust: true, modId:'ad_astra', raw: true, defaultCount: 1},
  {material: 'osmium', makeDust: false, modId:'mekanism', raw: true, defaultCount: 1},
  {material: 'tin', makeDust: false, modId:'mekanism', raw: true, defaultCount: 1},
  {material: 'lead', makeDust: false, modId:'mekanism', raw: true, defaultCount: 1},
  {material: 'uranium', makeDust: false, modId:'mekanism', raw: true, defaultCount: 1},
  {material: 'inferium', makeDust: false, modId:'mysticalagriculture', raw: false, defaultCount: 3},
  {material: 'prosperity', makeDust: false, modId:'mysticalagriculture', raw: false, defaultCount: 2},
  {material: 'soulium', makeDust: false, modId:'mysticalagriculture', raw: false, defaultCount: 2},
]
  
  StartupEvents.registry('item', event => {
    const mekItems = ['clump', 'crystal', 'dirty_dust', 'shard']
    global.myMaterials.forEach(entry => {

    if(entry.modId === 'mekanism' || entry.raw === false)
    {
      return;
    }
      mekItems.forEach(type => {
        event.create(`${entry.material}_${type}`)
          .texture('layer0', 'mekanism:item/empty')
          .texture('layer1', `mekanism:item/${type}`)
          .texture('layer2', `mekanism:item/${type}_overlay`)
          .color(1, entry.color)
          .tag(`mekanism:${type}s`)
          .tag(`mekanism:${type}s/${entry.material}`)
      })
      if (entry.makeDust) {
        event.create(`${entry.material}_dust`)
          .texture('layer0', 'mekanism:item/empty')
          .texture('layer1', `mekanism:item/dust`)
          .color(1, entry.color)
          .tag(`forge:dusts`)
          .tag(`forge:dusts/${entry.material}`)
      }
    })
  })

  StartupEvents.registry('mekanism:slurry', event => {
    

    global.myMaterials.forEach(entry => {
      if(entry.modId === 'mekanism' || entry.raw === false)
        {
          return;
        }

      event.createCustom(`clean_${entry.material}_slurry`, () => $Slurry($SlurryBuilder.clean().ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
      event.createCustom(`dirty_${entry.material}_slurry`, () => $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
    })
  })
  

  StartupEvents.registry('item', event => {
   

    global.myMaterials.forEach(entry => {
      if(entry.modId === 'mekanism' || entry.raw === false)
        {
          return;
        }
        event.create(`crushed_raw_${entry.material}`)
          .texture('kubejs:item/ore_processing/create_crushed')
          .color(0, entry.color)
          .tag(`minecraft:raw_materials`)
  },)})
  
  

