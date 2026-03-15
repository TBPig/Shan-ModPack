ServerEvents.recipes((event) => {
  event.remove({ output: 'anvilcraft:capacitor_empty' })
  event.shaped('anvilcraft:capacitor_empty', [' A ', ' B ', ' A '], {
    A: '#c:plates/copper',
    B: 'minecraft:terracotta',
  })

  event.replaceInput({
    id: 'anvilcraft:ionocraft_backpack',
  }, 'minecraft:leather_chestplate', 'minecraft:iron_chestplate')

  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      { "count": 2, "tag": 'c:glass_blocks/colorless' },
      { "count": 3, "tag": 'c:ingots/copper' },
      { "count": 3, "item": 'anvilcraft:magnet_ingot' }
    ],
    "pressure": 1.0,
    "results": [
      { "count": 1, "id": 'anvilcraft:magnetoelectric_core' }
    ]
  })
  event.custom({
    "type": "pneumaticcraft:pressure_chamber",
    "inputs": [
      { "count": 6, "tag": 'c:glass_panes/colorless' },
      { "count": 4, "tag": 'c:plates/copper' },
      { "count": 4, "item": 'anvilcraft:magnet_ingot' }
    ],
    "pressure": 2.0,
    "results": [
      { "count": 2, "id": 'anvilcraft:magnetoelectric_core' }
    ]
  })
  
  event.recipes.create.milling('anvilcraft:quartz_sand', 'minecraft:diorite')
  event.recipes.create.crushing('anvilcraft:quartz_sand', 'minecraft:diorite')
  event.recipes.mekanism.crushing('anvilcraft:quartz_sand', 'minecraft:diorite')

  event.recipes.create.milling('anvilcraft:cinerite', 'minecraft:andesite')
  event.recipes.create.crushing('anvilcraft:cinerite', 'minecraft:andesite')
  event.recipes.mekanism.crushing('anvilcraft:cinerite', 'minecraft:andesite')
})