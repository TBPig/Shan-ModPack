ServerEvents.recipes((event) => {
  event.custom({
    "type": "anvilcraft:item_inject",
    "block_ingredient": {
      "blocks": 'pneumaticcraft:compressed_stone'
    },
    "block_result": {
      "block": 'shan:andesite_machine_prototype'
    },
    "ingredients": [
      {
        "items": 'create:andesite_alloy'
      }
    ]
  })
  event.recipes.create.item_application('shan:andesite_machine_prototype', ['create:andesite_casing', 'minecraft:iron_ingot'])
  function andesiteMachinePrototype(block, num) {
    event.remove({ output: block })
    event.stonecutting(`${num}x ${block}`, 'shan:andesite_machine_prototype')
  }

  andesiteMachinePrototype('create:encased_fan', 1)
  andesiteMachinePrototype('create:millstone', 1)
  andesiteMachinePrototype('create:mechanical_press', 1)
  andesiteMachinePrototype('create:mechanical_mixer', 1)
  andesiteMachinePrototype('create:deployer', 1)
  andesiteMachinePrototype('create:mechanical_harvester', 1)
  andesiteMachinePrototype('create:mechanical_plough', 1)
  andesiteMachinePrototype('create:mechanical_saw', 1)
  andesiteMachinePrototype('create:mechanical_drill', 1)
  andesiteMachinePrototype('create:mechanical_roller', 1)
  andesiteMachinePrototype('create:basin', 1)
  andesiteMachinePrototype('create:shaft', 32)
  andesiteMachinePrototype('create:cogwheel', 16)
  andesiteMachinePrototype('create:large_cogwheel', 8)
  andesiteMachinePrototype('create:gearbox', 2)
  andesiteMachinePrototype('create:vertical_gearbox', 2)
  andesiteMachinePrototype('create:turntable', 1)
  andesiteMachinePrototype('create:speedometer', 1)
  andesiteMachinePrototype('create:stressometer', 1)
  andesiteMachinePrototype('create:chain_conveyor', 1)
  andesiteMachinePrototype('create:depot', 1)
  andesiteMachinePrototype('create:weighted_ejector', 1)
  andesiteMachinePrototype('create:encased_chain_drive', 3)
  andesiteMachinePrototype('create:gearshift', 1)
  andesiteMachinePrototype('create:clutch', 1)
  andesiteMachinePrototype('create:analog_lever', 1)
})