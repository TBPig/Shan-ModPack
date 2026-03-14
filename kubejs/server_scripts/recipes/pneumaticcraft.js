ServerEvents.recipes((event) => {
  event.remove({ output: 'pneumaticcraft:heat_frame' });
  event.shaped('pneumaticcraft:heat_frame', ["ABA", "B B", "ABA"], {
    A: 'anvilcraft:earth_core_shard',
    B: 'shan:earth_core_stick',
  });
  event.replaceInput(
    {},
    'minecraft:furnace',
    'pneumaticcraft:heat_frame',
  )

  event.stonecutting('3x pneumaticcraft:compressed_iron_block', 'anvilcraft:heavy_iron_block')
  event.custom({
    type: "anvilcraft:block_compress",
    inputs: [{ blocks: 'minecraft:iron_block' }, { blocks: 'minecraft:iron_block' }],
    result: { block: 'pneumaticcraft:compressed_iron_block' },
  });
});