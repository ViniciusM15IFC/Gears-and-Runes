ServerEvents.recipes (event => {

    global.myMaterials.forEach(entry => {
    
    // Enriching
        
        if (entry.modId === 'mekanism' || entry.raw === false) {
            return; // Ignorar este material
        }

        var itemId = 'vazio';

        if (entry.makeDust === false)
        {
            itemId = `${entry.modId}:${entry.material}_dust`
        }
        else{
            itemId = `kubejs:${entry.material}_dust`
        }

        // raw
        event.custom({
            "type": "mekanism:enriching",
            "input": {
              "ingredient": {
                "tag": `forge:raw_materials/${entry.material}`,
              },
              "amount": 3
            },
            "output": {
              "item": itemId,
              "count": 4
            }
          });
        
        // storage raw
        event.custom({
            "type": "mekanism:enriching",
            "input": {
              "ingredient": {
                "tag": `forge:storage_blocks/raw_${entry.material}`,
              }
            },
            "output": {
              "item": itemId,
              "count": 12
            }
          });

        // dirty dust
        event.custom({
            "type": "mekanism:enriching",
            "input": {
              "ingredient": {
                "tag": `mekanism:dirty_dusts/${entry.material}`,
              }
            },
            "output": {
              "item": itemId,
            }
          });

    // Crusher

        event.custom({
            "type": "mekanism:crushing",
            "input": {
            "ingredient": {
                "tag": `mekanism:clumps/${entry.material}`,
            }
            },
            "output": {
                "item": `kubejs:${entry.material}_dirty_dust`
            }
        });

    // Purification Chamber
        //ore
        event.custom({
            "type": "mekanism:purifying",
            "itemInput": {
                "ingredient": {
                    "tag": `forge:ores/${entry.material}`,
                },
            },
            "chemicalInput": {
                    "amount": 1,
                    "gas": "mekanism:oxygen"
                },

            "output": {
                "item": `kubejs:${entry.material}_clump`,
                "count": 3,
            }
        });
        // raw
        event.custom({
            "type": "mekanism:purifying",
            "itemInput": {
                "ingredient": {
                    "tag": `forge:raw_materials/${entry.material}`,
                },
            },
            "chemicalInput": {
                    "amount": 1,
                    "gas": "mekanism:oxygen"
                },

            "output": {
                "item": `kubejs:${entry.material}_clump`,
                "count": 2,
            }
        });
        
        // storage raw
        event.custom({
            "type": "mekanism:purifying",
            "itemInput": {
                "ingredient": {
                    "tag": `forge:storage_blocks/raw_${entry.material}`,
                },
            },
            "chemicalInput": {
                    "amount": 2,
                    "gas": "mekanism:oxygen"
                },

            "output": {
              "item": `kubejs:${entry.material}_clump`,
              "count": 18
            }
          });

        // shard
        event.custom({
            "type": "mekanism:purifying",
            "itemInput": {
                "ingredient": {
                    "tag": `mekanism:shards/${entry.material}`,
                },
            },
            "chemicalInput": {
                    "amount": 1,
                    "gas": "mekanism:oxygen"
                },

            "output": {
              "item": `kubejs:${entry.material}_clump`,
            }
          });

    // Chemical Injection Chamber
        // ore
        event.custom({
            "type": "mekanism:injecting",
            "itemInput": {
                "ingredient": {
                "tag": `forge:ores/${entry.material}`
                }
            },
            "chemicalInput": {
                "amount": 1,
                "gas": "mekanism:hydrogen_chloride"
            },
            "output": {
                "item": `kubejs:${entry.material}_shard`,
                "count": 4
            }
        })

        // raw
        event.custom({
            "type": "mekanism:injecting",
            "itemInput": {
                "ingredient": {
                "tag": `forge:raw_materials/${entry.material}`
                },
                "amount": 3,
            },
            "chemicalInput": {
                "amount": 1,
                "gas": "mekanism:hydrogen_chloride"
            },
            "output": {
                "item": `kubejs:${entry.material}_shard`,
                "count": 8
            }
        })

        // raw storage
        event.custom({
            "type": "mekanism:injecting",
            "itemInput": {
                "ingredient": {
                "tag": `forge:storage_blocks/raw_${entry.material}`
                }
            },
            "chemicalInput": {
                "amount": 2,
                "gas": "mekanism:hydrogen_chloride"
            },
            "output": {
                "item": `kubejs:${entry.material}_shard`,
                "count": 24
            }
        })

        // crystal
        event.custom({
            "type": "mekanism:injecting",
            "itemInput": {
                "ingredient": {
                "tag": `mekanism:crystals/${entry.material}`
                }
            },
            "chemicalInput": {
                "amount": 1,
                "gas": "mekanism:hydrogen_chloride"
            },
            "output": {
                "item": `kubejs:${entry.material}_shard`,
                "count": 1
            }
        })

    // Chemical Crystalizer
        event.custom({
            "type": "mekanism:crystallizing",
            "chemicalType": "slurry",
            "input": {
              "amount": 200,
              "slurry": `kubejs:clean_${entry.material}_slurry`
            },
            "output": {
              "item": `kubejs:${entry.material}_crystal`
            }
        })

    // Chemical Washer
        event.custom({
            "type": "mekanism:washing",
            "fluidInput": {
              "amount": 5,
              "fluid": "minecraft:water"
            },
            "slurryInput": {
              "amount": 1,
              "slurry": `kubejs:dirty_${entry.material}_slurry`
            },
            "output": {
              "slurry": `kubejs:clean_${entry.material}_slurry`,
              "amount": 1
            }
        })
     // Chemical Washer
        // Ore
        event.custom({
            "type": "mekanism:dissolution",
            "itemInput": {
              "ingredient": {
                "tag": `forge:ores/${entry.material}`
              }
            },
            "output": {
              "slurry": `kubejs:dirty_${entry.material}_slurry`,
              "amount": 1000,
              "chemicalType": "slurry"
            },
            "gasInput": {
              "amount": 1,
              "gas": "mekanism:sulfuric_acid"
            }
        })
        
        // Raw
        event.custom({
            "type": "mekanism:dissolution",
            "itemInput": {
              "ingredient": {
                "tag": `forge:raw_materials/${entry.material}`,
                "amount": 3
              }
            },
            "output": {
              "slurry": `kubejs:dirty_${entry.material}_slurry`,
              "amount": 2000,
              "chemicalType": "slurry"
            },
            "gasInput": {
              "amount": 1,
              "gas": "mekanism:sulfuric_acid"
            }
        })

        // Raw Storage Block
        event.custom({
            "type": "mekanism:dissolution",
            "itemInput": {
              "ingredient": {
                "tag": `forge:storage_block/raw_${entry.material}`,
                "amount": 1
              }
            },
            "output": {
              "slurry": `kubejs:dirty_${entry.material}_slurry`,
              "amount": 6000,
              "chemicalType": "slurry"
            },
            "gasInput": {
              "amount": 2,
              "gas": "mekanism:sulfuric_acid"
            }
        })       

    })   
})
