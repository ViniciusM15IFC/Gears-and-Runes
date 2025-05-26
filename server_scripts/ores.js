
// Dusts

ServerEvents.recipes(event => {
    global.myMaterials.forEach(entry => {
        if (entry.makeDust) {
            const ingot = `${entry.modId}:${entry.material}_ingot`;
            const dust = `kubejs:${entry.material}_dust`;

            // Receita de smelting
            event.smelting(ingot, dust)
                .xp(0.5); // Experiência recebida ao smeltar

            event.blasting(ingot, dust)
                .xp(0.5); // Alternativa mais rápida: blasting

            // Receita de crushing do Mekanism
            event.custom({
                "type": "mekanism:crushing",
                "input": {
                    "ingredient": {
                        "item": ingot
                    }
                },
                "output": {
                    "item": dust,
                    "count": 1
                }
            });
        }
    });

    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": 'silentgear:crimson_iron_ingot'
            }
        },
        "output": {
            "item": 'silentgear:crimson_iron_dust',
            "count": 1
        }
    });

    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": 'silentgear:azure_silver_ingot'
            }
        },
        "output": {
            "item": 'silentgear:azure_silver_dust',
            "count": 1
        }
    });
});




// Create

ServerEvents.recipes(event => {
    
    global.myMaterials.forEach(entry => {
        
        if (entry.modId === 'ad_astra' || entry.material === 'silver' || entry.modId === 'mekanism'|| entry.modId === 'create' || entry.raw === false) {
            return; // Ignorar este material
        }
        // raw
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": `forge:raw_materials/${entry.material}`
            }
        ],
        "results": [
            {
                "item": `kubejs:crushed_raw_${entry.material}`,
                "count": 1 // Define a quantidade de saída principal
            },
            {
                "item": "create:experience_nugget",
                "chance": 0.75 // Define a chance de drop (75%)
            }
        ]
    });

    // ores
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": `forge:ores/${entry.material}`
            }
        ],
        "results": [
            {
                "item": `kubejs:crushed_raw_${entry.material}`,
                "count": 1 // Define a quantidade de saída principal
            },
            {
                "item": `kubejs:crushed_raw_${entry.material}`,
                "count": 1, // Define a quantidade de saída principal
                "chance": 0.75
            },
            {
                "item": "create:experience_nugget",
                "chance": 0.75 // Define a chance de drop (75%)
            }
        ]
    });

    // raw storage

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": `forge:storage_blocks/raw_${entry.material}`
            }
        ],
        "results": [
            {
                "item": `kubejs:crushed_raw_${entry.material}`,
                "count": 9 // Define a quantidade de saída principal
            },
            
            {
                "item": "create:experience_nugget",
                "count": 9,
                "chance": 0.75 // Define a chance de drop (75%)
            }
        ]
    });
    
    
});})



  

ServerEvents.recipes(event => {
// ItemId Map

    global.myMaterials.forEach(entry => {
        var itemId = 'vazio';
        var modId = 'vazio';

        const materialMap = {
            'bort': 'silentgear:bort',
            'inferium': 'mysticalagriculture:inferium_essence',
            'prosperity': 'mysticalagriculture:prosperity_shard',
            'soulium': 'mysticalagriculture:soulium_dust'
        };

        if (entry.raw === true)
        {
            if (entry.makeDust === true)
                {
                    modId = 'kubejs';
                }
                else
                {
                    modId = entry.modId;
                }
            if (entry.modId === 'mekanism')
            {
                itemId = `mekanism:dust_${entry.material}`
            }
            else{
                itemId = `${modId}:${entry.material}_dust`
            }
        }
        else
        {
            if (materialMap[entry.material]) {
                itemId = materialMap[entry.material];
            } else {
                console.log('Material não reconhecido:', entry.material);
                itemId = null; // ou algum valor padrão ou tratamento de erro
            }
        }

        console.log(itemId);
        console.log(`forge:ores/${entry.material}`)
        

        

        // Ender IO

        event.custom({
            type: "enderio:sag_milling",
            input: {
                tag: `forge:ores/${entry.material}` // Ingrediente de entrada
            },
            outputs: [
                {
                    item: itemId, // Saída principal
                    count: entry.defaultCount * 1,
                },
                {
                    item: itemId, // Subproduto com chance
                    count: entry.defaultCount * 1,
                    chance: 0.33
                }
            ],
            energy: 1000 // Custo energético
        });

        // Occultism
            //ores
        event.custom({
                type: "occultism:crushing",
                ingredient:
                    {
                        "tag": `forge:ores/${entry.material}`
                    },
                result: 
                    {
                        "item": itemId,
                        "count": entry.defaultCount * 2 // Define a quantidade de saída principal
                    }
            });
        
        // Meka
            // Enriching
                event.custom({
                    "type": "mekanism:enriching",
                    "input": {
                      "ingredient": {
                        "tag": `forge:ores/${entry.material}`
                      }
                    },
                    "output": {
                      "item": itemId,
                      "count": entry.defaultCount * 2
                    }
                  });
        
            })
    });
