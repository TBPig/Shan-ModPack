ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:stick" });
  event.remove({ output: 'minecraft:crafting_table' });
  event.shaped('minecraft:crafting_table', ["AA ", "BB ", "   "], {
    A: 'anvilcraft:earth_core_shard',
    B: 'pneumaticcraft:compressed_stone',
  });
  event.remove({ output: 'minecraft:chest' });
  event.shaped('minecraft:chest', ["AAA", "ABA", "AAA"], {
    A: 'pneumaticcraft:compressed_stone_slab',
    B: 'anvilcraft:magnet_ingot',
  });
});