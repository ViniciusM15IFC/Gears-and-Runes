ServerEvents.recipes(event => {
  global.tinkersMaterials.forEach(mat => {
    const material = mat.material;

    const moltenFluid = mat.generateFluid === true
      ? `kubejs:tconstruct:molten_${material}`
      : `tconstruct:molten_${material}`;

    const materialId = `tconstruct:${material}`;

    const parts = [
      {
        cast: 'tconstruct:pick_head_cast',
        result: 'tconstruct:pick_head',
        amount: 288
      },
      {
        cast: 'tconstruct:tool_handle_cast',
        result: 'tconstruct:tool_handle',
        amount: 144
      },
      {
        cast: 'tconstruct:tool_binding_cast',
        result: 'tconstruct:tool_binding',
        amount: 144
      }
      // Adicione mais peças conforme necessário
    ];

    parts.forEach(part => {
      event.custom({
        type: "tconstruct:casting_table",
        cast: {
          item: part.cast
        },
        fluid: {
          name: moltenFluid,
          amount: part.amount
        },
        result: {
          item: part.result,
          nbt: {
            Material: materialId
          }
        },
        cooling_time: 60
      });
    });
  });
});
