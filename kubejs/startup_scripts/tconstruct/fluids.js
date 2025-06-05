
/* StartupEvents.registry('fluid', event => {
    global.tinkersMaterials.forEach(mat => {
        if (mat.generateFluid && typeof mat.generateFluid === 'object') {
            event.create(`molten_${mat.material}`)
                .displayName(`Molten ${mat.material.charAt(0).toUpperCase() + mat.material.slice(1)}`)
                .color(parseInt(`0x${mat.generateFluid.color}`))
                .temperature(mat.generateFluid.temperature)
                .viscosity(mat.generateFluid.viscosity)
                .density(mat.generateFluid.viscosity * 2)
                .stillTexture('kubejs:fluid/still')
                .flowingTexture('kubejs:fluid/flowing')
                .bucketColor(parseInt(`0x${mat.generateFluid.color}`));
        }
    });
}); */
