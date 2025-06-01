/* ServerEvents.highPriorityData(event => {
    global.tinkersMaterials.forEach(mat => {
        // Caminho base
        const basePath = `kubejs:tconstruct/tinkering/materials`;

        // --- DEFINTION JSON ---
        const definition = {
            condition: {
            type: 'forge:or',
            values: [
                { type: 'tconstruct:config', prop: 'force_integration_materials' },
                { type: 'mantle:tag_filled', tag: mat.tag }
            ]
        },
            craftable: mat.craftable,
            hidden: mat.hidden,
            sortOrder: mat.sortOrder,
            tier: mat.tier
        }
        event.addJson(`${basePath}/definition/${mat.material}.json`, definition)

        // --- STATS JSON ---
        const stats = {
            stats: mat.stats
        }
        event.addJson(`${basePath}/stats/${mat.material}.json`, stats)

        // --- TRAITS JSON ---
        const traits = {
            default: mat.traits.map(trait => ({
                name: trait.name,
                level: trait.level
            }))
        }
        event.addJson(`${basePath}/traits/${mat.material}.json`)
    })
})
 */

ServerEvents.highPriorityData(event => {
  event.addJson('tconstruct:fluids/molten_refined_obsidian.json', {
    name: 'molten_refined_obsidian',
    temperature: 1500,
    color: 'A059A3',
    luminosity: 5
  });
});
