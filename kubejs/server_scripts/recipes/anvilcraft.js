ServerEvents.recipes((event) => {
  event.remove({ output: 'anvilcraft:capacitor_empty' })
  event.shaped('anvilcraft:capacitor_empty', [' A ', ' B ', ' A '], {
    A: '#c:plates/copper',
    B: 'minecraft:terracotta',
  })

  event.replaceInput({
    id: 'anvilcraft:ionocraft_backpack',
  }, 'minecraft:leather_chestplate', 'minecraft:iron_chestplate')
})