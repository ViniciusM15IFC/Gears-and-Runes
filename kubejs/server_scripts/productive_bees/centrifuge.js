ServerEvents.recipes(event => {
  const materials = [
    'vibranium',
    'mithril'
  ]

  materials.forEach(material => {
    event.custom({
      type: 'productivebees:centrifuge',
      ingredient: {
        type: 'forge:nbt',
        item: 'productivebees:configurable_honeycomb',
        nbt: {
          EntityTag: {
            type: `productivebees:${material}`
          }
        }
      },
      outputs: [
        {
          item: {
            tag: `forge:dusts/${material}`
          },
          chance: 30
        },
        {
          item: {
            tag: 'forge:wax'
          }
        },
        {
          fluid: {
            fluid: 'productivebees:honey'
          },
          amount: 50
        }
      ],
      conditions: [
        {
          type: 'forge:not',
          value: {
            type: 'forge:tag_empty',
            tag: `forge:dusts/${material}`
          }
        }
      ]
    })
  })
})
