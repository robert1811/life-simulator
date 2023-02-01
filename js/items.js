"use strict";

const items = {
    weapons: [
        {
            label: 'Knife',
            price: 5000,
            successChance: 35,
            image: 'knife.png',
            type: 'weapons',
            index: 0
        },
        {
            label: 'Handgun',
            price: 32000,
            successChance: 55,
            image: 'handgun.png',
            type: 'weapons',
            index: 1
        },
        {
            label: 'Shotgun',
            price: 50000,
            successChance: 75,
            image: 'shotgun.png',
            type: 'weapons',
            index: 2
        },
        {
            label: 'RPG',
            price: 150000,
            successChance: 86,
            image: 'rpg.png',
            type: 'weapons',
            index: 3
        }
    ],
    instruments: [
        {
            label: 'Piano',
            price: 16000,
            image: 'piano.png',
            type: 'instruments',
            index: 0
        },
        {
            label: 'Guitar',
            price: 5000,
            image: 'guitar.png',
            type: 'instruments',
            index: 1
        },
        {
            label: 'Violin',
            price: 5000,
            image: 'violin.png',
            type: 'instruments',
            index: 2
        },
        {
            label: 'Bass',
            price: 4800,
            image: 'bass.png',
            type: 'instruments',
            index: 3
        },
        {
            label: 'Flute',
            price: 5,
            image: 'flute.png',
            type: 'instruments',
            index: 4
        }
    ],
    electronics : [
        {
            label: 'Smartphone',
            price: 6000,
            image: 'smartphone.png',
            type: 'electronics',
            index: 0
        },
        {
            label: 'Laptop',
            price: 12000,
            image: 'laptop.png',
            type: 'electronics',
            index: 1
        }
    ],
    fastFood: [
        {
            label: 'Hamburguer',
            price: 35,
            image: 'hamburguer.png',
            type: 'fastFood',
            index: 0,
            statChanges: {
                health: -1,
                happiness: 5,
                fitness: -1
            }
        },
        {
            label: 'Pizza',
            price: 50,
            image: 'pizza.png',
            type: 'fastFood',
            index: 1,
            statChanges: {
                health: -1,
                happiness: 7,
                fitness: -1
            }
        },
        {
            label: 'Hot dogs',
            price: 30,
            image:'hot_dog.png',
            type: 'fastFood',
            index: 2,
            statChanges: {
                health: -1,
                happiness: 3,
                fitness: -1
            }
        }
    ],
    vegetables: [
        {
            label: 'Potato',
            price: 10,
            image: 'potato.png',
            type: 'vegetables',
            index: 0,
            statChanges: {
                health: 2
            }
        },
        {
            label: 'Carrot',
            price: 50,
            image: 'carrot.png',
            type: 'vegetables',
            index: 1,
            statChanges: {
                health: 5
            }
        },
        {
            label: 'Broccoli',
            price: 80,
            image: 'broccoli.png',
            type: 'vegetables',
            index: 2,
            statChanges: {
                health: 7
            }
        }
    ],
    desserts: [
        {
            label: 'Cotton candy',
            price: 15,
            image: 'cotton_candy.png',
            index: 0,
            type: 'desserts',
            statChanges: {
                happiness: 3,
                health: -1
            }
        },
        {
            label: 'Ice cream',
            price: 15,
            image: 'ice_cream.png',
            index: 1,
            type: 'desserts',
            statChanges: {
                happiness: 5
            }
        },
        {
            label: 'Chocolate bar',
            price: 15,
            image: 'chocolate.png',
            index: 2,
            type: 'desserts',
            statChanges: {
                happiness: 4,
                fitness: -1
            }
        }
    ],
    alcoholic: [
        {
            label: 'Wine',
            price: 60,
            image: 'wine.png',
            index: 0,
            type: 'alcoholic',
            statChanges: {
                happiness: 12,
                health: -8
            }
        },
        {
            label: 'Beer',
            price: 25,
            image: 'beer.png',
            index: 1,
            type: 'alcoholic',
            statChanges: {
                happiness: 10,
                health: -8
            }
        },
        {
            label: 'Vodka',
            price: 50,
            image: 'vodka.png',
            index: 2,
            type: 'alcoholic',
            statChanges: {
                happiness: 11,
                health: -7
            }
        }
    ],
    nonAlcoholic: [
        {
            label: 'Orange juice',
            price: 15,
            image: 'orange_juice.png',
            index: 0,
            type: 'nonAlcoholic',
            statChanges: {
                happiness: 4
            }
        },
        {
            label: 'Milk',
            price: 5,
            image: 'milk.png',
            index: 1,
            type: 'nonAlcoholic',
            statChanges: {
                happiness: 2
            }
        }
    ]
}

const assets = {
    houses: [
        {
            label: 'Modern House',
            age: Math.floor(Math.random() * 10),
            condition: Math.floor(Math.random() * 100),
            price: 510000
        }, 
        {
            label: 'House boat',
            age: Math.floor(Math.random() * 120),
            condition: Math.floor(Math.random() * 100),
            price: 60000
        },
        {
            label: 'Tiny apartment',
            age: Math.floor(Math.random() * 100),
            condition: Math.floor(Math.random() * 100),
            price: 75000
        },
        {
            label: 'Big Mansion',
            age: Math.floor(Math.random() * 100),
            condition: Math.floor(Math.random() * 100),
            price: 2000000
        }
    ],
    cars: [
        {
            label: 'Alpine A110',
            price: 107000,
        }, {
            label: 'Aiways U5',
            price: 42690
        }, {
            label: 'Bolt 550S',
            price: 124000
        }, {
            label: 'Onyx Zeal',
            price: 113000
        }, {
            label: 'FRX Catalyst',
            price: 58000
        }, {
            label: 'Shelly Behemot GT',
            price: 56000
        }, {
            label: 'EOS Nimbus',
            price: 54000
        }, {
            label: 'Ranger Expedition',
            price: 26000
        }, {
            label: 'Ranger Radiance',
            price: 35000
        }
    ]
}

const randomizeHouseStats = () => {
    for(let house of assets.houses){
        house.age = Math.floor(Math.floor(Math.random() * 120));
        house.condition = Math.floor(Math.floor(Math.random() * 100));
    }
    // for(let car of assets.cars){
    //     console.log(car)        
    // }
}
