ServerEvents.recipes((event) => {
  event.remove({ id: "mekanism:reaction/wood_gasification/rods_wooden" });
  event.remove({ id: "mekanism:sawing/stick" });
});