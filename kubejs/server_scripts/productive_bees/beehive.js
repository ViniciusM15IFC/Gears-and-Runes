ServerEvents.recipes(event => {
  const materials = [
    'vibranium',
    'mithril'
  ]

  materials.forEach(material => {
    event.custom({
      type: 'productivebees:advanced_beehive',
      ingredient: `productivebees:${material}`,
      results: [
        {
          item: {
            type: 'forge:nbt',
            item: 'productivebees:configurable_honeycomb',
            nbt: {
              EntityTag: {
                type: `productivebees:${material}`
              }
            }
          }
        },
        {
          item: {
            tag: 'forge:pollen'
          },
          chance: 5
        }
      ],
      conditions: [
        {
          type: 'productivebees:bee_exists',
          bee: `productivebees:${material}`
        }
      ]
    })
  })
})
