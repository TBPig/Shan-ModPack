ServerEvents.recipes((event) => {
  event.shaped("shan:earth_core_stick", [" A ", "A  ", "   "], {
    A: "anvilcraft:earth_core_shard",
  });
  event.shaped("shan:earth_core_pickaxe_head", [" A ", "AA ", "   "], {
    A: "anvilcraft:earth_core_shard",
  });
  event.shaped("shan:earth_core_pickaxe", [" B ", "A  ", "   "], {
    A: "shan:earth_core_stick",
    B: "shan:earth_core_pickaxe_head",
  });
});