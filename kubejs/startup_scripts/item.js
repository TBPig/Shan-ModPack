StartupEvents.registry("item", (e) => {
  e.create("shan:royal_coin").rarity("RARE");
  e.create("shan:ember_coin").fireResistant().rarity("RARE");
  e.create("shan:transcendium_coin").fireResistant().rarity("RARE");
  e.create("shan:earth_core_stick").fireResistant()
  e.create("shan:earth_core_pickaxe_head").fireResistant()
  e.create("shan:earth_core_pickaxe", "pickaxe").fireResistant().tier('diamond')
  e.create("shan:gem_sandwich").food(food => {
    food.nutrition(8).saturation(0.8).effect('minecraft:speed', 600, 0, 1).effect('minecraft:haste', 600, 0, 1)
  })
});

ItemEvents.modification(event => {
  event.modify('anvilcraft:earth_core_shard', item => {
    item.setFood(4, 0.6)
  })
})