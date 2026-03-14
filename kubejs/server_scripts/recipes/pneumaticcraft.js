ServerEvents.recipes((event) => {
  event.remove({ output: 'pneumaticcraft:heat_frame' });
  event.shaped('pneumaticcraft:heat_frame', ["ABA", "B B", "ABA"], {
    A: 'anvilcraft:earth_core_shard',
    B: 'shan:earth_core_stick',
  });
});