const weaponOptions = itemListifier(items, 'weapons', 'items');
const instrumentOptions = itemListifier(items, 'instruments', 'items');
const electronicOptions = itemListifier(items, 'electronics', 'items');
const housesOptions = itemListifier(assets, 'houses', 'assets');
const carsOptions = itemListifier(assets, 'cars', 'assets');

// there is an object which contains every menu content, which are showed by its methods (called by buttons)

// also there is another object with event-related methods, unlike the menuTemplates object, events are showed in windows.
// These windows are mostly called by an object inside of templateFunctions called trigger, whose methods **trigger** the event window.
// I said mostly because there are specific events which are called by events.js differently

// outside the trigger object but within the templateFunctions, there are the functions for every button from events 



const menuTemplates = {
    activities(){
        menuTemplate.style.display = 'block';
        menuTitle.innerText  = 'Activities'
        menuBody.innerHTML = `
        <ul>
            <li onclick="menuTemplates.freetime()" class="option activity-option"><img src="images/options/free-time.png" alt="free-time" on> Free time</li>
            <li onclick="menuTemplates.cars()" class="option activity-option ${player.age < 18 ? 'disabled' : ''}"><img src="images/options/cars.png" alt="car"> Cars</li>
            <li onclick="menuTemplates.realEstate()" class="option activity-option ${player.age < 16 ? 'disabled' : ''}"><img src="images/options/real-estate.png" alt="house"> Real Estate</li>
            <li onclick="menuTemplates.shopping()" class="option activity-option ${player.age < 14 ? 'disabled' : ''}"><img src="images/options/shopping.png" alt="shopping"> Shopping</li>
            <li onclick="menuTemplates.emigrate()" class="option activity-option ${player.age < 18 ? 'disabled' : ''}"><img src="images/options/emigrate.png" alt="emigrate globe earth"> Emigrate</li>
            <li onclick="functionTemplates.trigger.driverLicense()" class="option activity-option ${player.age < 18 ? 'disabled' : ''}"><img src="images/options/drivelicense.png">Driver license</li>
            <li onclick="functionTemplates.trigger.findLove()" class="option activity-option ${player.age < 14 ? 'disabled' : ''}">Love</li>
        </ul>
        `
    },
    freetime(){
        menuTemplate.style.display = 'block';
        menuTitle.innerText  = 'Free time'
        menuBody.innerHTML = `
        <ul>
        <li class="option ${player.age < 8 ? 'disabled' : ''}" onclick="functionTemplates.freetime.handleSwitch('reading')">
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

        <li class="option ${player.age < 7 ? 'disabled' : ''}" onclick="functionTemplates.freetime.handleSwitch('musicLessons')">
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

        <li class="option ${player.age < 2 ? 'disabled' : ''}" onclick="functionTemplates.freetime.handleSwitch('parties')">
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

        <li class="option ${player.age < 16 ? 'disabled' : ''}" onclick="functionTemplates.freetime.handleSwitch('gym')">
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

        <li class="option ${player.age < 12 ? 'disabled' : ''}" onclick="functionTemplates.trigger.restaurant()">Go to a restaurant</li>
        <li class="option ${player.age < 12 ? 'disabled' : ''}" onclick="functionTemplates.trigger.cinema()">Watch a movie</li>
        </ul>
        `
    },
    cars(){
        if(player.age < 18) return;

        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Cars';
        menuBody.innerHTML = `
        <div class="assetsContainer">
            <div id="assets-header">
                <div id="ownedTab" class="tab" data-type="cars" onclick="menuTemplates.assetsHandler(this)">
                    Owned
                </div>
                <div id="marketTab" class="tab active" data-type="cars" onclick="menuTemplates.assetsHandler(this)">
                    Market
                </div>
            </div>
            <div id="cell-container">
                ${carsOptions}
            </div>
        </div>`
    },
    realEstate(){
        if(player.age < 16) return;

        menuTemplate.style.display = 'block';
        menuTitle.innerText = 'Real Estate';
        menuBody.innerHTML = `
        <div class="assetsContainer">
            <div id="assets-header">
                <div id="ownedTab" class="tab" data-type="houses" onclick="menuTemplates.assetsHandler(this)">
                    Owned
                </div>
                <div id="marketTab" class="tab active" data-type="houses" onclick="menuTemplates.assetsHandler(this)">
                    Market
                </div>
            </div>
            <div id="cell-container">
                ${housesOptions}
            </div>
        </div>`
    },
    assetsHandler(data){
        const ids = {
            ownedTab: 'marketTab',
            marketTab: 'ownedTab'
        }
        const thisId = data.id;
        const cellContainer = document.getElementById('cell-container')
        const type = data.getAttribute('data-type')

        if(!data.classList.value.includes('active')){
            document.getElementById(ids[thisId]).classList.remove('active');
            data.classList.add('active')
            if(thisId ==='marketTab'){
                if(type === 'houses')
                cellContainer.innerHTML = housesOptions
                else
                cellContainer.innerHTML = carsOptions
            }
            else cellContainer.innerHTML = ownedAssets(type)
        }
    },
    shopping(){
        if(player.age < 14) return

        menuTemplate.style.display = 'block';
        menuTitle.innerText  = 'Shopping'
        menuBody.innerHTML = `
        <ul>
        <li onclick="menuTemplates.weapons()" class="option">Weapons</li>
        <li onclick="menuTemplates.instruments()" class="option">Instruments</li>
        <li onclick="menuTemplates.electronics()" class="option">Electronics</li>
        </ul>
        `
    },
    emigrate(){
        if (player.age < 18) return
        menuTemplate.style.display = 'block';
        menuTitle.innerText  = 'Emigrate'
        menuBody.innerHTML = `
        <div id="select-container">
            <select id="country-chooser">
            ${countriesList()}
            </select>
        </div>
        <ul>
        <li data-triggers="windows" onclick="functionTemplates.emigrate.emigrate()" class="option">Emigrate</li>
        <li data-triggers="windows" onclick="menuTemplates.activities()" class="option">Cancel</li>
        </ul>
        
        `
    },
    job() {
        let string = '';
        let index = 0;
        for (let job of jobs) {
            if (job.label !== player.job.label)
                string = string.concat(`<div onclick="functionTemplates.trigger.jobWindow(this)" class="cell" data-index="${index}">${job.label}</div>`)
            index++;
        } if (player.job !== 'none') {
            string = string.concat(`
        <div id="current-job" onclick="functionTemplates.trigger.currentJob()" class="option">${player.job.label}</div>
        `)
        }

        menuTemplate.style.display = 'block'
        menuTitle.innerText = 'Jobs'
        menuBody.innerHTML = `
        <div id="jobs-container">
        ${string}
        </div>
        `
    },
    weapons(){
        menuTemplate.style.display = 'block';
        menuTitle.innerText  = 'Weapons'
        menuBody.innerHTML = `
        <ul>
        ${weaponOptions}
        </ul>
        `
    },
    instruments(){
        menuTemplate.style.display = 'block';
        menuTitle.innerText  = 'Instruments'
        menuBody.innerHTML = `
        <ul>
        ${instrumentOptions}
        </ul>
        `
    },
    electronics(){
        menuTemplate.style.display = 'block';
        menuTitle.innerText  = 'Electronics'
        menuBody.innerHTML = `
        <ul>
        ${electronicOptions}
        </ul>
        `
    },
    profile(){
        menuTemplate.style.display = 'block';
        menuTitle.innerText  = 'Profile'
        menuBody.innerHTML = `
        <ul>
            <li class="option" onclick="functionTemplates.trigger.identity()"><img src="images/options/identity.png"> Identity</li>
            <li class="option" onclick="functionTemplates.trigger.skills()"><img src="images/options/skills.png" id="skills-icon"> Skills</li>
            <li class="option" onclick="menuTemplates.inventory()"><img src="images/options/inventory.png">Inventory</li>
            <li class="option" onclick="functionTemplates.trigger.education()"><img src="images/options/education.png">Education</li>
            <li class="option" onclick="functionTemplates.trigger.cv()"><img src="images/options/cv.png">Curriculum Vitae</li>
            <li class="option ${player.age < 15 ? 'disabled' : ''}" id="sexuality" onclick="functionTemplates.trigger.sexuality()">Sexuality</li>
            <li class="option" onclick="alert('not implemented yet')">Health</li>
        </ul>
        `
    },
    relationships(){
        menuTemplate.style.display = 'block'
        menuTitle.innerText = 'Relationships'
        menuBody.innerHTML = `
            ${relationShipListifier('parents')}
            ${relationShipListifier('siblings')}
            ${relationShipListifier('friends')}
            ${relationShipListifier('partner')}
            ${relationShipListifier('children')}
        `
        functionTemplates.handleRelationBars()
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
            <li class="item-container" onclick="functionTemplates.trigger.useItem(this)" data-index="${item.inventoryIndex}"
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
    }

}







functionTemplates = {
    trigger: {
        buyWindow(e) {
            const objName = e.getAttribute('data-objname');
            const property = e.getAttribute('data-property');
            const index = e.getAttribute('data-index');

            let obj;

            if (objName === 'items') obj = items[property][index]
            else obj = assets[property][index];

            modalBackground.style.display = 'flex'
            eventTitle.innerText = `Buy ${obj.label}`
            eventBody.innerHTML = `
                <h3>Price: ${moneyFormat(obj.price)} $</h3>
                <div class="option" onclick="functionTemplates.buy('${objName}', '${property}', '${index}')">Buy it</div>
                <div class="option" onclick="closeEvent()">Cancel</div>
            `
        },
        jobWindow(e) {
            const index = e.getAttribute('data-index');
            const job = jobs[index];

            modalBackground.style.display = 'flex';
            eventTitle.innerText = `Get a job as ${job.label}`;
            eventBody.innerHTML = `
                <p><b>Anual salary: </b>${moneyFormat(job.salary)}$</p><br>
                <h3>Requirements:</h3>
                <ul>
                ${jobRequirementsListifier(index)}
                </ul><br>

                <div class="option" onclick="functionTemplates.job.apply('${index}')">Apply</div>
                <div class="option" onclick="closeEvent()">Uh, nevermind</div>
                `
        },
        cinema() {
            if(player.age < 12) return
            modalBackground.style.display = 'flex';
            eventTitle.innerText = `Cinema`;
            eventBody.innerHTML = `
            <h3>Price: 400$</h3>
            <div class="option" onclick="functionTemplates.payCinema(400)">Pay</div>
            <div class="option" onclick="closeEvent()">Cancel</div>
            `
        },
        restaurant() {
            if(player.age < 12) return
            modalBackground.style.display = 'flex';
            eventTitle.innerText = 'Restaurant';
            eventBody.innerHTML = `
                <h3>This would cost 250$</h3>
                <div class="option" onclick="functionTemplates.payRestaurant(400)">Pay</div>
                <div class="option" onclick="closeEvent()">Leave</div>
            `
        },
        identity() {
            modalBackground.style.display = 'flex';
            eventTitle.innerText = 'Identity';
            eventBody.innerHTML = `
            <h3>${player.fullName}</h3>
            <p><b>Full name:</b> ${player.fullName}</p>
            <p><b>Gender:</b> ${player.gender}</p>
            <p><b>Age:</b> ${player.age}</p>
            <p><b>Nationality:</b> ${player.nationality}</p>
            <p><b>Location:</b> ${player.location}</p>
            <p><b>Sexuality:</b> ${player.sexuality}</p>
            <div class="option" onclick="closeEvent()">Close</div>
            `
        },
        education() {
            modalBackground.style.display = 'flex';
            eventTitle.innerText = 'Education'
            eventBody.innerHTML = `
            <h4>Education:</h4>
            <p>${careerPreviewer().education}</p>
            <h4>Degrees:</h4>
            <ul>
            ${careerPreviewer().degrees}
            </ul>
            <div class="option" onclick="closeEvent()">Close</div>
            `
        },
        sexuality() {
            if (player.age < 15) return

            modalBackground.style.display = 'flex';
            eventTitle.innerText = 'Sexuality';
            eventBody.innerHTML = `
            <h3>Choose your sexual orientation</h3>
            <div class="option" onclick="functionTemplates.chooseSexuality('heterosexual')">Heterosexual</div>
            <div class="option" onclick="functionTemplates.chooseSexuality('homosexual')">Homosexual</div>
            <div class="option" onclick="functionTemplates.chooseSexuality('bisexual')">Bisexual</div>
            `
        },
        relations: {
            display(target) {
                let personID = target.getAttribute('data-id').split('-')[1]
                let personCategory = target.getAttribute('data-id').split('-')[0]
                const person = player.relationships[personCategory][parseInt(personID)];
                const characterIndex = person.characterIndex
                
                modalBackground.style.display = 'flex';
                eventTitle.innerText = `${person.fullName}`
                eventBody.innerHTML = `
                <p><b>Relationship:</b> ${personCategory}</p>
                <p><b>Age:</b> ${person.age}</p>
                <p><b>Occupation:</b> ${person.job.label}</p>
                <p><b>Salary:</b> ${person.money.income > 0 ? `${moneyFormat(person.money.income)} $` : 'none'}</p>
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
            
            <div class="option" onclick="functionTemplates.trigger.relations.friendlyOptions(this)"
             data-index="${characterIndex}">Friendly</div>

            <div class="option" onclick="functionTemplates.trigger.relations.meanOptions(this)"
             data-index="${characterIndex}">Mean</div>

             ${personCategory === 'partner' ? `
             <div class="option" onclick="functionTemplates.trigger.relations.romanticOptions(this)" data-index="${characterIndex}">Romantic</div>
             ` : ''}

             <div class="option" onclick="closeEvent()">Close</div>
             `
                handleStatBars(person, false)
            },
            friendlyOptions(data){
                const index = data.getAttribute('data-index');

                eventBody.innerHTML = `
                <div class="option" onclick="functionTemplates.friendly.spendTime(this)" data-index="${index}">Spend time together</div>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            },
            meanOptions(data){
                const index = data.getAttribute('data-index');
                const person = characters[index]

                eventBody.innerHTML = `
                <div class="option" onclick="functionTemplates.mean.insult(this)" data-index="${index}">Insult</div>
                <div class="option" onclick="functionTemplates.mean.yell(this)" data-index="${index}">Yell</div>
                ${player.age > 14 ? `<div class="option" onclick="functionTemplates.mean.assault(this)" data-index="${index}">Assault</div>` 
                : ''}
                ${person.relationships.partner[0] === player ? `
                <div class="option" onclick="functionTemplates.romance.break()">${person.married ? 'Divorce' : 'Break up'}</div>
                ` : ''}
                <div class="option" onclick="closeEvent()">Close</div>
                `
            },
            romanticOptions(data){
                eventBody.innerHTML = `
                <div class="option" onclick="functionTemplates.romance.proposeMarriage()">Propose marriage</div>
                <div class="option" onclick="functionTemplates.romance.flirt()">Flirt</div>
                <div class="option" onclick="functionTemplates.romance.cuddle()">Cuddle</div>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            }
        },



        skills() {
            modalBackground.style.display = 'flex';
            eventTitle.innerText = 'Skills';
            eventBody.innerHTML = `
            ${skillListifier(player)}
            <div class="option" onclick="closeEvent()">Close</div>
            `
        }, cv() {
            modalBackground.style.display = 'flex';
            eventTitle.innerText = 'Curriculum Vitae';
            eventBody.innerHTML = `
            <h3>Jobs</h3>
            ${cvListifier(player)}
            <div class="option" onclick="closeEvent()">Close</div>
            `
        }, useItem(data) {
            const type = data.getAttribute('data-type')
            const index = data.getAttribute('data-index')
            const object = player.inventory[type][index]

            if (type === 'weapons') {
                modalBackground.style.display = 'flex';
                eventTitle.innerText = object.label
                eventBody.innerHTML = `
                <ul>
                    <p>${object.successChance}% efficiency</p>
                    <li class="option" data-weapon="${index}" onclick="functionTemplates.weapon.selectVictim(this)">Crimes</li>
                    <li class="option" data-item="${type}-${index}" onclick="functionTemplates.sellItem(this)">Sell</li>
                    <li class="option" onclick="closeEvent()">Do nothing</li>
                </ul>
                `
            } else if (type === 'instruments') {
                modalBackground.style.display = 'flex';
                eventTitle.innerText = object.label
                eventBody.innerHTML = `
                    <div class="option" data-item="${index}" onclick="functionTemplates.playInstrument(this)">Play</div>
                    <div class="option" data-item="${type}-${index}" onclick="functionTemplates.sellItem(this)">Sell</div>
                    <div class="option" onclick="closeEvent()">Do nothing</div>

                `
            }

            if (object.label === 'Laptop' || object.label === 'PC') {
                modalBackground.style.display = 'flex';
                eventTitle.innerText = object.label;
                eventBody.innerHTML = `
                <div class="option" data-item="${index}" onclick="functionTemplates.computer.practiceProgramming(this)">Practice programming</div>
                <div class="option" data-item="${index}" onclick="functionTemplates.computer.practiceWriting(this)">Practice writing</div>
                <div class="option" data-item="${index}" onclick="functionTemplates.computer.playVideogames(this)">Play videogames</div>
                <div class="option" data-item="${type}-${index}" onclick="functionTemplates.sellItem(this)">Sell</div>
                <div class="option" data-item="${index}" onclick="closeEvent()">Do nothing</div>
                `
            }
        },
        currentJob() {
            modalBackground.style.display = 'flex'
            eventTitle.innerText = 'Current job';
            eventBody.innerHTML = `
            <p><b>Current job: </b>${player.job.label}</p>
            <p><b>Salary: </b>${moneyFormat(player.job.salary)} $</p>
            <p><b>Next position: </b>TO DO</p>
            <p><b>Years working: </b>${year - player.job.since}</p>
            <ul>

            <div class="option" onclick="functionTemplates.job.confirmLeave()">Leave this job</div>
            <div class="option" onclick="closeEvent()">Close</div>
            </ul>
            `
        },
        ownedAssetWindow(data){
            const type = data.getAttribute('data-type')
            const index = data.getAttribute('data-index');
            const asset = player.inventory[type][index]

            modalBackground.style.display = 'flex'
            eventTitle.innerText = asset.label
            if(type === 'houses')
            eventBody.innerHTML = `
                <p><b>Age: </b>${asset.age}</p>
                <p><b>Value: </b>${moneyFormat(asset.price)} $</p>
                <p><b>Condition: </b>${asset.condition}</p>
                <br>
                <div class="option" onclick="functionTemplates.throwParty()">Throw a party</div>
                <div class="option" data-item="${type}-${index}" onclick="functionTemplates.sellItem(this)">Sell</div>
                <div class="option" onclick="closeEvent()">Close</div>
            `
            else eventBody.innerHTML = `
            
            `
        }, 
        driverLicense(){
            if(player.age < 18) return;

            modalBackground.style.display = 'flex';
            eventTitle.innerText = 'Driver license'
            eventBody.innerHTML = `
            ${player.driverLicense ? '<p>You already have a driver license</p>' : '<p>You dont have a driver license</p>'}
            `
            eventBody.innerHTML += `
            ${!player.driverLicense ? `
            <div class="option" onclick="functionTemplates.takeDriverTest()">Take test</div>
            <div class="option" onclick="closeEvent()">Close</div>
            ` : '<div class="option" onclick="closeEvent()">Close</div>'}
            `
        },
        findLove(){
            if(player.age < 14) return;

            const targetGender = {
                heterosexual: player.gender === 'male' ? 'female' : 'male',
                homosexual: player.gender,
                bisexual: undefined
            }

            let possiblePartner = new Person(undefined, undefined,player.age, targetGender[player.sexuality])
            if(possiblePartner.gender === player.gender)
                possiblePartner.sexuality = 'homosexual'
            if(possiblePartner.age >= 18)
                jobAssigner(possiblePartner);
            
            characters.push(possiblePartner)

            modalBackground.style.display = 'flex'
            eventTitle.innerText = 'Find a partner';
            eventBody.innerHTML = `
            <p><b>Name: </b>${possiblePartner.fullName}</p>
            <p><b>Gender: </b>${firstCaseToUpper(possiblePartner.gender)}</p>
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
            <div class="option" onclick="functionTemplates.romance.tryPartner()">Try it</div>
            <div class="option" onclick="functionTemplates.romance.dontTryPartner()">Close</div>
            `
            statbarColorer()
        }
    },
    emigrate: {
        emigrate() {
            const countryChoosen = document.getElementById('country-chooser').value
            if (player.age >= 18) {
                player.location = countryChoosen;
                menuTemplate.style.display = 'none';

                textContainer.innerHTML += `I emigrated to ${player.location}`;

            } else if (player.age < 18) {
                modalBackground.style.display = 'flex';
                eventTitle.innerText = 'You cant emigrate!'
                eventBody.innerHTML = `
                <div class="option" onclick="closeEvent()">Ok</div>
                `;
                textContainer.innerHTML += 'I cant emigrate'
                menuTemplate.style.display = 'none';
            }
        }
    },
    buy(objName, property, index) {
        let obj;
        if (objName === 'items') obj = items[property][index]
        else obj = assets[property][index];
        let newObj = structuredClone(obj);
        if (player.money.total >= newObj.price) {
            player.money.total -= newObj.price;
            newObj.inventoryIndex = player.inventory[property].length;
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
    job: {
        apply(index) {
            const job = structuredClone(jobs[index]);
            const requirements = job.requirements
            let requirementsCompleted = 0;
            for (let requirement of Object.entries(requirements)) {
                const skillVerifier = (skill) => {
                    if(requirement[0] === skill && player.skills[skill].level >= requirement[1])
                        requirementsCompleted++;
                }

                if (requirement[0] === 'education' && Object.entries(player.career).length !== 0)
                    if (player.career[requirement[1]].label === requirement[1]) requirementsCompleted++;

               skillVerifier('programming')
               skillVerifier('music')

                if (requirement[0] === 'minAge' && player.age >= requirement[1])
                    requirementsCompleted++
            }

            if (Object.entries(requirements).length === requirementsCompleted) {
                player.money.income += job.salary;
                player.job = job;
                player.job.since = year;
                eventTitle.innerText = 'Applied succesfuly!'
                eventBody.innerHTML = `<div class="option" onclick="closeEvent()">Nice</div>`;
                textContainer.innerHTML += `<p>I got a job as ${job.label}</p>`
                menuTemplates.job()
                moneyViewer()
            } else {
                eventTitle.innerText = 'You did not get an interview'
                eventBody.innerHTML = `<div class="option" onclick="closeEvent()">...</div>`;
            }
        },
        confirmLeave() {
            eventBody.innerHTML = `
            <p>Are you sure you want to leave?</p>
            <div class="option" onclick="functionTemplates.job.leave()">Yes</div>
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
        }
    },
    freetime: {
        handleSwitch(option) {
            const notEnoughMoney = () => {
                modalBackground.style.display = 'flex';
                eventTitle.innerText = 'Freetime'
                eventBody.innerHTML = `
                <p>You do not have enough money</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            }
            let freetime = player.freetime;
            let button = document.getElementById(`freetime-${option}`)
            switch (option) {
                case 'reading':
                    if(player.age < 8) return
                    if (player.money.total < 200) return notEnoughMoney()
                    freetime.isReading ? freetime.isReading = false : freetime.isReading = true;
                    freetime.isReading ? button.style.float = 'right' : button.style.float = 'left'
                    freetime.isReading ? player.money.expenses += 200 : player.money.expenses -= 200
                    break;
                case 'parties':
                    if(player.age < 2) return
                    if (player.money.total < 500) return notEnoughMoney()
                    freetime.isAttendingParties ? freetime.isAttendingParties = false : freetime.isAttendingParties = true;
                    freetime.isAttendingParties ? button.style.float = 'right' : button.style.float = 'left'
                    freetime.isAttendingParties ? player.money.expenses += 500 : player.money.expenses -= 500
                    break;
                case 'musicLessons':
                    if(player.age < 7) return
                    if (player.money.total < 2000) return notEnoughMoney()
                    freetime.isTakingMusicLessons ? freetime.isTakingMusicLessons = false : freetime.isTakingMusicLessons = true;
                    freetime.isTakingMusicLessons ? button.style.float = 'right' : button.style.float = 'left'
                    freetime.isTakingMusicLessons ? player.money.expenses += 2000 : player.money.expenses -= 2000
                    break;
                case 'gym':
                    if(player.age < 16) return
                    if (player.money.total < 1800) return notEnoughMoney()
                    freetime.goesToGym ? freetime.goesToGym = false : freetime.goesToGym = true;
                    freetime.goesToGym ? button.style.float = 'right' : button.style.float = 'left'
                    freetime.goesToGym ? player.money.expenses += 1800 : player.money.expenses -= 1800
                    break;
                default:
                    break;
            }
            moneyViewer()
        }
    }, payCinema(money) {
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

    },
    payRestaurant(money) {
        if (player.money.total >= money) {
            player.money.total -= money;
            player.stats.happiness += 3;
            eventTitle.innerText = 'Restaurant';
            eventBody.innerHTML = `
                <h3>You paid the restaurant</h3>
                <div class="option" onclick="closeEvent()">Nice</div>
                `;
            textContainer.innerHTML += `<p>I went to a restaurant</p>`
            moneyViewer()
        } else {
            eventTitle.innerText = 'Restaurant';
            eventBody.innerHTML = `
                <h3>You do not have enough money</h3>
                <div class="option" onclick="closeEvent()">...</div>
                `;
        }
    }, chooseSexuality(sexuality) {
        player.sexuality = sexuality;
        closeEvent();
        menuTemplate.style.display = 'none'
        textContainer.innerHTML += `<p>I am ${sexuality} now</p>`
    }, handleRelationBars() {
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
    }, weapon: {
        selectVictim(data) {
            let weaponIndex = data.getAttribute('data-weapon')

            let options = ''
            //one because player is 0, this may cause problems later if I decide to implement generations
            let index = 1;

            for (let person of characters) {
                if (person.fullName !== player.fullName && person.age !== player.age) {
                    person.index = index
                    options = options.concat(`
                        <div onclick="functionTemplates.weapon.kill(this)" data-weapon="${weaponIndex}" class="option" data-person="${person.index}">${person.fullName}</div>
                    `)
                    index++;
                }
            }

            options = options.concat(`<div onclick="functionTemplates.weapon.kill(this)" data-weapon="${weaponIndex}" class="option" data-person="beggar">Random beggar</div>`)

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
                <p>Your assasination attemp failed!</p>
                <div class="option">...</div>
                `
                player.criminalRecord.murderAttempts++;
            }
        },
    },
    playInstrument(data) {
        player.skills.music.xp += 25;

        eventBody.innerHTML = `
        <p>+25 music skill earned!</p>
        <div class="option" onclick="closeEvent()">Close</div>
        `
        skillLeveler()
    },
    computer: {
        practiceWriting() {
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
    sellItem(data) {
        const index = data.getAttribute('data-item').split('-')[1]
        const type = data.getAttribute('data-item').split('-')[0]
        const item = player.inventory[type][index];
        const price = item.price;

        eventBody.innerHTML = `
        <h3>Are you sure you want to sell this?</h3>
        <p><b>Price:</b> ${moneyFormat(price)} $</p>
        <div class="option" onclick="functionTemplates.confirmSell(this)" data-type="${type}" data-index="${index}" data-price="${price}">Sell</div>
        <div class="option" onclick="closeEvent">No</div>
        `

    }, confirmSell(data) {
        const price = data.getAttribute('data-price');
        let index = data.getAttribute('data-index');
        const type = data.getAttribute('data-type')
        modalBackground.style.display = 'none';
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
    friendly: {
        spendTime(data){
            const index = data.getAttribute('data-index');
            let person = characters[index];

            person.stats.relationWithPlayer += 8;

            eventBody.innerHTML = `
            <p>We spent time together</p>
            <p>+8 relationship</p>
            <div class="option" onclick="closeEvent()">Close</div>
            `
            functionTemplates.handleRelationBars()
            textContainer.innerHTML += `<p>I spent time with ${person.fullName}</p>`
        }
    },
    mean: {
        yell(data){
            const index = data.getAttribute('data-index');
            let person = characters[index]
            const isPartner = person.relationships.partner[0] === player ? true : false;

            person.stats.relationWithPlayer -= 10
            
            if(isPartner)
                person.stats.loveToPartner -= 20
            statsLimit(person)

            eventBody.innerHTML = `
            <p>You yelled at ${person.gender === 'male' ? 'him' : 'her'}</p>
            <p>-10 relationship</p>
            ${isPartner ? '<p>-20 love</p>' : ''}
            <div class="option" onclick="closeEvent()">Close</div>
            `
            textContainer.innerHTML += `<p>You yelled at ${person.fullName}</p>`


            menuTemplates.relationships()
        },
        insult(data){
            const index = data.getAttribute('data-index');
            let person = characters[index]
            const isPartner = person.relationships.partner[0] === player ? true : false;

            person.stats.relationWithPlayer -= 8
            
            if(isPartner)
                person.stats.loveToPartner -= 30
            
            eventBody.innerHTML = `
            <p>You insulted ${person.gender === 'male' ? 'him' : 'her'}</p>
            <p>-8 relationship</p>
            ${isPartner ? '<p>-30 love</p>' : ''}
            <div class="option" onclick="closeEvent()">Close</div>
            `
            textContainer.innerHTML += `<p>You insulted ${person.fullName}</p>`
            statsLimit(person)

            menuTemplates.relationships()
        },
        assault(data){
            const index = data.getAttribute('data-index');

            alert('not implemented yet')
        }        
    },
    throwParty(){
        player.stats.happiness += 10;
        eventBody.innerHTML = `
        <p>You threw an amazing party</p>
        <br>
        <div class="option" onclick="closeEvent()">Close</div>
        `
        textContainer.innerHTML += `<p>I organized a party at home</p>`
        statsLimit(player)
        menuTemplates.relationships()
    }, 
    takeDriverTest(){
        const random = Math.floor(Math.random() * 3)
        if(random === 2){
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
    romance: {
        tryPartner(){
            if(player.relationships.partner.length !== 0){
                eventBody.innerHTML = `
                <h3>Are you sure?</h3>
                <p>This means breaking up with your current partner</p>
                <div class="option" onclick="functionTemplates.romance.break()">Break up</div>
                <div class="option" onclick="closeEvent()">I changed my mind</div>
                `
                return
            }

            let possiblePartner = characters.at(-1)

            const random = Math.floor(Math.random() * 100);
            const appearance = player.stats.appearance;

            const pronoun = possiblePartner.gender === 'male' ? 'He' : 'She';

            if(random + appearance > 100){
                possiblePartner.stats.relationWithPlayer = 50 + Math.floor(Math.random() * 50)
                possiblePartner.stats.loveToPartner = 25 + Math.floor(Math.random() * 25)

                possiblePartner.relationships.partner.push(player)

                player.relationships.partner.push(possiblePartner)
                eventBody.innerHTML = `
                <p>${pronoun} is your partner now</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            } else{
                eventBody.innerHTML = `
                <p>${pronoun} has rejected you</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
                characters.pop()
            } 
        },
        dontTryPartner(){
            closeEvent()
            characters.pop()
        },
        break(){
            const exPartner = player.relationships.partner[0];
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
        },
        proposeMarriage(){
            const partner = player.relationships.partner[0];
            const pronoun = partner.gender === 'male' ? 'He' : 'She';
            if(partner.stats.loveToPartner >= 60){
                partner.married = true;
                eventBody.innerHTML = `
                <p>${pronoun} has accepted your marriage offer, now you are married</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
            } else{
                eventBody.innerHTML = `
                <p>${pronoun} has rejected your marriage offer</p>
                <div class="option" onclick="closeEvent()">Close</div>
                `
                menuTemplates.relationships()
            }
        },
        cuddle(){
            const partner = player.relationships.partner[0];
            const pronoun = partner.gender === 'male' ? 'him' : 'her';
            partner.stats.loveToPartner += 15;
            statsLimit(partner)
            eventBody.innerHTML = `
            <p>You cuddled with ${pronoun}</p>
            <div class="option" onclick="closeEvent()">Close</div>
            `
            menuTemplates.relationships()

        },
        flirt(){
            const partner = player.relationships.partner[0];
            const pronoun = partner.gender === 'male' ? 'him' : 'her';
            partner.stats.loveToPartner += 10;
            statsLimit(partner)
            eventBody.innerHTML = `
            <p>You flirted with ${pronoun}</p>
            <div class="option" onclick="closeEvent()">Close</div>
            `
            menuTemplates.relationships()
        }
    }
}
