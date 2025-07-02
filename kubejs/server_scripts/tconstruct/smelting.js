// Função para gerar receitas de derretimento
ServerEvents.recipes(event => {
    global.tinkeringMaterials.forEach(material => {
        if (material.molten && material.items) {
            material.items.forEach(entry => {
                // Configuração base da receita
                const recipe = {
                    type: 'tconstruct:melting',
                    ingredient: { 
                        item: entry.item 
                    },
                    result: {
                        fluid: `kubejs:molten_${material.name}`,
                        amount: entry.amount
                    }
                };

                // Ajuste de temperatura e tempo baseado no tipo de item
                if (entry.ore) {
                    recipe.temperature = getOreTemperature(material.type);
                    recipe.time = 200; // Minérios levam mais tempo
                } else {
                    recipe.temperature = getBaseTemperature(material.type);
                    recipe.time = entry.item.includes('block') ? 150 : 100;
                }

                // Registrar a receita com ID único
                event.custom(recipe).id(`kubejs:melting/${material.name}_from_${entry.item.split(':')[1]}`);
            });
        }
    });
});

// Funções auxiliares para temperatura
function getBaseTemperature(type) {
    const temps = {
        'metal': 800,
        'crystal': 700,
        'debris': 1200,
        'radioactive': 1500
    };
    return temps[type] || 1000;
}

function getOreTemperature(type) {
    return getBaseTemperature(type) + 200;
}