StartupEvents.registry('fluid', event => {
    event.create('molten_end_steel')
        .displayName('Molten End Steel')
        .color(0x2a2a7f)  // Azul escuro puxando pro roxo
        .temperature(1200)
        .viscosity(4000)
        .density(5000)
        .stillTexture('kubejs:fluid/still')
        .flowingTexture('kubejs:fluid/flowing')
        .bucketColor(0x2a2a7f);
});
