const weaponOptions = itemListifier(items, 'weapons', 'items');
const instrumentOptions = itemListifier(items, 'instruments', 'items');
const electronicOptions = itemListifier(items, 'electronics', 'items');
const housesOptions = itemListifier(assets, 'houses', 'assets');
const carsOptions = itemListifier(assets, 'cars', 'assets');


const menu = {
    activities() {
        if (player.prison.jailed) return;

        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Activities'
        menuBody.innerHTML = `
        <ul>
            <li onclick="menu.freetime()" class="option activity-option">
                <img src="images/options/free-time.png" alt="free-time" on> Free time
            </li>
            <li onclick="menu.cars()" class="option activity-option ${player.age < 18 ? 'disabled' : ''}">
                <img src="images/options/cars.png" alt="car"> Cars
            </li>
            <li onclick="menu.realEstate()" class="option activity-option ${player.age < 16 ? 'disabled' : ''}">
                <img src="images/options/real-estate.png" alt="house"> Real Estate
            </li>
            <li onclick="menu.shopping()" class="option activity-option ${player.age < 14 ? 'disabled' : ''}">
                <img src="images/options/shopping.png" alt="shopping"> Shopping
            </li>
            <li onclick="menu.emigrate()" class="option activity-option ${player.age < 18 ? 'disabled' : ''}">
                <img src="images/options/emigrate.png" alt="emigrate globe earth"> Emigrate
            </li>
            <li onclick="windows.driverLicense.display()" class="option activity-option ${player.age < 18 ? 'disabled' : ''}">
                <img src="images/options/drivelicense.png">Driver license
            </li>
            <li onclick="windows.love.findLove()" class="option activity-option ${player.age < 14 ? 'disabled' : ''}">
                <img src="images/options/love.png" style="width: 35px; height: 35px"> Love
            </li>
            <li onclick="windows.plasticSurgeries.display()" class="option activity-option ${player.age < 18 ? 'disabled' : ''}">
                <img src="images/options/plasticSurgery.png"> Plastic surgeries
            </li>
            <li onclick="windows.university.display()" class="option activity-option ${player.age < 18 ? 'disabled' : ''}">
                <img src="images/options/university.png
                ">University
            </li>
            <li class="option activity-option ${player.age < 14 ? 'disabled' : ''}" onclick="menu.criminal()">
                <img src="images/options/criminal.png"> Criminal
            </li>
            <li class="option activity-option ${player.age < 5 ? 'disabled' : ''}" onclick="windows.suicide.display()">
                Suicide
            </li>
        </ul>
        `
    },
    criminal() {
        if (player.age < 14) return

        menuTemplate.style.display = 'block'
        menuTitle.innerText = 'Criminal'
        menuBody.innerHTML = `
        <ul>
            <li class="option activity-option" onclick="windows.criminal.murder.display()">
                Murder
            </li>
            <li class="option activity-option" onclick="windows.criminal.stealCar.display()">
                Steal Car
            </li>
            <li class="option activity-option" onclick="alert('coming soon')">
                Robbery
            </li>
        </ul>
        `
    },
    freetime() {
        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Free time'
        menuBody.innerHTML = `
        <ul>
        <li class="option ${player.age < 8 ? 'disabled' : ''}" onclick="windows.freetime.handleSwitch('reading')">
        <div class="column">
            <h4>Read books</h4>
            <p class="yellow">+3 smartness</p>
        </div> 
        <div class="column switch-container">
            <div class="switch-background">
            <div class="switch" id="freetime-reading"
            style="float:${player.freetime.isReading ? 'right' : 'left'}"></div>
            </div>
            <p class="green">200$</p>
        </div>
        </li>

        <li class="option ${player.age < 7 ? 'disabled' : ''}" onclick="windows.freetime.handleSwitch('musicLessons')">
        <div class="column">
            <h4>Take music lessons</h4>
            <p class="yellow">+25 music</p>
        </div>
        <div class="column switch-container">
            <div class="switch-background">
                <div class="switch" id="freetime-musicLessons"
                style="float:${player.freetime.isTakingMusicLessons ? 'right' : 'left'}"></div>
            </div>
            <p class="green">2000$</p>
        </div>
        </li>

        <li class="option ${player.age < 2 ? 'disabled' : ''}" onclick="windows.freetime.handleSwitch('parties')">
        <div class="column">
            <h4>Attend parties</h4>
            <p class="yellow">+5 happiness</p>
        </div>
        <div class="column switch-container">
            <div class="switch-background">
                <div class="switch" id="freetime-parties"
                style="float:${player.freetime.isAttendingParties ? 'right' : 'left'}"></div>
            </div>
            <p class="green">500$</p>
        </div>
        </li>

        <li class="option ${player.age < 16 ? 'disabled' : ''}" onclick="windows.freetime.handleSwitch('gym')">
        <div class="column">
            <h4>Go to gym</h4>
            <p class="yellow">+3 fitness</p>
        </div>
        <div class="column switch-container">
            <div class="switch-background">
                <div class="switch" id="freetime-gym"
                style="float:${player.freetime.goesToGym ? 'right' : 'left'}"></div>
            </div>
            <p class="green">1800$</p>
        </div>
        </li>

        <li class="option ${player.age < 12 ? 'disabled' : ''}" onclick="windows.freetime.restaurant.display()">
            Go to a restaurant
        </li>

        <li class="option ${player.age < 12 ? 'disabled' : ''}" onclick="windows.freetime.cinema.display()">
            Watch a movie
        </li>

        <li class="option ${player.age < 18 ? 'disabled' : ''}" onclick="windows.freetime.goClubbing.display()">
            Go clubbing
        </li>
        </ul>
        `
    },
    cars() {
        if (player.age < 18) return;

        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Cars';
        menuBody.innerHTML = `
        <div class="assetsContainer">
            <div id="assets-header">
                <div id="ownedTab" class="tab" data-type="cars" onclick="menu.assetsHandler(this)">
                    Owned
                </div>
                <div id="marketTab" class="tab active" data-type="cars" onclick="menu.assetsHandler(this)">
                    Market
                </div>
            </div>
            <div id="cell-container">
                ${carsOptions}
            </div>
        </div>`
    },
    realEstate() {
        if (player.age < 16) return;

        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Real Estate';
        menuBody.innerHTML = `
        <div class="assetsContainer">
            <div id="assets-header">
                <div id="ownedTab" class="tab" data-type="houses" onclick="menu.assetsHandler(this)">
                    Owned
                </div>
                <div id="marketTab" class="tab active" data-type="houses" onclick="menu.assetsHandler(this)">
                    Market
                </div>
            </div>
            <div id="cell-container">
                ${housesOptions}
            </div>
        </div>`
    },
    assetsHandler(data) {
        const ids = {
            ownedTab: 'marketTab',
            marketTab: 'ownedTab'
        }
        const thisId = data.id;
        const cellContainer = document.getElementById('cell-container')
        const type = data.getAttribute('data-type')

        if (!data.classList.value.includes('active')) {
            document.getElementById(ids[thisId]).classList.remove('active');
            data.classList.add('active')
            if (thisId === 'marketTab') {
                if (type === 'houses')
                    cellContainer.innerHTML = housesOptions
                else
                    cellContainer.innerHTML = carsOptions
            }
            else cellContainer.innerHTML = ownedAssets(type)
        }
    },
    shopping() {
        if (player.age < 14) return

        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Shopping'
        menuBody.innerHTML = `
        <ul>
        <li onclick="menu.weapons()" class="option">Weapons</li>
        <li onclick="menu.instruments()" class="option">Instruments</li>
        <li onclick="menu.electronics()" class="option">Electronics</li>
        <li class="option" onclick="menu.foodAndDrinks.display()">Food and drinks</li>
        </ul>
        `
    },
    foodAndDrinks: {
        display() {
            menuTitle.innerText = 'Food and drinks'
            menuBody.innerHTML = `
            <ul>
                <li class="option" onclick="menu.foodAndDrinks.food.display()">Food</li>
                <li class="option" onclick="menu.foodAndDrinks.drinks.display()">Drinks</li>
            </ul>
            `
        },
        food: {
            display() {
                menuTitle.innerText = 'Food'
                menuBody.innerHTML = `
                <ul>
                    <li class="option" onclick="menu.foodAndDrinks.food.fastFood()">Fast food</li>
                    <li class="option" onclick="menu.foodAndDrinks.food.dessert()">Dessert</li>
                    <li class="option" onclick="menu.foodAndDrinks.food.vegetables()">Vegetables</li>
                </ul>
                `
            },
            fastFood() {
                menuTitle.innerText = 'Fast food'
                menuBody.innerHTML = `
                <ul>
                 ${itemListifier(items, 'fastFood', 'items')}
                </ul>
                `
            },
            dessert() {
                menuTitle.innerText = 'Fast food'
                menuBody.innerHTML = `
                <ul>
                ${itemListifier(items, 'desserts', 'items')}
                </ul>
                `
            },
            vegetables() {
                menuTitle.innerText = 'Fast food'
                menuBody.innerHTML = `
                <ul>
                ${itemListifier(items, 'vegetables', 'items')}
                </ul>
                `
            }

        },
        drinks: {
            display() {
                menuTitle.innerText = 'Drinks'
                menuBody.innerHTML = `
                <ul>
                    <li class="option" onclick="menu.foodAndDrinks.drinks.nonAlcoholic()">Non alcoholic</li>
                    <li class="option" onclick="menu.foodAndDrinks.drinks.alcoholic()">Alcoholic</li>
                </ul>
                `
            },
            alcoholic() {
                menuTitle.innerText = 'Alcoholic'
                menuBody.innerHTML = `
                <ul>
                ${itemListifier(items, 'alcoholic', 'items')}
                </ul>
                `
            },
            nonAlcoholic() {
                menuTitle.innerText = 'Non alcoholic'
                menuBody.innerHTML = `
                <ul>
                ${itemListifier(items, 'nonAlcoholic', 'items')}
                </ul>
                `
            }
        }
    },
    emigrate() {
        if (player.age < 18) return
        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Emigrate'
        menuBody.innerHTML = `
        <div id="select-container">
            <select id="country-chooser">
            ${countriesList()}
            </select>
        </div>
        <ul>
        <li data-triggers="windows" onclick="windows.emigrate()" class="option">Emigrate</li>
        <li data-triggers="windows" onclick="menu.activities()" class="option">Cancel</li>
        </ul>
        
        `
    },
    job() {
        if (player.prison.jailed) return;

        let string = '';
        let index = 0;
        for (let job of jobs) {
            if (job.label !== player.job.label)
                string = string.concat(`<div onclick="windows.job.jobWindow(this)" class="cell" data-index="${index}">${job.label}</div>`)
            index++;
        }

        menuTemplate.style.display = 'block'
        menuTitle.innerText = 'Jobs'
        menuBody.innerHTML = `
        <div id="job-wrapper">
            <div id="jobs-container">
            ${string}
            </div>
            <div id="current-job">
            ${player.job !== 'none' ? `
            <div id="current-job" onclick="windows.job.currentJob()" class="option">${player.job.label}</div>
            ` : ''}
            </div>
        </div>
        `
    },
    weapons() {
        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Weapons'
        menuBody.innerHTML = `
        <ul>
        ${weaponOptions}
        </ul>
        `
    },
    instruments() {
        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Instruments'
        menuBody.innerHTML = `
        <ul>
        ${instrumentOptions}
        </ul>
        `
    },
    electronics() {
        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Electronics'
        menuBody.innerHTML = `
        <ul>
        ${electronicOptions}
        </ul>
        `
    },
    profile() {
        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Profile'
        menuBody.innerHTML = `
        <ul>
            <li class="option" onclick="windows.playerData.identity()">
                <img src="images/options/identity.png" alt="identity"> Identity
            </li>
            <li class="option" onclick="windows.playerData.skills()">
                <img src="images/options/skills.png" id="skills-icon" alt="skills"> Skills
            </li>
            <li class="option" onclick="menu.inventory()">
                <img src="images/options/inventory.png" alt="inventory">Inventory
            </li>
            <li class="option" onclick="windows.playerData.education()">
                <img src="images/options/education.png" alt="education"> Education
            </li>
            <li class="option" onclick="windows.playerData.cv()">
                <img src="images/options/cv.png" alt="curriculum">Curriculum Vitae
            </li>
            <li class="option ${player.age < 15 ? 'disabled' : ''}" id="sexuality" onclick="windows.sexuality.display()">
                <img src="images/options/sexuality.png" alt="sexuality"> Sexuality
            </li>
            <li class="option" onclick="alert('not implemented yet')">
                <img src="images/options/health.png" alt="health"> Health
            </li>
            <li class="option" onclick="windows.playerData.criminalRecord()">
                <img src="images/options/criminal-record.png" alt="criminal-record"> Criminal record
            </li>
        </ul>
        `
    },
    relationships() {
        menuTemplate.style.display = 'block'
        menuTitle.innerText = 'Relationships'
        menuBody.innerHTML = `
            ${relationShipListifier('parents')}
            ${relationShipListifier('siblings')}
            ${relationShipListifier('friends')}
            ${relationShipListifier('partner')}
            ${player.relationships.exPartners != null ? relationShipListifier('exPartners') : ''}
            ${relationShipListifier('offspring')}
        `
        windows.handleRelationBars()
    },
    inventory() {
        menuTitle.innerText = 'Inventory'

        let inventoryArr = [];
        for (let object of Object.entries(player.inventory)) {
            if (object[1].length !== 0 && object[0] !== 'cars' && object[0] !== 'houses')
                inventoryArr.push(...object[1])
        }
        let string = '';
        if (inventoryArr.length !== 0) for (let item of inventoryArr) {
            string = string.concat(`
            <li class="item-container" onclick="windows.items.useItem(this)" data-index="${item.inventoryIndex}"
            data-type="${item.type}">
                <img class="item-preview" src="images/shop/${item.image}">    
                <figcaption>${item.label}</figcaption>
            </li>
            `)
        }

        if (string !== '')
            menuBody.innerHTML = `<ul id="inventory-container">${string}</ul>`;
        else menuBody.innerHTML = `
            <div id="no-items">
                <p>No items owned yet</p>
            </div>
            `

        menuTemplate.style.display = 'block';
    },
}







const windows = {
    suicide: {
        display() {
            if (player.age < 5) return

            showEvent({
                title: 'Suicide',
                body: `
                <p>Are you sure you want to do this</p>
                <div class="option" onclick="windows.suicide.confirmation()">Yes</div>
                <div class="option" onclick="closeEvent()">No</div>    
                `
            })
        },
        confirmation() {
            closeEvent()
            death(player, 'commited suicide')
            menuTemplate.style.display = 'none'
        }
    },
    criminal: {
        stealCar: {
            display() {
                const cars = assets.cars
                const random = Math.floor(Math.random() * cars.length)
                const car = cars[random]

                showEvent({
                    title: 'Steal car',
                    body: `
                    <p>You found a ${car.label}, would you steal it?</p>
                    <div class="option" onclick="windows.criminal.stealCar.steal('${car.label}')">Yes</div>
                    <div class="option" onclick="closeEvent()">No</div>                    
                    `
                })
            },
            steal(carName) {
                let car
                const cars = assets.cars
                for (let i = 0; i < assets.cars.length; i++) {
                    if (carName === cars[i].label) {
                        car = structuredClone(cars[i])
                        car.stolen = true
                        break
                    }
                }
                const random = Math.floor(Math.random() * 100)
                menuTemplate.style.display = 'none'
                if (random >= 30) {
                    car.inventoryIndex = player.inventory.cars.length
                    player.inventory.cars.push(car)
                    eventBody.innerHTML = `
                    <p>You stole this car succesfully</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                    textContainer.innerHTML += `<p>I stole a ${carName.toLowerCase()}</p>`
                } else {
                    eventBody.innerHTML = `
                    <p>You got arrested</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                    arrestByStealingCar(player)
                    textContainer.innerHTML += `<p>I tried to steal a ${carName.toLowerCase()}</p>`
                    textContainer.innerHTML += `<p>I got arrested for ${player.prison.sentenceTime} years</p>`
                }
            },
        },
        murder: {
            display() {
                const events = [{
                    message: 'A beggar asked for your charity',
                    target: 'beggar',
                    gender: 'male'
                }, {
                    message: 'A prostitute offers you her services',
                    target: 'prostitute',
                    gender: 'female'
                }]
                const random = Math.floor(Math.random() * events.length)
                const pronoun = events[random].gender === "male" ? 'him' : 'her'
                const victim = events[random].target

                showEvent({
                    title: 'Murder',
                    body: `
                    <p>${events[random].message}</p>
                    <h3 style="margin-top: 1px">Murder method:</h3>
                    <select id="method-selector">
                        <option value="strangulation">Strangle ${pronoun}</option>
                        <option value="stab">Stab ${pronoun}</option>
                    </select>    
                    `
                })

                const methodSelector = document.getElementById('method-selector')
                let method = methodSelector.value
                methodSelector.onselect = (e => {
                    method = e.target.value
                })
                eventBody.innerHTML += `
                <div class="option" onclick="windows.criminal.murder.kill('${victim}')">kill</div>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            },
            kill(victim) {
                const random = Math.floor(Math.random() * 100)
                menuTemplate.style.display = 'none'

                if (random > 30) {
                    player.criminalRecord.murder++
                    textContainer.innerHTML += `
                    <p>I killed a ${victim}</p>
                    `
                    const probabilityOfArrest = Math.floor(Math.random() * 100)
                    if (probabilityOfArrest > 60) {
                        eventBody.innerHTML = `
                        <p>You got caught by the police, you are arrested</p>
                        <div class="option" onclick="closeEvent()">Close</div>
                        `
                        arrestByMurder(player)
                        textContainer.innerHTML += `
                        <p>The police caught me</p>
                        <p>I have been arrested for ${player.prison.sentenceTime} years</p>
                        `
                    } else {
                        eventBody.innerHTML = `
                        <p>You killed the ${victim} succesfully</p>
                        <div class="option" onclick="closeEvent()">Close</div>
                        `
                    }

                } else {
                    player.criminalRecord.murderAttempts++
                    arrestByMurder(player)
                    eventBody.innerHTML = `
                    <p>Your murder attempt failed, you got denounced</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                    textContainer.innerHTML += `
                    <p>My murder attempt failed</p>
                    <p>I got denounced</p>
                    <p>I have been arrested for ${player.prison.sentenceTime} years</p>
                    `
                }
            },
        },
        robbery() {
            showEvent({
                title: 'Robbery',
                body: `
                <div class="option" onclick="closeEvent()">Close</div>    
                `
            })
        },
    },
    plasticSurgeries: {
        display() {
            if (player.age < 17) return

            showEvent({
                title: 'Plastic surgeries',
                body: `
                <p>Fix your insecurities today</p>
                <div class="option" onclick="windows.plasticSurgeries.noseJob(400)">
                    Nose job
                </div>
                <div class="option" onclick="windows.plasticSurgeries.faceLift(1000)">
                    Face lift
                </div>
                <div class="option" onclick="windows.plasticSurgeries.lipAugmentation(600)">
                    Lip Augmentation
                </div>
                ${player.gender === 'male' ? `` : `
                <div class="option" onclick="windows.plasticSurgeries.breastAugmentation(800)">
                    Breast augmentation
                </div>
                `}
                <div class="option" onclick="windows.plasticSurgeries.eyelidLift(250)">
                    Eyelid Lift
                </div>
                <div class="option" onclick="windows.plasticSurgeries.hairTransplantation(900)">
                    Hair transplantation
                </div>
                <div class="option" onclick="closeEvent()">Do nothing</div>    
                `
            })
        },
        beautyBuff(price, operation) {
            if (player.money.total < price)
                return eventBody.innerHTML = `
                <p>You cant afford this</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            const buff = 12 + Math.floor(Math.random() * 12)
            player.stats.appearance += buff
            statsLimit(player)
            eventBody.innerHTML = `
            <p>+${buff} appearance</p>
            <div class="option" onclick="closeEvent()">Close</div>
            `
            menuTemplate.style.display = 'none'
            textContainer.innerHTML += `
            <p>I paid for a ${operation}</p>
            `
            handleStatBars(player, true)
        },
        options(price, operation) {
            return `
            <p><b>Price: </b>${moneyFormat(price)} $</p>
            <div class="option" onclick="windows.plasticSurgeries.beautyBuff(${price}, '${operation}')">Pay</div>
            <div class="option" onclick="closeEvent()">Close</div>
            `
        },
        noseJob(price) {
            const options = this.options(price, 'nose job')
            eventTitle.innerText = 'Nose job'
            eventBody.innerHTML = options
        },
        faceLift(price) {
            const options = this.options(price, 'face lift')
            eventTitle.innerText = 'Face lift'
            eventBody.innerHTML = options
        },
        lipAugmentation(price) {
            const options = this.options(price, 'lip augmentation')
            eventTitle.innerText = 'Lip augmentation'
            eventBody.innerHTML = options
        },
        breastAugmentation(price) {
            const options = this.options(price, 'breast augmentation')
            eventTitle.innerText = 'Breast augmentation'
            eventBody.innerHTML = options
        },
        eyelidLift(price) {
            const options = this.options(price, 'eyelid lift')
            eventTitle.innerText = 'Eyelid lift'
            eventBody.innerHTML = options
        },
        hairTransplantation(price) {
            const options = this.options(price, 'hair transplantation')
            eventTitle.innerText = 'Hair transplantation'
            eventBody.innerHTML = options
        }
    },
    playerData: {
        moneyDashboard() {
            showEvent({
                title: 'Money',
                body: `
                <p><b>Total money: </b>${moneyFormat(player.money.total)} $</p>
                <p><b>Income: </b>${moneyFormat(player.money.income)} $</p>
                <p><b>Expenses: </b>${moneyFormat(player.money.expenses)} $</p>
                <p><b>Balance: </b>${moneyFormat(player.money.income - player.money.expenses)} $</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            })
        },
        identity() {
            showEvent({
                title: 'Identity',
                body: `
                <p><b>Full name:</b> ${player.fullName}</p>
                <p><b>Gender:</b> ${player.gender}</p>
                <p><b>Age:</b> ${player.age}</p>
                <p><b>Nationality:</b> ${player.nationality}</p>
                <p><b>Location:</b> ${player.location}</p>
                <p><b>Sexuality:</b> ${player.sexuality}</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            })
        },
        education() {
            showEvent({
                title: 'Education',
                body: `
                <h4>Education:</h4>
                <p>${careerPreviewer().education}</p>
                <h4>Degrees:</h4>
                <ul>
                ${careerPreviewer().degrees}
                </ul>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            })
        },
        skills() {
            showEvent({
                title: 'Skills',
                body: `
                ${skillListifier(player)}
                <div class="option" onclick="closeEvent()">Close</div>
                `
            })
        }, cv() {
            showEvent({
                title: 'Curriculum Vitae',
                body: `
                <h3>Jobs</h3>
                ${cvListifier(player)}
                <div class="option" onclick="closeEvent()">Close</div>
                `
            })
        },
        criminalRecord() {
            const { yearsInPrison, murderAttempts, murder, prisonEscapes } = player.criminalRecord

            showEvent({
                title: 'Criminal Record',
                body: `
                <p><b>Years arrested: </b>${yearsInPrison === 0 ? 'none' : yearsInPrison + ' years'}</p>
                <p><b>Murder attempts: </b>${murderAttempts === 0 ? 'none' : murderAttempts}</p>
                <p><b>Murder: </b>${murder === 0 ? 'none' : murder}</p>
                <p><b>Prison escapes: </b>${prisonEscapes === 0 ? 'none' : prisonEscapes}</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            })
        },
    },
    items: {
        buyWindow(e) {
            // objname could be items of assets (car or real estate)
            const objName = e.getAttribute('data-objname');
            const property = e.getAttribute('data-property');
            const index = e.getAttribute('data-index');

            if (property === 'cars') {
                return windows.driverLicense.display()
            }

            let obj;

            if (objName === 'items') obj = items[property][index]
            else obj = assets[property][index];

            showEvent({
                title: `Buy ${obj.label}`,
                body: `
                <h3>Price: ${moneyFormat(obj.price)} $</h3>
                <div class="option" onclick="windows.items.buy('${objName}', '${property}', '${index}')">Buy it</div>
                <div class="option" onclick="closeEvent()">Cancel</div>
                `
            })
        },
        sell(data) {
            const index = data.getAttribute('data-item').split('-')[1]
            const type = data.getAttribute('data-item').split('-')[0]
            const item = player.inventory[type][index];
            const price = item.price;

            eventBody.innerHTML = `
            <h3>Are you sure you want to sell this?</h3>
            <p><b>Price:</b> ${moneyFormat(price)} $</p>
            <div class="option" onclick="windows.items.confirmSell(this)" data-type="${type}" data-index="${index}" data-price="${price}">Sell</div>
            <div class="option" onclick="closeEvent()">No</div>
            `

        }, confirmSell(data) {
            const price = data.getAttribute('data-price');
            let index = data.getAttribute('data-index');
            const type = data.getAttribute('data-type')
            closeEvent()
            menuTemplate.style.display = 'none'
            textContainer.innerHTML += `<p>I sold an item for ${moneyFormat(price)}$</p>`

            player.inventory[type].splice(parseInt(index), 1)

            let i = 0
            for (let item of player.inventory[type]) {
                item.inventoryIndex = i;
                i++
            }

            player.money.total += parseInt(price)
            moneyViewer()
        },
        useItem(data) {
            const type = data.getAttribute('data-type')
            const index = data.getAttribute('data-index')
            const object = player.inventory[type][index]

            if (type === 'weapons') {
                showEvent({
                    title: object.label,
                    body: `
                    <ul>
                    <p>${object.successChance}% efficiency</p>
                    <li class="option" data-weapon="${index}" onclick="windows.items.weapon.selectVictim(this)">Crimes</li>
                    <li class="option" data-item="${type}-${index}" onclick="windows.items.sell(this)">Sell</li>
                    <li class="option" onclick="closeEvent()">Close</li>
                    </ul>
                    `
                })
            } else if (type === 'instruments') {
                showEvent({
                    title: object.label,
                    body: `
                    ${player.actions.music < 3 ? `
                        <div class="option" data-item="${index}" onclick="windows.items.playInstrument(this)">Play</div>
                    ` : ''}
                    <div class="option" data-item="${type}-${index}" onclick="windows.items.sell(this)">Sell</div>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                })
            } else if (['fastFood', 'desserts', 'vegetables'].includes(type)) {
                showEvent({
                    title: object.label,
                    body: `
                    <div class="option" data-item="${type}-${index}" onclick="windows.items.consume(this, 'food')">Eat</div>
                    <div class="option" data-item="${type}-${index}" onclick="windows.items.sell(this)">Sell</div>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                })
            } else if (['alcoholic', 'nonAlcoholic'].includes(type)) {
                showEvent({
                    title: object.label,
                    body: `
                    <div class="option" data-item="${type}-${index}" onclick="windows.items.consume(this, 'drink')">Drink</div>
                    <div class="option" data-item="${type}-${index}" onclick="windows.items.sell(this)">Sell</div>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                })
            }

            if (object.label === 'Laptop' || object.label === 'PC') {
                showEvent({
                    title: object.label,
                    body: `
                    ${player.actions.programming < 3 ? `
                    <div class="option" data-item="${index}" onclick="windows.items.computer.practiceProgramming(this)">Practice programming</div>
                    ` : ''}
                    ${player.actions.writing < 3 ? `
                        <div class="option" data-item="${index}" onclick="windows.items.computer.practiceWriting(this)">Practice writing</div>
                    ` : ''}
                    <div class="option" data-item="${index}" onclick="windows.items.computer.playVideogames(this)">Play videogames</div>
                    <div class="option" data-item="${type}-${index}" onclick="windows.items.sell(this)">Sell</div>
                    <div class="option" data-item="${index}" onclick="closeEvent()">Do nothing</div>
                    `
                })
            }
            else if (object.label === 'Smartphone') {
                showEvent({
                    title: object.label,
                    body: `
                    <div class="option" onclick="windows.socialMedia.display()">Social Media</div>
                    <div class="option" onclick="windows.items.smartphone.watchVideo()">Watch video</div>
                    <div class="option" data-item="${type}-${index}" onclick="windows.items.sell(this)">Sell</div>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                })
            }
        },
        buy(objName, property, index) {
            let obj;
            if (objName === 'items') obj = items[property][index]
            else obj = assets[property][index];

            if (property === 'houses') obj.location = player.location
            let newObj = structuredClone(obj);

            if (player.money.total >= newObj.price) {
                player.money.total -= newObj.price;
                try {
                    newObj.inventoryIndex = player.inventory[property].length;
                } catch (err) {
                    newObj.inventoryIndex = 0
                    player.inventory[property] = []
                }

                player.inventory[property].push(newObj);
                textContainer.innerHTML += `<p>I bought a ${newObj.label}</p>`;
                closeEvent()
                document.getElementById(`${property}-${index}`).remove()
                moneyViewer()

            } else {
                eventTitle.innerText = 'Cant afford this'
                eventBody.innerHTML = `<div class="option" onclick="closeEvent()">...</div>`;
            }
        },
        consume(data, kind) {
            const type = data.getAttribute('data-item').split('-')[0]
            const index = data.getAttribute('data-item').split('-')[1]
            const item = player.inventory[type][index]
            const statChanges = item.statChanges
            for (let stat of Object.entries(statChanges)) {
                player.stats[stat[0]] += stat[1]
                statsLimit(player)
            }
            handleStatBars(player, true)
            eventBody.innerHTML = `
            <p>You ${kind === 'food' ? 'ate' : 'drank'} a ${item.label.toLowerCase()}</p>
            <div class="option" onclick="closeEvent()">Close</div>
            `
            player.inventory[type].splice(index, 1)
            menu.inventory()
        },
        playInstrument(data) {
            player.actions.music++
            player.skills.music.xp += 25;

            eventBody.innerHTML = `
            <p>+25 music skill earned!</p>
            <div class="option" onclick="closeEvent()">Close</div>
            `
            skillLeveler()
        },
        weapon: {
            selectVictim(data) {
                let weaponIndex = data.getAttribute('data-weapon')

                let options = ''
                //one because player is 0, this may cause problems later if I decide to implement generations
                let index = 1;

                for (let person of characters) {
                    if (person.fullName !== player.fullName && person.alive) {
                        person.index = index
                        options = options.concat(`
                            <div onclick="windows.items.weapon.kill(this)" data-weapon="${weaponIndex}" class="option" data-person="${person.index}">${person.fullName}</div>
                        `)
                        index++;
                    }
                }

                options = options.concat(`<div onclick="windows.items.weapon.kill(this)" data-weapon="${weaponIndex}" class="option" data-person="beggar">Random beggar</div>`)

                eventBody.innerHTML = `
                    ${options}
                    <div class="option" onclick="closeEvent()">Not a good idea</div>
                `
            },
            kill(data) {
                const victimIndex = data.getAttribute('data-person')
                const victim = characters[victimIndex]
                const weaponIndex = data.getAttribute('data-weapon')
                const weapon = player.inventory.weapons[weaponIndex]
                const efficiency = weapon.successChance;
                const randomNum = Math.floor(Math.random() * 100);

                if (randomNum < efficiency) {
                    let name;
                    if (victim != undefined) {
                        victim.alive = false
                        name = victim.fullName
                        player.criminalRecord.murder++;
                    } else name = 'someone'
                    eventBody.innerHTML = `
                    <h3>Success</h3>
                    <p>You have commited murder succesfully</p>
                    <div class="option" onclick="closeEvent()">Okay</div>
                    `
                    textContainer.innerHTML += `
                    <p>I killed ${name}</p>
                    `
                } else {
                    eventBody.innerHTML = `
                    <h3>Oh no!</h3>
                    <p>Your assasination attemp failed! you got arrested</p>
                    <div class="option" onclick="closeEvent()">...</div>
                    `
                    menuTemplate.style.display = 'none';

                    player.criminalRecord.murderAttempts++;
                    arrestByMurder(player)

                    textContainer.innerHTML += `
                    <p>My assasination attempt failed, I got denounced</p>
                    <p>I have been arrested for ${player.prison.sentenceTime} years
                    </p>
                    `

                }
            },
        },
        computer: {
            practiceWriting() {
                player.actions.writing++
                player.skills.writing.xp += 25;
                eventBody.innerHTML = `
                <p>+25 writing skill earned!</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
                textContainer.innerHTML += `
                <p>I practiced writing</p>
                `
                skillLeveler()
            },
            practiceProgramming() {
                player.actions.programming++
                player.skills.programming.xp += 25;
                eventBody.innerHTML = `
                <p>+25 programming skill earned!</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
                textContainer.innerHTML += `
                <p>I practiced programming</p>
                `
                skillLeveler()
            },
            playVideogames() {
                const videogames = ['Among sus', 'Minekampf', 'Call of Honor', 'The Binding of Ray', 'Hollow Warrior', 'Raymonds Mod', 'Hearts of Steel IV', 'Asia Universallis IV', 'Fall-in: New Ohio']
                player.stats.happiness += 5;

                const gamePlayed = videogames[Math.floor(Math.random() * videogames.length)]

                eventBody.innerHTML = `
                <p>You played ${gamePlayed}</p>
                <p>+5 happiness</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
                textContainer.innerHTML += `<p>I played ${gamePlayed}</p>`
            }
        },
        smartphone: {
            watchVideo() {
                const location = countryQuery(player.location)
                if (location.laws.banned_youtube) {
                    return eventBody.innerHTML = `
                    <p>Youtube is not available in your country</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                }


                const randomIndex = Math.floor(Math.random() * popularYoutubers.length)
                const randomUser = popularYoutubers[randomIndex].user
                closeEvent()
                menuTemplate.style.display = 'none'
                textContainer.innerHTML += `
                <p>I watched a video of ${randomUser}</p>
                `
                player.stats.happiness += Math.round(Math.random() * 10)
                handleStatBars(player, true)
            },
        },
        ownedAssetWindow(data) {
            const type = data.getAttribute('data-type')
            const index = data.getAttribute('data-index');
            const asset = player.inventory[type][index]
            const canThrowParty = asset.location === player.location ? true : false

            modalBackground.style.display = 'flex'
            eventTitle.innerText = asset.label
            if (type === 'houses')
                eventBody.innerHTML = `
                <p><b>Age: </b>${asset.age}</p>
                <p><b>Value: </b>${moneyFormat(asset.price)} $</p>
                <p><b>Condition: </b>${asset.condition}</p>
                <p><b>Location: </b>${asset.location}</p>
                <br>

                ${canThrowParty ? `
                    <div class="option" onclick="windows.throwParty()">Throw a party</div>
                ` : ''}
                <div class="option" data-item="${type}-${index}" onclick="windows.items.sell(this)">Sell</div>
                <div class="option" onclick="closeEvent()">Close</div>
            `
            else eventBody.innerHTML = `
                <p><b>Value: </b>${moneyFormat(asset.price)}</p>
                ${player.driverLicense ? `
                <div class="option" onclick="windows.drive()">Drive</div>
                ` : ''}
                <div class="option" data-item="${type}-${index}" onclick="windows.items.sell(this)">Sell</div>
                <div class="option" onclick="closeEvent()">Close</div>
            `
        },
    },
    socialMedia: {
        createAccount(socialMedia) {
            const username = document.getElementById('username-field').value.trim()
            player.socialMedia[socialMedia].created = true;
            player.socialMedia[socialMedia].username = username;
            player.socialMedia[socialMedia].created_at = year

            textContainer.innerHTML += `
            <p>I created a ${socialMedia} account called ${username}</p>
            `
            closeEvent()
            menuTemplate.style.display = 'none'
        },
        display() {
            const laws = countryQuery(player.location).laws

            eventTitle.innerText = 'Social media'
            eventBody.innerHTML = `
            <div class="option ${laws.banned_youtube ? 'disabled' : ''}" onclick="windows.socialMedia.youtube.display()"><i class="fa-brands fa-youtube" style="margin-right: 8px"></i> Youtube</div>
            <div class="option ${laws.banned_instagram ? 'disabled' : ''}" onclick="windows.socialMedia.instagram.display()"><i class="fa-brands fa-instagram" style="margin-right: 8px"></i> Instagram</div>
            <div class="option" onclick="closeEvent()">Close</div>
            `
        },
        youtube: {
            display() {
                if (!player.socialMedia.youtube.created) {
                    return eventBody.innerHTML = `
                    <h3>You dont have an account yet</h3>
                    <input type="text" placeholder="username" id="username-field">
                    <div class="option" onclick="windows.socialMedia.createAccount('youtube')">Create account</div>
                    <div class="option" onclick="windows.socialMedia.display()">Close</div>
                    `
                }
                const stats = player.socialMedia.youtube
                eventBody.innerHTML = `
                <p><b>Username: </b>${stats.username}</p>
                <p><b>Subscribers: </b>${stats.subscribers}</p>
                <p><b>Creation year: </b>${stats.created_at}</p>
                <div class="option" onclick="windows.socialMedia.youtube.recordVideo.display()">Record a video</div>
                <div class="option" onclick="windows.socialMedia.youtube.browseVideos()">Browse my videos</div>
                <div class="option" onclick="alert('Not implemented yet')">Ranking</div>
                <div class="option" onclick="windows.socialMedia.display()">Close</div>
                `
            },
            recordVideo: {
                display() {
                    modalBackground.style.display = 'flex'
                    eventBody.innerHTML = `
                    <p>Thematic: </p>
                    <select id="thematic-selector">
                        <option value="gameplay">Gameplay</option>
                        <option value="review">Review</option>
                        <option value="vlog">Vlog</option>
                        <option value="documental">Documental</option>
                    </select>
                    <p style="margin-top: 6px">Title:</p>
                    <input type="text" placeholder="Title" id="title-field">
                    <div class="option" onclick="windows.socialMedia.youtube.recordVideo.record()">Select</div>
                    <div class="option" onclick="windows.socialMedia.youtube.display()()">Cancel</div>
                    `

                },
                record() {
                    const title = document.getElementById('title-field').value.trim()
                    const thematic = document.getElementById('thematic-selector').value

                    if (title === '') return windows.socialMedia.youtube.recordVideo.display();
                    const subscribers = player.socialMedia.youtube.subscribers
                    const views = Math.floor(Math.random() * (subscribers / 5) + 5 + subscribers)
                    const likes = Math.floor(Math.random() * (views / 5))
                    const newSubs = Math.floor(views / 4)

                    player.socialMedia.youtube.subscribers += newSubs
                    player.socialMedia.youtube.videos.push({
                        title,
                        thematic,
                        views,
                        likes,
                        id: player.socialMedia.youtube.videos.length
                    })
                    eventBody.innerHTML = `
                    <h3>Video uploaded</h3>
                    <p><b>Views: </b>${views}</p>
                    <p><b>Likes: </b>${likes}</p>
                    <p><b>New subscribers: </b>${newSubs}</p>
                    <div class="option" onclick="windows.socialMedia.youtube.display()">Close</div>
                    `

                }
            },
            browseVideos() {
                const videos = player.socialMedia.youtube.videos;
                let list = ''
                if (videos.length !== 0)
                    for (let video of videos) {
                        list = list.concat(`
                        <div style="margin-top: 5px">
                            <h4>${video.title}</h4>
                            <p><b>ID: </b>${video.id}</p>
                            <p><b>Thematic: </b>${video.thematic}</p>
                            <p><b>Views: </b>${video.views}</p>
                            <p><b>Likes: </b>${video.likes}</p>
                        </div>
                        `)
                    }
                else list = '<h3>No videos yet</h3>'

                eventBody.innerHTML = `
                    ${list}
                    <div class="option" onclick="windows.socialMedia.youtube.display()">Close</div>
                `
            },
            ranking() {

            },

        },
        instagram: {
            display() {
                const isBanned = countryQuery(player.location).laws.banned_instagram

                if (isBanned)
                    return eventBody.innerHTML = `
                    <p>Youtube is banned in your country</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                if (!player.socialMedia.instagram.created) {
                    return eventBody.innerHTML = `
                        <h3>You dont have an account yet</h3>
                        <input type="text" placeholder="username" id="username-field">
                        <div class="option" onclick="windows.socialMedia.createAccount('instagram')">Create account</div>
                        <div class="option" onclick="windows.socialMedia.display()">Close</div>
                    `
                }

                const stats = player.socialMedia.instagram
                eventBody.innerHTML = `
                <p><b>Username: </b>${stats.username}</p>
                <p><b>Followers: </b>${stats.followers}</p>
                <p><b>Creation year: </b>${stats.created_at}</p>
                <div class="option" onclick="windows.socialMedia.instagram.photo.display()">Post a photo</div>
                <div class="option" onclick="windows.socialMedia.instagram.browsePosts()">Browse posts</div>
                <div class="option" onclick="alert('Soon')">Ranking</div>
                <div class="option" onclick="windows.socialMedia.display()">Close</div>
                `
            },
            photo: {
                display() {
                    eventBody.innerHTML = `
                    <p>Title</p>
                    <input type="text" placeholder="description" id="description-field" style="margin-bottom: 5px">
                    <div class="option" onclick="windows.socialMedia.instagram.photo.upload()">Upload</div>
                    <div class="option" onclick="windows.socialMedia.display()">Close</div>
                    `
                },
                upload() {
                    const description = document.getElementById('description-field').value.trim()

                    const followers = player.socialMedia.instagram.followers
                    const newFollowers = Math.round(Math.random() * 3 / followers != 0 ? followers : 2) + player.stats.appearance
                    const likes = Math.round(Math.random() * (followers * (player.stats.appearance / 100)))

                    player.socialMedia.instagram.posts.push({
                        description,
                        likes,
                        id: player.socialMedia.instagram.posts.length
                    })
                    player.socialMedia.instagram.followers += newFollowers
                    windows.socialMedia.instagram.display()
                }
            },
            browsePosts() {
                let str = ''
                const posts = player.socialMedia.instagram.posts
                posts.map(post => str = str.concat(`
                <p>${post.description}</p>
                <p><b>ID: ${post.id}</b></p>
                <p style="margin-bottom: 5px">${post.likes} likes</p>
                `))
                if (str === '') str = '<h3>No posts yet</h3>'

                eventBody.innerHTML = `
                ${str}
                <div class="option" onclick="windows.socialMedia.instagram.display()">Close</div>
                `
            }
        }
    },
    relations: {
        display(target) {
            let personID = target.getAttribute('data-id').split('-')[1]
            let personCategory = target.getAttribute('data-id').split('-')[0]
            const person = player.relationships[personCategory][parseInt(personID)];
            const characterIndex = person.characterIndex
            const possibleRelationships = {
                offspring: person.gender === 'male' ? 'son' : 'daughter',
                parents: person.gender === 'male' ? 'father' : 'mother',
                partner: person.gender === 'male' ? 'boyfriend' : 'girlfriend',
                siblings: person.gender === 'male' ? 'brother' : 'sister',
                friends: 'friend',
                exPartner: `ex-${person.gender === 'male' ? 'boyfried' : 'girlfriend'}`
            }
            const relationship = possibleRelationships[personCategory]

            modalBackground.style.display = 'flex';

            showEvent({
                title: `${person.fullName} ${!person.alive ? '(dead)' : ''}`,
                body: `
                <p><b>Relationship:</b> ${relationship}</p>
                <p><b>Age:</b> ${person.age}</p>
                ${person.age >= 16 ? `
                <p><b>Occupation:</b> ${person.job !== 'none' ? person.job.label : 'unemployed'}</p>
                ${person.job !== 'none' ? `<p><b>Salary: </b>${moneyFormat(person.job.salary)} $</p>` : ''}</p>
                ` : ''}
                <p><b>Location:</b> ${person.location}</p>
                <p><b>Nationality:</b> ${person.nationality}</p>
                <ul>
                <li>Opinion: <div class="window-bar"><div class="bar-progress" id="window-relationWithPlayer-bar"></div></div> </li>
                ${personCategory === 'partner' ? `
                <li>Love: 
                    <div class="window-bar"><div style="background-color:#bb7a85;width:${person.stats.loveToPartner}%;height: 100%""></div></div> 
                </li>` : ''}
                <li>Health: <div class="window-bar"><div class="bar-progress" id="window-health-bar"></div></div> </li>
                <li>Happiness: <div class="window-bar"><div class="bar-progress" id="window-happiness-bar"></div></div> </li>
                <li>Smartness: <div class="window-bar"><div class="bar-progress" id="window-smartness-bar"></div></div> </li>
                <li>Appearance: <div class="window-bar"><div class="bar-progress" id="window-appearance-bar"></div></div> </li>
                <li>Fitness: <div class="window-bar"><div class="bar-progress" id="window-fitness-bar"></div></div> </li>
                </ul>
        
                ${!player.prison.jailed && person.alive ? `
                <div class="option" onclick="windows.relations.friendlyOptions(this)" data-index="${characterIndex}">Friendly</div>

                <div class="option" onclick="windows.relations.meanOptions(this)" data-index="${characterIndex}">Mean</div>

                ${personCategory === 'partner' ? `
                <div class="option" onclick="windows.relations.romanticOptions(this)" data-index="${characterIndex}">Romantic</div>
                ` : ''}
                ` : ''}

                <div class="option" onclick="closeEvent()">Close</div>
                `
            })
            handleStatBars(person, false)
        },
        friendlyOptions(data) {
            const index = data.getAttribute('data-index');

            eventBody.innerHTML = `
            <div class="option ${player.actions.friendlyActions < 3 ? '' : 'disabled'}" onclick="windows.relations.friendly.spendTime(this)" data-index="${index}">Spend time together</div>
            <div class="option" onclick="closeEvent()">Close</div>
            `
        },
        meanOptions(data) {
            const index = data.getAttribute('data-index');
            const person = characters[index]

            eventBody.innerHTML = `
            <div class="option ${player.actions.meanActions < 3 ? '' : 'disabled'}" onclick="windows.relations.mean.insult(this)" data-index="${index}">Insult</div>
            <div class="option ${player.actions.meanActions < 3 ? '' : 'disabled'}" onclick="windows.relations.mean.yell(this)" data-index="${index}">Yell</div>
            ${player.age > 14 ? `<div class="option" onclick="windows.mean.relations.assault(this)" data-index="${index}">Assault</div>`
                    : ''}
            ${person.relationships.partner[0].characterIndex === player.characterIndex ? `
            <div class="option ${player.actions.meanActions < 3 ? '' : 'disabled'}" onclick="windows.relations.romance.break()">${person.married ? 'Divorce' : 'Break up'}</div>
            ` : ''}
            <div class="option" onclick="closeEvent()">Close</div>
            `
        },
        romanticOptions(data) {
            const partner = player.relationships.partner[0]
            const gayWeddings = countryQuery(player.location).laws.gay_weddings;
            let canMarry = true
            if (partner.gender == player.gender && !gayWeddings)
                canMarry = false

            eventBody.innerHTML = `
            ${canMarry ? `
                <div class="option ${player.actions.romanticActions < 3 ? '' : 'disabled'}" onclick="windows.relations.romance.proposeMarriage()">Propose marriage</div>
            ` : ''}
            <div class="option ${player.actions.romanticActions < 3 ? '' : 'disabled'}" onclick="windows.relations.romance.flirt()">Flirt</div>
            <div class="option ${player.actions.romanticActions < 3 ? '' : 'disabled'}" onclick="windows.relations.romance.cuddle()">Cuddle</div>
            <div class="option" onclick="windows.relations.romance.sex(true)">Sex with protection</div>
            <div class="option" onclick="windows.relations.romance.sex(false)">Sex without protection</div>
            <div class="option" onclick="closeEvent()">Close</div>
            `
        },
        friendly: {
            spendTime(data) {
                if (player.actions.friendlyActions >= 3) return

                player.actions.friendlyActions++
                const index = data.getAttribute('data-index');
                let person = characters[index];

                person.stats.relationWithPlayer += 8;

                eventBody.innerHTML = `
                    <p>We spent time together</p>
                    <p>+8 relationship</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                windows.handleRelationBars()
                textContainer.innerHTML += `<p>I spent time with ${person.fullName}</p>`
            }
        },
        mean: {
            yell(data) {
                if (player.actions.meanActions >= 3) return

                player.actions.meanActions++
                const index = data.getAttribute('data-index');
                let person = characters[index]
                const isPartner = person.relationships.partner[0].characterIndex === player.characterIndex ? true : false;

                person.stats.relationWithPlayer -= 10

                if (isPartner)
                    person.stats.loveToPartner -= 20
                statsLimit(person)

                eventBody.innerHTML = `
                    <p>You yelled at ${person.gender === 'male' ? 'him' : 'her'}</p>
                    <p>-10 relationship</p>
                    ${isPartner ? '<p>-20 love</p>' : ''}
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                textContainer.innerHTML += `<p>You yelled at ${person.fullName}</p>`


                menu.relationships()
            },
            insult(data) {
                if (player.actions.meanActions >= 3) return

                player.actions.meanActions++
                const index = data.getAttribute('data-index');
                let person = characters[index]
                const isPartner = person.relationships.partner[0].characterIndex === player.characterIndex ? true : false;

                person.stats.relationWithPlayer -= 8

                if (isPartner)
                    person.stats.loveToPartner -= 30

                eventBody.innerHTML = `
                    <p>You insulted ${person.gender === 'male' ? 'him' : 'her'}</p>
                    <p>-8 relationship</p>
                    ${isPartner ? '<p>-30 love</p>' : ''}
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                textContainer.innerHTML += `<p>You insulted ${person.fullName}</p>`
                statsLimit(person)

                menu.relationships()
            },
            assault(data) {
                if (player.actions.meanActions >= 3) return

                const index = data.getAttribute('data-index');

                alert('not implemented yet')
            }
        },
        romance: {
            partner() {
                return player.relationships.partner[0]
            },
            break() {
                const exPartner = this.partner();
                exPartner.stats.relationWithPlayer -= 20 + Math.floor(Math.random() * 60)
                exPartner.stats.loveToPartner = 0;
                statsLimit(exPartner);

                exPartner.relationships.exPartners = [];
                exPartner.relationships.exPartners.push(player);
                exPartner.relationships.partner.pop();

                player.relationships.exPartners = []
                player.relationships.exPartners.push(exPartner)
                player.relationships.partner.pop();

                eventBody.innerHTML = `
                    <p>You broke up with you ex</p>
                    <div class="option" onclick="closeEvent()">Nothing to miss, right?</div>
                    `

                menu.relationships()
            },
            proposeMarriage() {
                player.actions.romanticActions++
                const partner = this.partner();
                const pronoun = partner.gender === 'male' ? 'He' : 'She';
                if (partner.stats.loveToPartner >= 60) {
                    partner.married = true;
                    eventBody.innerHTML = `
                        <p>${pronoun} has accepted your marriage offer, now you are married</p>
                        <div class="option" onclick="closeEvent()">Close</div>
                        `
                } else {
                    eventBody.innerHTML = `
                        <p>${pronoun} has rejected your marriage offer</p>
                        <div class="option" onclick="closeEvent()">Close</div>
                        `
                    menu.relationships()
                }
            },
            cuddle() {
                player.actions.romanticActions++
                const partner = this.partner();
                const pronoun = partner.gender === 'male' ? 'him' : 'her';
                partner.stats.loveToPartner += 15;
                statsLimit(partner)
                eventBody.innerHTML = `
                    <p>You cuddled with ${pronoun}</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                menu.relationships()

            },
            flirt() {
                player.actions.romanticActions++
                const partner = this.partner();
                const pronoun = partner.gender === 'male' ? 'him' : 'her';
                partner.stats.loveToPartner += 10;
                statsLimit(partner)
                eventBody.innerHTML = `
                    <p>You flirted with ${pronoun}</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                menu.relationships()
            },
            sex(useProtection) {
                const enjoyment = Math.floor(Math.random() * 100);
                const partner = this.partner();
                partner.stats.loveToPartner = Math.floor(enjoyment / 10)

                const pronoun = partner.gender === 'male' ? 'His' : 'Her';
                let color = ''
                let colors = {
                    green: 'rgb(47, 151, 73)',
                    yellow: 'rgb(196, 221, 105)',
                    red: 'rgb(185, 61, 61)'
                }
                if (enjoyment > 55) color = colors.green
                else if (enjoyment > 25) color = colors.yellow
                else color = colors.red

                eventBody.innerHTML = `
                <p>${pronoun} enjoyment</p>
                <div class="window-bar">
                    <div style="height: 100%; width: ${enjoyment}%; background-color: ${color}"></div>
                </div><br>
                ${useProtection ? `
                <div class="option" onclick="closeEvent()">Close</div>
                ` : ''}
                `
                if (!useProtection) {
                    const abort = countryQuery(player.location).laws.abort
                    console.log(abort)
                    if (player.gender == 'male' && partner.gender == 'female' || player.gender == 'female' && partner.gender == 'male') {
                        if (player.gender == 'female')
                            player.pregnant = true
                        else partner.pregnant = true

                        eventBody.innerHTML += `
                        <p>${player.pregnant ? 'You are' : 'She is'} pregnant</p>
                        ${abort ? `
                        <div class="option" onclick="windows.relations.romance.abort()">Abort</div>
                        ` : ''}
                        <div class="option" onclick="windows.relations.romance.break()">Abandon</div>
                        <div class="option" onclick="closeEvent()">Keep it</div>
                        `
                        textContainer.innerHTML += `
                        <p>${player.pregnant ? 'I am pregnant' : 'My partner is pregnant'}</p>
                        `
                    }
                }
            },
            abort() {
                const partner = player.relationships.partner[0]
                if (player.pregnant) player.pregnant = false
                else partner.pregnant = false
                eventBody.innerHTML = `
                <p>We decided to abort it</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            }
        }
    },
    sexuality: {
        display() {
            if (player.age < 15) return

            showEvent({
                title: 'Sexuality',
                body: `
                <h3>Choose your sexual orientation</h3>
                <p>You are currently ${player.sexuality}</p>
                <div class="option" onclick="windows.sexuality.choose('heterosexual')">Heterosexual</div>
                <div class="option" onclick="windows.sexuality.choose('homosexual')">Homosexual</div>
                <div class="option" onclick="windows.sexuality.choose('bisexual')">Bisexual</div>  
                `
            })
        },
        choose(sexuality) {
            player.sexuality = sexuality;
            closeEvent();
            menuTemplate.style.display = 'none'
            textContainer.innerHTML += `<p>I am ${sexuality} now</p>`
        }
    },
    driverLicense: {
        display() {
            if (player.age < 18) return;

            modalBackground.style.display = 'flex';
            eventTitle.innerText = 'Driver license'
            eventBody.innerHTML = `
            ${player.driverLicense ? '<p>You already have a driver license</p>' : '<p>You dont have a driver license</p>'}
            `
            eventBody.innerHTML += `
            ${!player.driverLicense ? `
            <div class="option" onclick="windows.driverLicense.test()">Take test</div>
            <div class="option" onclick="closeEvent()">Close</div>
            ` : '<div class="option" onclick="closeEvent()">Close</div>'}
            `
        },
        test() {
            const random = Math.floor(Math.random() * 3)
            if (random === 2) {
                player.driverLicense = true
                eventBody.innerHTML = `<p>Congratulations, you approved the driver test</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                textContainer.innerHTML += `<p>I approved the driver test succesfully</p>`
            } else {
                eventBody.innerHTML = `<p>You failed the driver test, good luck the next time</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                textContainer.innerHTML += `<p>I failed the driver test</p>`
            }
        },

    },
    prison: {
        display() {
            showEvent({
                title: 'Prison',
                body: `
                <p><b>Years left: </b>${player.prison.yearsLeft} years</p>
                <p><b>Sentence: </b>${player.prison.sentenceTime} years</p>
                <div class="option" onclick="windows.prison.attempToEscape()">Attempt to escape</div>
                <div class="option" onclick="windows.prison.lift()">Lift</div>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            })
        },
        attempToEscape() {
            const random = Math.floor(Math.random() * 100);
            if (random <= 10) {
                player.prison.jailed = false;
                player.criminalRecord.prisonEscapes++;
                eventBody.innerHTML = `
                <h3>You escaped from prison</h3>
                `
                textContainer.innerHTML += `
                <p>I escaped from prison</p>
                `

            } else {
                player.prison.yearsLeft += 2;
                player.prison.sentenceTime += 2
                eventBody.innerHTML = `
                <h3>Your escape attempt failed</h3>
                <p>+2 years of prison</p>
                <div class="option" onclick="closeEvent()">...</div>
                `
                textContainer.innerHTML += `
                <p>My escape attempt failed</p>
                `
            }
        },
        lift() {
            player.stats.fitness += 5;
            statsLimit(player);

            eventBody.innerHTML = `
            <p>You lifted</p>
            <p>+5 fitness</p>
            <div class="option" onclick="closeEvent()">Close</div>
            `
            textContainer.innerHTML += `
            <p>I lifted</p>
            `
        }
    },
    love: {
        findLove() {
            if (player.age < 14) return;

            if (player.relationships.partner.length !== 0) {
                showEvent({
                    title: 'Are you sure?',
                    body: `
                    <p>This means breaking up with your current partner</p>
                    <div class="option" onclick="windows.relations.romance.break()">Break up</div>
                    <div class="option" onclick="closeEvent()">I changed my mind</div>
                    `
                })
                return
            }

            const targetGender = {
                heterosexual: player.gender === 'male' ? 'female' : 'male',
                homosexual: player.gender,
                bisexual: undefined
            }

            let possiblePartner = new Person(undefined, undefined, player.age, targetGender[player.sexuality], undefined, 0, player.location)
            if (possiblePartner.gender === player.gender)
                possiblePartner.sexuality = 'homosexual'
            if (possiblePartner.age >= 18)
                jobAssigner(possiblePartner);

            characters.push(possiblePartner)

            showEvent({
                title: 'Find a partner',
                body: `
                <p><b>Name: </b>${possiblePartner.fullName}</p>
                <p><b>Gender: </b>${capitalize(possiblePartner.gender)}</p>
                <p><b>Age: </b>${possiblePartner.age}</p>
                <p><b>Job: </b>${possiblePartner.job !== 'none' ? possiblePartner.job.label : 'unemployed'}</p>
                ${possiblePartner.job !== 'none' ? `<p><b>Salary: </b>${moneyFormat(possiblePartner.job.salary)} $</p>` : ''}
                <ul>
                    <li>Health: <div class="window-bar"><div class="bar-progress" id="window-health-bar" style="width: ${possiblePartner.stats.health}%;"></div></div> </li>
                    <li>Happiness: <div class="window-bar"><div class="bar-progress" id="window-happiness-bar" style="width: ${possiblePartner.stats.happiness}%;"></div></div> </li>
                    <li>Smartness: <div class="window-bar"><div class="bar-progress" id="window-smartness-bar" style="width: ${possiblePartner.stats.smartness}%;"></div></div> </li>
                    <li>Appearance: <div class="window-bar"><div class="bar-progress" id="window-appearance-bar" style="width: ${possiblePartner.stats.appearance}%;"></div></div> </li>
                    <li>Fitness: <div class="window-bar"><div class="bar-progress" id="window-fitness-bar" style="width: ${possiblePartner.stats.fitness}%;"></div></div> </li>
                </ul>
                <div class="option" onclick="windows.love.tryPartner()">Try it</div>
                <div class="option" onclick="windows.love.dontTryPartner()">Close</div>    
                `
            })
            statbarColorer()
        },
        tryPartner() {
            let possiblePartner = characters.at(-1)

            const random = Math.floor(Math.random() * 100);
            const appearance = player.stats.appearance;

            const pronoun = possiblePartner.gender === 'male' ? 'He' : 'She';

            if (random + appearance > 100) {
                possiblePartner.stats.relationWithPlayer = 50 + Math.floor(Math.random() * 50)
                possiblePartner.stats.loveToPartner = 25 + Math.floor(Math.random() * 25)

                possiblePartner.relationships.partner.push(player)

                player.relationships.partner.push(possiblePartner)
                eventBody.innerHTML = `
                    <p>${pronoun} is your partner now</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
            } else {
                eventBody.innerHTML = `
                    <p>${pronoun} has rejected you</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                characters.pop()
            }
        },
        dontTryPartner() {
            closeEvent()
            characters.pop()
        },
    },
    university: {
        display() {
            if (player.age < 17) return

            if (player.currentEducation === 'university') {
                return showEvent({
                    title: 'University',
                    body: `
                    <p>You are already studying in the university</p>
                    <div class="option" onclick="closeEvent()">Close</div>
                    `
                })
            }

            const dad = player.relationships.parents[0];
            const mom = player.relationships.parents[1];

            showEvent({
                title: 'Are you going to university?',
                body: `
                <div id="parents-pay-university" class="option ${!dad.alive && !mom.alive ? 'disabled' : ''}" onclick="windows.university.paidByParents()">Ask my parents to pay it</div>
                <div class="option" onclick="windows.university.loan()">Ask for a student loan</div>
                <div id="player-pay-university" class="option" onclick="windows.university.payByMyself()">Pay it by myself</div>
                <div class="option" onclick="windows.university.dontGo()">Nevermind</div>  
                `
            })
        },
        dontGo() {
            closeEvent()
            textContainer.innerHTML += `<p>Im not going to the university</p>`
        },
        chooseCareer(payer, paidBy) {
            eventTitle.innerText = 'Choose your career';
            eventBody.innerHTML = `
            <select id="career-selector">
                <option value="medic">Medic</option>
                <option value="computerScience">Computer Science</option>
                <option value="biology">Biology</option>
                <option value="chemistry">Chemistry</option>
                <option value="history">History</option>
                <option value="politicalScience">Political Science</option>
                <option value="math">Math</option>
            </select>
            <div class="option" data-label="yes">Study</div>
            <div class="option" data-label="no">I changed my mind</div>
            `
            for (let option of document.getElementsByClassName('option')) {
                option.addEventListener('click', e => {
                    const decision = e.target.getAttribute('data-label')
                    if (decision === 'yes') {
                        const chosenCareer = document.getElementById('career-selector').value
                        player.currentCareer = Object.assign({ studying: true }, universityCareers[chosenCareer]);
                        player.currentCareer.paidBy = paidBy;
                        player.currentEducation = 'university';
                        player.currentCareer.yearsStudied = 0
                        if (!payer) {
                            // add loan later
                            return closeEvent()
                        }
                        if (payer.characterIndex === player.characterIndex) {
                            payer.money.expenses += 6000
                        }
                        player.currentCareer.yearsStudied = 0;
                        closeEvent();
                    } else {
                        closeEvent();
                    }
                })
            }
        },
        payByMyself() {
            if (player.money.income >= 6000 || player.money.total >= 6000 * 5) {
                windows.university.chooseCareer(player, 'myself');
            } else {
                textContainer.innerHTML += `<p>I dont have enough money</p>`
                let btn = document.getElementById('player-pay-university')
                btn.remove()
            }
        },
        paidByParents() {
            const dad = player.relationships.parents[0];
            const mom = player.relationships.parents[1];

            if (dad.alive || mom.alive)
                textContainer.innerHTML += `<p>I asked my parents to pay </p>`

            if (dad.alive && dad.money.income - dad.money.expenses >= 6000 ||
                mom.alive && mom.money.income - mom.money.expenses >= 6000) {
                textContainer.innerHTML += `<p>My parents accepted</p>`
                windows.university.chooseCareer(dad.alive && dad.money.income - dad.money.expenses >= 6000 ? dad : mom, 'parents');
            } else {
                textContainer.innerHTML += `<p>My parents rejected</p>`
                let btn = document.getElementById('parents-pay-university')
                btn.remove()
            }

        },
        loan() {
            textContainer.innerHTML += `<p>I applied for a loan</p>`
            windows.university.chooseCareer(undefined, 'loan');
        }

    },
    emigrate() {
        const chosenCountry = document.getElementById('country-chooser').value
        if (player.age >= 18) {
            player.location = chosenCountry;
            textContainer.innerHTML += `
        <p>I emigrated to ${player.location}</p>
        ${player.job !== 'none' ? `
        <p>I quit my job</p>` : ''}
        `;
            player.job.until = year;
            player.money.income -= player.job.salary;
            moneyViewer()
            player.cv.push(player.job)
            player.job = 'none'
            menuTemplate.style.display = 'none';


        } else if (player.age < 18) {
            showEvent({
                title: 'You cant emigrate',
                body: `
                <div class="option" onclick="closeEvent()">Ok</div>
                `
            })
            textContainer.innerHTML += 'I cant emigrate'
            menuTemplate.style.display = 'none';
        }
    },
    job: {
        jobWindow(e) {
            if (player.job !== 'none') {
                showEvent({
                    title: 'You already have a job',
                    body: `
                    <p>Will you quit?</p>
                    <div class="option" onclick="windows.job.leave()">Quit</div>
                    <div class="option" onclick="closeEvent()">Keep my job</div>  
                    `
                })
            }

            const index = e.getAttribute('data-index');
            const job = jobs[index];

            showEvent({
                title: `Get a job as ${job.label}`,
                body: `
                <p><b>Anual salary: </b>${moneyFormat(job.salary)}$</p><br>
                <h3>Requirements:</h3>
                <ul>
                ${jobRequirementsListifier(index)}
                </ul>

                <div class="option" onclick="windows.job.apply('${index}')">Apply</div>
                <div class="option" onclick="closeEvent()">Uh, nevermind</div>
                `
            })
        },
        apply(index) {
            const job = Object.assign({}, jobs[index]);
            const requirements = job.requirements
            let requirementsCompleted = 0;
            for (let requirement of Object.entries(requirements)) {
                const skillVerifier = () => {
                    const skills = ['programming', 'music', 'handiness', 'writing', 'art']
                    if (skills.includes(requirement[0]))
                        if (player.skills[requirement[0]].level >= requirement[1])
                            requirementsCompleted++;
                }
                const statVerifier = () => {
                    stats = ['health', 'happiness', 'smartness', 'fitness', 'appearance']
                    if (stats.includes(requirement[0]))
                        if (player.stats[requirement[0]] >= requirement[1])
                            requirementsCompleted++;
                }
                if (requirement[0] === 'criminalRecord') {
                    const values = Object.entries(player.criminalRecord)
                    let count = values.length
                    for (let value of values) {
                        if (value[1] === 0) count--
                    }
                    if (count === 0) requirementsCompleted++
                }
                if (requirement[0] === 'education' && Object.entries(player.career).length > 0
                    && player.career[requirement[1]] != undefined)
                    if (player.career[requirement[1]].label === requirement[1]) requirementsCompleted++;

                skillVerifier()
                statVerifier()

                if (requirement[0] === 'minAge' && player.age >= requirement[1])
                    requirementsCompleted++
            }

            if (Object.entries(requirements).length === requirementsCompleted) {
                player.money.income += job.salary;
                player.job = job;
                player.job.since = year;
                player.job.performance = Math.floor(Math.random() * 50) + 25
                eventTitle.innerText = 'Applied succesfuly!'
                eventBody.innerHTML = `<div class="option" onclick="closeEvent()">Nice</div>`;
                textContainer.innerHTML += `<p>I got a job as ${job.label}</p>`
                menu.job()
                moneyViewer()
            } else {
                eventTitle.innerText = 'You did not get an interview'
                eventBody.innerHTML = `<div class="option" onclick="closeEvent()">...</div>`;
            }
        },
        confirmLeave() {
            eventBody.innerHTML = `
            <p>Are you sure you want to leave?</p>
            <div class="option" onclick="windows.job.leave()">Yes</div>
            <div class="option" onclick="closeEvent()">No</div>

            `
        },
        leave() {
            player.job.until = year;
            player.cv.push(player.job);
            player.job = 'none'
            eventBody.innerHTML = `
            <p>You resigned succesfully</p>
            <div class="option" onclick="closeEvent()">Good</div>
            `
            menu.job()
        },
        workHarder() {
            closeEvent()
            menuTemplate.style.display = 'none'
            textContainer.innerHTML += `
            <p>I worked harder at my job</p>
            `
            player.job.performance += Math.floor(Math.random() * 10)
            player.stats.happiness -= 5
            player.stats.health -= 2
            player.actions.workHarder++;
            statsLimit(player)
        },
        askPromotion() {
            player.actions.performance++
            modalBackground.style.display = 'flex'
            eventTitle.innerText = 'Promotion'
            if (player.job.performance >= 70)
                for (let job of jobs) {
                    if (job.label === player.job.promotion) {
                        player.job.until = year
                        player.cv.push(player.job)

                        player.job = structuredClone(job)
                        player.job.since = year

                        eventBody.innerHTML = `
                        <p>Your promotion request has been accepted</p>
                        <div class="option" onclick="closeEvent()">Close</div>
                        `
                        menu.job()
                        break;
                    }
                }
            else {
                eventBody.innerHTML = `
                <p>Your promotion request has been rejected</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            }
        },
        currentJob() {
            showEvent({
                title: 'Current Job',
                body: `
                <p><b>Current job: </b>${player.job.label}</p>
                <p><b>Salary: </b>${moneyFormat(player.job.salary)} $</p>
                <p><b>Next position: </b>TO DO</p>
                <p><b>Years working: </b>${year - player.job.since}</p>
                <p><b>Performance:</b> ${player.job.performance}/100</p>
                <div class="window-bar">
                    <div style="background-color:#b7b34b;width:${player.job.performance}%;height: 100%""></div>
                </div> 
                <ul>

                <div class="option" onclick="windows.job.confirmLeave()">Leave this job</div>
                ${player.actions.workHarder < 3 ? `
                    <div class="option" onclick="windows.job.workHarder()">Work harder</div>
                ` : ''}
                ${player.job.promotion !== 'none' && player.actions.askPromotion < 3 ? `
                <div class="option" onclick="windows.job.askPromotion()">Ask promotion</div>
                ` : ''}
                <div class="option" onclick="closeEvent()">Close</div>
                </ul>
                `
            })
        },
    },
    freetime: {
        handleSwitch(option) {
            const notEnoughMoney = () => {
                showEvent({
                    title: 'Freetime',
                    body: `
                    <p>You do not have enough money</p>
                    <div class="option" onclick="closeEvent()">Close</div>    
                    `
                })
            }
            let freetime = player.freetime;
            let button = document.getElementById(`freetime-${option}`)
            switch (option) {
                case 'reading':
                    if (player.age < 8) return
                    if (player.money.total < 200) return notEnoughMoney()
                    freetime.isReading ? freetime.isReading = false : freetime.isReading = true;
                    freetime.isReading ? button.style.float = 'right' : button.style.float = 'left'
                    freetime.isReading ? player.money.expenses += 200 : player.money.expenses -= 200
                    break;
                case 'parties':
                    if (player.age < 2) return
                    if (player.money.total < 500) return notEnoughMoney()
                    freetime.isAttendingParties ? freetime.isAttendingParties = false : freetime.isAttendingParties = true;
                    freetime.isAttendingParties ? button.style.float = 'right' : button.style.float = 'left'
                    freetime.isAttendingParties ? player.money.expenses += 500 : player.money.expenses -= 500
                    break;
                case 'musicLessons':
                    if (player.age < 7) return
                    if (player.money.total < 2000) return notEnoughMoney()
                    freetime.isTakingMusicLessons ? freetime.isTakingMusicLessons = false : freetime.isTakingMusicLessons = true;
                    freetime.isTakingMusicLessons ? button.style.float = 'right' : button.style.float = 'left'
                    freetime.isTakingMusicLessons ? player.money.expenses += 2000 : player.money.expenses -= 2000
                    break;
                case 'gym':
                    if (player.age < 16) return
                    if (player.money.total < 1800) return notEnoughMoney()
                    freetime.goesToGym ? freetime.goesToGym = false : freetime.goesToGym = true;
                    freetime.goesToGym ? button.style.float = 'right' : button.style.float = 'left'
                    freetime.goesToGym ? player.money.expenses += 1800 : player.money.expenses -= 1800
                    break;
                default:
                    break;
            }
            moneyViewer()
        },
        cinema: {
            display() {
                if (player.age < 12) return

                showEvent({
                    title: 'Cinema',
                    body: `
                    <h3>Price: 400$</h3>
                    <div class="option" onclick="windows.freetime.cinema.pay(400)">Pay</div>
                    <div class="option" onclick="closeEvent()">Cancel</div>    
                    `
                })
            },
            pay(money) {
                if (player.money.total >= money) {
                    player.money.total -= money;
                    player.stats.happiness += 3;
                    eventTitle.innerText = 'Cinema';
                    eventBody.innerHTML = `
                        <h3>You went to the cinema</h3>
                        <div class="option" onclick="closeEvent()">Nice</div>
                        `;
                    textContainer.innerHTML += `<p>I watched a movie at a cinema</p>`
                    moneyViewer()
                } else {
                    eventTitle.innerText = 'Cinema';
                    eventBody.innerHTML = `
                        <h3>You do not have enough money</h3>
                        <div class="option" onclick="closeEvent()">...</div>
                        `;
                }
            }
        },
        restaurant: {
            display() {
                if (player.age < 12) return

                showEvent({
                    title: 'Restaurant',
                    body: `
                    <h3>This would cost 250$</h3>
                    <div class="option" onclick="windows.freetime.restaurant.pay(400)">Pay</div>
                    <div class="option" onclick="closeEvent()">Leave</div>    
                    `
                })
            },
            pay(money) {
                if (player.money.total >= money) {
                    player.money.total -= money;
                    player.stats.happiness += 3;
                    showEvent({
                        title: "Restaurant",
                        body: `
                        <h3>You paid the restaurant</h3>
                        <div class="option" onclick="closeEvent()">Nice</div>
                        `
                    })
                    textContainer.innerHTML += `<p>I went to a restaurant</p>`
                    moneyViewer()
                } else {
                    showEvent({
                        title: "Restaurant",
                        body: `
                        <h3>You do not have enough money</h3>
                        <div class="option" onclick="closeEvent()">...</div>
                        `
                    })
                }
            }
        },
        goClubbing: {
            display() {
                if (player.age < 18) return

                modalBackground.style.display = 'flex'
                eventTitle.innerText = 'Go clubbing'
                const possibilities = Math.round(Math.random() * 3)

                player.stats.happiness += Math.floor(Math.random() * 5)
                statsLimit(player)
                textContainer.innerHTML += `
                <p>I went clubbing</p>
                `
                handleStatBars(player, true)
                if (possibilities <= 1)
                    showEvent({
                        title: "Go clubbing",
                        body: `
                        <p>You had fun at the club</p>
                        <div class="option" onclick="closeEvent()">Close</div>
                        `
                    })
                else if (possibilities === 2) {
                    const drinks = items.alcoholic
                    // const drinks = ['beer', 'wine', 'vodka']
                    const random = Math.floor(Math.random() * drinks.length)
                    const drink = drinks[random].label.toLowerCase()
                    showEvent({
                        title: "Go clubbing",
                        body: `
                        <p>You have been offered a ${drink}</p>
                        <div class="option" onclick="windows.freetime.goClubbing.acceptDrink('${drink}')">Accept</div>
    
                        <div class="option" onclick="windows.freetime.goClubbing.decline()">Refuse</div>
                    `
                    })
                    textContainer.innerHTML += `<p>I have been offered a ${drink}</p>`
                }
                else if (possibilities === 3) {
                    const drugs = [
                        {
                            name: 'LSD',
                            damage: 5
                        },
                        {
                            name: 'weed',
                            damage: 3
                        },
                        {
                            name: 'heroin',
                            damage: 12
                        },
                        {
                            name: 'cocaine',
                            damage: 10
                        }
                    ];
                    const random = Math.floor(Math.random() * drugs.length)
                    const drug = drugs[random]

                    textContainer.innerHTML += `<p>I have been offered ${drug.name}</p>`
                    showEvent({
                        title: "Go clubbing",
                        body: `
                        <p>You have been offered ${drug.name}</p>
                        <div class="option" onclick="windows.freetime.goClubbing.acceptDrug(${drug.damage})">Accept</div>
                        <div class="option" onclick="windows.freetime.goClubbing.decline()">Refuse</div>
                        `
                    })
                }
            },
            acceptDrink(drink) {
                menuTemplate.style.display = 'none'
                eventBody.innerHTML = `
                <p>You accepted the ${drink}</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
                textContainer.innerHTML += `<p>I accepted the ${drink}</p>`
                const random = Math.floor(Math.random() * 8)
                player.stats.health -= random
                statsLimit(player)
                handleStatBars(player, true)
            },
            acceptDrug(damage) {
                menuTemplate.style.display = 'none'
                closeEvent()
                player.stats.health -= damage
                statsLimit(player)
                textContainer.innerHTML += `<p>I accepted</p>`
                handleStatBars(player, true)
            },
            decline() {
                menuTemplate.style.display = 'none'
                closeEvent()
                textContainer.innerHTML += `
                <p>I declined</p>
                `
            }
        },
    },
    handleRelationBars() {
        let progressBars = document.getElementsByClassName('relation');
        for (let element of Object.entries(progressBars)) {
            let index = parseInt(element[1].id.split('-')[1])
            let category = element[1].id.split('-')[0]
            let opinion = player.relationships[category][index].stats.relationWithPlayer;
            element[1].style.width = `${opinion}%`
        }

        for (let progressBar of progressBars) {
            let percentage = parseInt(progressBar.style.width.split('%')[0]);
            if (percentage > 55) progressBar.style.backgroundColor = 'rgb(47, 151, 73)'
            else if (percentage > 25) progressBar.style.backgroundColor = 'rgb(196, 221, 105)'
            else progressBar.style.backgroundColor = 'rgb(185, 61, 61)'
        }
    },
    throwParty() {
        player.stats.happiness += 10;
        eventBody.innerHTML = `
            <p>You threw an amazing party</p>
            <br>
            <div class="option" onclick="closeEvent()">Close</div>
            `
        textContainer.innerHTML += `<p>I organized a party at home</p>`
        statsLimit(player)
        menuTemplate.style.display = 'none'
        handleStatBars(player, true)
    },
}