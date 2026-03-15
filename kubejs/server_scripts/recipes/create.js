ServerEvents.recipes((event) => {
  event.remove({ output: 'create:andesite_casing' })
  event.recipes.create.item_application('create:andesite_casing', ['pneumaticcraft:compressed_stone', 'create:andesite_alloy'])

  event.remove({ output: 'create:brass_casing' })
  event.recipes.create.item_application('create:brass_casing', ['pneumaticcraft:compressed_stone', 'anvilcraft:brass_ingot'])

  event.remove({ output: 'create:copper_casing' })
  event.recipes.create.item_application('create:copper_casing', ['pneumaticcraft:compressed_stone', 'minecraft:copper_ingot'])

  event.remove({ output: 'create:empty_blaze_burner' })
  event.remove({ output: 'create:water_wheel' })
  event.remove({ output: 'create:large_water_wheel' })
  event.remove({ output: 'create:windmill_bearing' })
})