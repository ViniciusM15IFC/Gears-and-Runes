StartupEvents.registry('fluid', event => {
    global.tinkeringMaterials.forEach(mat => {
        if (!mat.molten) return; // Ignora materiais que não são fundidos
        event.create(`molten_${mat.name}`)
            .displayName(`Molten ${mat.name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`)
            .stillTexture('kubejs:fluid/still')
            .flowingTexture('kubejs:fluid/flowing')
            .color(mat.color)
            .bucketColor(mat.color) // Cor do balde (em hexadecimal ARGB ou RGB)
            .luminosity(10)
            .temperature(1000) // Temperatura em Kelvin
            .viscosity(2000)
            .density(3000)
    })
})