//here I handle every stat change in the characters

const studyingProcess = (textbox) => {
    let currentEducation = player.currentEducation;
    let currentCareer = player.currentCareer
    let yearsStudied;
    let duration;

    if(currentCareer) {
        duration = currentCareer.duration;
        yearsStudied = currentCareer.yearsStudied;
    }

    if(currentCareer && currentEducation === 'university' && yearsStudied !== duration){
        player.currentCareer.yearsStudied++;
    } else if(currentCareer && currentEducation === 'university' && yearsStudied === duration){
        player.career[player.currentCareer.label] = player.currentCareer;
        if(player.currentCareer.paidBy === 'myself') player.money.expenses -= 6000
        player.currentCareer = {studying: false};
        player.currentEducation = 'none';
        textbox.innerHTML += `<p>I finished my career</p>`
    }
}

const statsLimit = (person) => {
    let stats = person.stats;
    for(let stat of Object.entries(stats)){
        if(stat[1] < 0) person.stats[stat[0]] = 0
        else if (stat[1] > 100) person.stats[stat[0]] = 100
    }
    if(person.job !== 'none')
        if(person.job.performance > 100)
            person.job.performance = 100
        else if (person.job.performance < 0)
            person.job.performance = 0
    
}

const statsBuffer = () => {
    if(player.freetime.isReading){
        if(player.money.total > 0){
            player.stats.smartness += 3;  
        } 
        else {
            player.freetime.isReading = false
            player.money.expenses -= 200
        }
        
    }
    if(player.freetime.isAttendingParties){
        if(player.money.total > 0) player.stats.happiness += 5
        else {
            player.freetime.isAttendingParties = false
            player.money.expenses -= 500
        }
    }
    if(player.freetime.isTakingMusicLessons){
        if(player.money.total > 0) player.skills.music.xp += 25;
        else {
            player.freetime.isTakingMusicLessons = false
            player.money.expenses -= 2000
        }
    }
    if(player.freetime.goesToGym){
        if(player.money.total > 0) {
            player.stats.health++;
            player.stats.fitness += 6;
        } else {
            player.freetime.goesToGym = false
            player.money.expenses -= 1800
        }
    } else player.stats.fitness--;
        
    
}

const specificEvents = () => {
    switch (player.age) {
        case 1:
            obligatoryEvents.firstWords.display()
            break;
        case 3:
            player.currentEducation = 'preschool'
            textContainer.innerHTML += `<p>I started prescholar</p>`
            break;

        case 6:
            player.currentEducation = 'elementary'
            textContainer.innerHTML += `<p>I started elementary school</p>`
            break;

        case 12:
            player.currentEducation = 'highschool'
            textContainer.innerHTML += `<p>I started highschool</p>`
            break;

        case 18:
            player.career['education'] = {name: 'Highschool'}
            windows.university.display()
    }
}

const careerPreviewer = () => {
    let string = '';
    let object = {education: '<li>No education received yet</li>', degrees: '<p>No degrees yet</p>'}
    for(let obj of Object.entries(player.career)){
        if(obj[0] !== 'education'){
            string = string.concat(`<li>${obj[1].name}</li>`)
        }
        else object.education = 'Highschool'
    } 
    if(string !== '')
    object.degrees = string;
    return object

}

const skillLeveler = () => {
    const levelChanger = (skill, newXpNeeded) =>{
        player.skills[skill[0]].level++;
        player.skills[skill[0]].xp = player.skills[skill[0]].xp - player.skills[skill[0]].xpNeeded;  
        player.skills[skill[0]].xpNeeded = newXpNeeded
    }

    let skills = player.skills;
    for(let skill of Object.entries(skills)){
        let xp = skills[skill[0]].xp;
        let level = skills[skill[0]].level
        let xpNeeded = skills[skill[0]].xpNeeded
        
        if(level === 0 && xp >= xpNeeded){
            levelChanger(skill, 50)
        } else if(level === 1 && xp >= xpNeeded){
            levelChanger(skill, 100)
        } else if(level === 2 && xp >= xpNeeded){
            levelChanger(skill, 250)
        } else if(level === 3 && xp >= xpNeeded){
            levelChanger(skill, 450)
        } else if(level === 4 && xp >= xpNeeded){
            levelChanger(skill, 600)
        } else if(level === 5 && xp >= xpNeeded){
            levelChanger(skill, 800)
        } else if(level === 6 && xp >= xpNeeded){
            levelChanger(skill, 1200)
        } else if(level === 7 && xp >= xpNeeded){
            levelChanger(skill, 3000)
        } else if(level === 8 && xp >= xpNeeded){
            levelChanger(skill, 6000)
        } else if(level === 9 && xp >= xpNeeded){
            levelChanger(skill, 6000)
        }
    } 
}

 const randomDeath = (person) => {
    const randomNum = Math.floor(Math.random() * person.age)
    const deathCause = [`has died while ${person.gender == 'male' ? 'he' : 'she'} was sleeping`]
    const randomReason = deathCause[Math.floor(Math.random() * deathCause.length)]
    
    if(person.age > 70 && person.stats.health < randomNum && person.alive){
        death(person, randomReason)    
    }
 }

 const death = (person, reason) => {
    person.alive = false;
    textContainer.innerHTML += `<p>${person.fullName} ${reason} at age of ${person.age}</p>`

    person.deathCause = reason;

    if(person.job !== 'none'){
        person.job.until = year;
        person.cv.push(person.job)
        person.job = 'none'
    }

    if(person.characterIndex === player.characterIndex){
        const ageBtnContainer = document.getElementById('age-btn-container');
        ageBtnContainer.innerHTML = `
        <button id="dead-button" class="rectangular-btn" onclick="deathScreen()">Dead</button>
        `
    }
 }

 const prisonHandler = (person) => {
    if(!person.prison.jailed) return

    person.prison.yearsLeft--;
    person.criminalRecord.yearsInPrison++;

    if(person.prison.yearsLeft === 0){
        person.prison.jailed = false
        person.prison.sentenceTime = 0;
        leftBtnContainer.innerHTML = ''
        textContainer.innerHTML += `<p>I got out of prison</p>`
    }
 }

 const jobPerformanceHandler = () => {
    if(player.job === 'none') return 

    const performance = player.job.performance
    const random = Math.round(Math.random() * 10)
    if(performance <= 10 && random === 2){
        player.job.until = year
        player.cv.push(player.job)
        player.job = 'none'
    } else if(performance >= 75 && random === 5){
        
    }
 }

 const resetAvaibleActions = () => {
    for(let action of Object.entries(player.actions)){
        player.actions[action[0]] = 0
    }
 }

const arrest = (min, max, person) => {
    person.prison.sentenceTime = min + Math.floor(Math.random() * max)
    person.prison.yearsLeft = person.prison.sentenceTime
    person.prison.jailed = true;

    leftBtnContainer.innerHTML = `
                <button class="btn" onclick="windows.prison.display()">
                <img src="images/prison.png">
                </button>
                <p>Prison</p>
                `
    if(player.job !== 'none') {
        player.job === 'none';
        textContainer.innerHTML += `<p>I lost my job</p>`
    }
}

 const arrestByMurder = (person) => {
    arrest(8, 17, person)
}

const arrestByStealingCar = (person) => {
    arrest(1, 3, person)
}

const pregnancyHandler = (person) => {
    if(!person.pregnant) return 

    person.pregnant = false;
    const partner = person.relationships.partner[0]
    const possibleGenders = ['male', 'female']
    const gender = possibleGenders[Math.round(Math.random())]
    
    if(person.characterIndex == player.characterIndex || person.characterIndex == player.characterIndex.relationships.partner[0]){
        const pronoun = gender === 'male' ? 'him' : 'her'
        modalBackground.style.display = 'flex'
        eventTitle.innerText = `Its a ${gender == 'male' ? 'boy' : 'girl'}`
        eventBody.innerHTML = `
        <p>How will you call ${pronoun}</p>
        <input type="text" placeholder="name" id="name-field">
        <div class="option" onclick="createChild('${person.characterIndex}', '${gender}')">Name ${pronoun}</div>
        <div class="option" onclick="randomNameForChildren('${person.characterIndex}')">Random</div>
        `
        return
    }
    const nationality = nationalityQuery(person.location)
    const offspring = new Person(undefined, partner != undefined ? partner.surname : person.surname, 0, gender, nationality)
    person.relationships.offspring.push(offspring)
    offspring.relationships.parents.push(person)
    if(partner != undefined){
        partner.relationships.offspring.push(offspring)
        offspring.relationships.parents.push(partner)
    }

    characters.push(offspring)
}

const statsChanges = () => {
    const stats = Object.entries(player.stats)
    for(let stat of stats) {
        // if its true buffes the stat
        if(Math.floor(Math.random() * 2) === 1){
            player.stats[stat[0]] += Math.floor(Math.random() * 5)
        } else {
            player.stats[stat[0]] -= Math.floor(Math.random() * 5)
        }
    }
}