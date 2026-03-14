StartupEvents.registry("item", (e) => {
  e.create("shan:earth_core_stick").fireResistant()
  e.create("shan:earth_core_pickaxe_head").fireResistant()
  e.create("shan:earth_core_pickaxe", "pickaxe").fireResistant().tier('diamond')
});