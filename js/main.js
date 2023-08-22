"use strict";

let characters = [];

class Person {
    constructor(name, surname, age, gender, nationality, money, location) {
        this.gender = gender || genderRandomizer()
        this.nationality = nationality || countryRandomizer();
        this.language = languageQuery(this.nationality)
        this.name = name || nameRandomizer(this.language, this.gender);
        this.surname = surname || surnameRandomizer(this.language);
        this.age = age || 0;
        this.money.total = money ? money : 0;
        this.location = location || birthplaceQuery(this.nationality)
        this.birthplace = this.location
        this.driverLicense = this.age > 18 ? true : false;
    }

    inventory = { weapons: [], instruments: [], electronics: [], houses: [], cars: []};

    sexuality = 'heterosexual'

    stats = {
        health: randomStat(70, 30),
        happiness: randomStat(0, 100),
        smartness: randomStat(0, 100),
        fitness: randomStat(0, 35),
        appearance: randomStat(0, 100)
    }

    relationships = {
        parents: [],
        siblings: [],
        partner: [],
        friends: [],
        offspring: []
    }
    alive = true;
    career = {};
    currentCareer = {studying: false}

    skills = {
        programming: {
            level: 0,
            xp: 0,
            xpNeeded: 50,
        },
        handiness: {
            level: 0,
            xp: 0,
            xpNeeded: 50,
        },
        writing: {
            level: 0,
            xp: 0,
            xpNeeded: 50,
        },
        art: {
            level: 0,
            xp: 0,
            xpNeeded: 50,
        },
        music: {
            level: 0,
            xp: 0,
            xpNeeded: 50
        }
    }

    //activities which you pay for increasing skills and stats
    freetime = {
        isReading: false,
        isTakingMusicLessons: false,
        isAttendingParties: false,
        goesToGym: false
    }

    job = 'none';

    //in cv goes your employment history
    cv = [];

    money = {
        expenses: 0,
        income: 0,
        total: 0
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }

    //this is used when you want to access to certain character by using this index with the characters array
    characterIndex = characters.length

    criminalRecord = {
        yearsInPrison: 0,
        murderAttempts: 0,
        murder: 0,
        prisonEscapes: 0
    }

    prison = {
        yearsLeft: 0,
        sentenceTime: 0,
        jailed: false
    }

    // this limits your actions per year
    actions = {
        programming: 0,
        writing: 0,
        workHarder: 0,
        music: 0,
        meanActions: 0,
        friendlyActions: 0,
        romanticActions: 0,
        askPromotion: 0
    }

    socialMedia = {
        youtube: {
            created: false,
            created_at: null,
            username: null,
            videos: [],
            subscribers: 0
        },
        instagram: {
            created: false,
            created_at: null,
            username: null,
            posts: [],
            followers: 0
        }
    }
}

const createFamily = (player) => {
    const parentsAge = () => {
        let age = Math.floor(Math.random() * 40) + player.age;
        if (age - player.age < 18) age = age + 18 + player.age;
        return age;
    }


    let dad = new Person(undefined, player.surname, parentsAge(), 'male', player.nationality);
    dad.stats.relationWithPlayer = Math.floor(Math.random() * 100);
    characters.push(dad);

    let mom = new Person(undefined, undefined, dad.age + Math.floor(Math.random() * 10), 'female', player.nationality);
    mom.stats.relationWithPlayer = Math.floor(Math.random() * 100);
    characters.push(mom)

    dad.relationships.partner.push(mom);
    mom.relationships.partner.push(dad);

    player.relationships.parents.push(dad);
    player.relationships.parents.push(mom)

    let siblingsAmount = Math.floor(Math.random() * 3);

    while (siblingsAmount > 0) {
        let randomAge = Math.floor(Math.random() * 5);
        let sibling = new Person(undefined, player.surname, randomAge, undefined, player.nationality);
        sibling.stats.relationWithPlayer = Math.floor(Math.random() * 100);
        characters.push(sibling);
        player.relationships.siblings.push(sibling);
        siblingsAmount--;
    }
}

const firstMessage = () => {
    textContainer.innerHTML = `
    <p><span class="yellow">${year} - ${player.age === 0 ? 'birth' : `${player.age} years old`}</span></p>
    <p>My name is ${player.fullName}</p>
    <p>I was born ${player.gender} in ${player.location} on year ${year}</p>
    <p>My father is ${player.relationships.parents[0].fullName}, he works as a ${player.relationships.parents[0].job.label.toLowerCase()}</p>
    <p>My mother is ${player.relationships.parents[1].fullName}, she works as a ${player.relationships.parents[1].job.label.toLowerCase()}</p>
    `
}

let player;

const interfaceLoading = () => {
    handleStatBars(player, true);
    lifeStageDisplayer()
    moneyViewer()
    jobAssigner(characters)
    firstMessage()
    const menu = document.getElementById('create-character-screen')
    menu.style.display = 'none'
    menu.innerHTML = `
        <h1>Choose how will you create your character</h1>
        <div id="buttons-container">
            <button class="create-btn" onclick="randomCharacter()">Random</button>
            <button class="create-btn" onclick="displayCustomization()">Custom</button>
        </div>
    `
    const bars = document.getElementsByClassName('bar-progress');
    for (let bar of bars) {
        bar.style.animationName = 'animation-bar';
        bar.style.transition = 'all ease 0.3s'
    }
}

//sets jobs for npcs
const jobAssigner = (characters) => {
    const findJob = (person) => {
        let randomIndex = Math.floor(Math.random() * jobs.length)
        const job = jobs[randomIndex]
        person.job = job
        person.money.income = job.salary
        requirementsFiller(job, person)
    }
    if (characters.characterIndex === player.characterIndex) return
    if (Array.isArray(characters)) for (let person of characters) {
        if (person.age > 17 && person.job === 'none' && person.characterIndex !== player.characterIndex)
            findJob(person)
    }
    else {  
        let person = characters;
        if (person.age > 17 && person.job && person.job === 'none')
            findJob(person)
    }
}

const assignNPCEducation = (characters) => {
    for(let person of characters){
        if(person.age >= 3 && person.age < 6){
            person.currentEducation = 'preschool'
        } else if(person.age >= 6 && person.age < 12){
            person.currentEducation = 'elementary'
        } else if(person.age >= 12 && person.age < 18){
            person.currentEducation = 'highschool'
        } else if(person.age >= 18){
            person.currentEducation = 'none'
            person.career['education'] = {name: 'Highschool'}
        }
    }
}

const randomCharacter = () => {
    player = new Person();
    characters.push(player)
    createFamily(player)
    interfaceLoading()
    assignNPCEducation(characters)
}

const customCharacter = () => {
    const inputName = document.getElementById('name');
    const inputSurname = document.getElementById('surname');
    const inputAge = document.getElementById('age')
    const selectGender = document.getElementById('gender');
    const selectNationality = document.getElementById('nationality');
    const inputMoney = document.getElementById('money');

    const name = inputName.value.trim() !== '' ? inputName.value.trim() : undefined;
    const surname = inputSurname.value.trim() !== '' ? inputSurname.value.trim() : undefined;
    const age = inputAge.value >= 0 ? parseInt(inputAge.value) : 0;
    const gender = selectGender.value || undefined;
    const nationality = selectNationality.value || undefined;
    const money = parseInt(inputMoney.value) || undefined;

    player = new Person(name !== undefined ? capitalize(name) : name, name !== undefined ? capitalize(surname) : name, age, gender, nationality, money);
    characters.push(player);
    createFamily(player);
    interfaceLoading()
    assignNPCEducation(characters)
}