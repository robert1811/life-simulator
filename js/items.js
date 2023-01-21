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
            price: 50,
            image: 'smartphone.png',
            type: 'electronics',
            index: 0
        },
        {
            label: 'Laptop',
            price: 65,
            image: 'laptop.png',
            type: 'electronics',
            index: 1
        }
    ],
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
