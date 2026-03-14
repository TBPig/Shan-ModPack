ServerEvents.recipes((event) => {
  event.custom({
    "type": "anvilcraft:item_inject",
    "block_ingredient": {
      "blocks": 'minecraft:smooth_stone'
    },
    "block_result": {
      "block": "shan:redstone_prototype"
    },
    "ingredients": [
      {
        "items": 'minecraft:redstone'
      }
    ]
  })
  event.recipes.create.item_application("shan:redstone_prototype", ['minecraft:smooth_stone', 'minecraft:redstone_torch'])
  function redStonePrototype(block, num) {
    event.remove({ output: block })
    event.stonecutting(`${num}x ${block}`, "shan:redstone_prototype")
  }
  redStonePrototype('minecraft:repeater', 1)
  redStonePrototype('minecraft:comparator', 1)
  redStonePrototype('minecraft:daylight_detector', 1)
  redStonePrototype('minecraft:tripwire_hook', 1)
  redStonePrototype('minecraft:piston', 1)
  redStonePrototype('minecraft:sticky_piston', 1)
  redStonePrototype('minecraft:lever', 1)
  redStonePrototype('minecraft:observer', 1)
  redStonePrototype('minecraft:redstone_torch', 1)
  redStonePrototype('minecraft:target', 1)
  redStonePrototype('minecraft:redstone_lamp', 1)
  redStonePrototype('create:redstone_contact', 1)
  redStonePrototype('anvilcraft:item_detector', 1)
  redStonePrototype('anvilcraft:pulse_generator', 1)
  redStonePrototype('anvilcraft:advanced_comparator', 1)
  redStonePrototype('anvilcraft:block_comparator', 1)
  //create:conversion_0
  
  redStonePrototype('create:analog_lever', 1)
})