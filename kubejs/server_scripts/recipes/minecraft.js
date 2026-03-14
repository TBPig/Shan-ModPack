ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:stick" })

  event.remove({ output: 'minecraft:crafting_table' })
  event.shaped('minecraft:crafting_table', ["AA ", "BB ", "   "], {
    A: 'anvilcraft:earth_core_shard',
    B: 'pneumaticcraft:compressed_stone',
  })

  event.remove({ output: 'minecraft:chest' })
  event.shaped('minecraft:chest', ["AAA", "ABA", "AAA"], {
    A: 'pneumaticcraft:compressed_stone_slab',
    B: 'anvilcraft:magnet_ingot',
  })

  event.remove({ output: 'minecraft:scaffolding' })
  event.shaped('10x minecraft:scaffolding', ["ABA", "A A", "A A"], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:chain',
  })

  event.smelting('minecraft:iron_ingot', 'anvilcraft:magnet_ingot')
  event.custom({
    "type": "anvilcraft:item_crush",
    "ingredients": [
      {
        "items": 'pneumaticcraft:compressed_stone'
      }
    ],
    "results": [
      {
        "id": 'minecraft:cobblestone'
      },
      {
        "count": {
          "type": "minecraft:binomial",
          "n": 1.0,
          "p": 0.5
        },
        "id": 'minecraft:cobblestone'
      }
    ]
  })
})