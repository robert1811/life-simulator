//here I handle every stat change in the player

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
        player.currentCareer = {};
        player.currentEducation = 'none';
        textbox.innerHTML += `<p>I finished my career</p>`
        console.log(player)
    }
}

const statsLimit = (person) => {
    let stats = person.stats;
    for(let stat of Object.entries(stats)){
        if(stat[1] < 0) person.stats[stat[0]] = 0
        else if (stat[1] > 100) person.stats[stat[0]] = 100
    }
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
            //first words event
            modalBackground.style.display = 'flex';
            eventTitle.innerText = firstWordsEvent.title;
            for (let option of firstWordsEvent.options) {
                eventBody.innerHTML += `<div class="option" data-msg="My first words were '${option}'">${option}</div>`
            }
            optionsHandler();
            break;

        case 3:
            player.currentEducation = 'preschool'
            player.currentEducation = 'preschool'
            textContainer.innerHTML += `<p>I started prescholar</p>`
            break;

        case 6:
            player.currentEducation = 'elementary'
            player.currentEducation = 'elementary'
            textContainer.innerHTML += `<p>I started elementary school</p>`
            break;

        case 12:
            player.currentEducation = 'highschool'
            player.currentEducation = 'highschool'
            textContainer.innerHTML += `<p>I started highschool</p>`
            break;

        case 18:
            modalBackground.style.display = 'flex';
            player.currentEducation = 'none'
            eventTitle.innerText = universityEvent.title;
            player.career['education'] = {name: 'Highschool'}

            for (let option of universityEvent.options) {
                eventBody.innerHTML += `<div class="option" data-label="${option.label}" data-accept="${option.accepted_msg}" data-decline="${option.declined_msg}">${option.decision}</div>`;

            }

            const dad = player.relationships.parents[0];
            const mom = player.relationships.parents[1];

            const chooseCareerEvent = (payer, paidBy) => {
                eventTitle.innerText = universityEvent.careerChoose.title;
                eventBody.innerHTML = universityEvent.careerChoose.body;
                for (let option of document.getElementsByClassName('option')) {
                    option.addEventListener('click', e => {
                        const decision = e.target.getAttribute('data-label')
                        if (decision === 'yes') {
                            const chosenCareer = document.getElementById('career-selector').value
                            player.currentCareer = universityCareers[chosenCareer];
                            player.currentCareer.paidBy = paidBy;
                            player.currentEducation = 'university';
                            if (payer === player) payer.money.expenses += 6000 
                            player.currentCareer.yearsStudied = 0;
                            closeEvent();
                        } else {
                            closeEvent();
                        }
                    })
                }

            }


            for (let option of document.getElementsByClassName('option')) {
                option.addEventListener('click', e => {
                    switch (e.target.getAttribute('data-label')) {
                        case 'parents':
                            if (dad.alive && dad.money.income - dad.money.expenses>= 6000 ||
                                mom.alive && mom.money.income - mom.money.expenses>= 6000) {
                                textContainer.innerHTML += `<p>${e.target.getAttribute('data-accept')}</p>`
                                chooseCareerEvent(undefined, 'parents');
                            } else {
                                textContainer.innerHTML += `<p>${e.target.getAttribute('data-decline')}</p>`
                                e.target.remove()
                            }
                            break;

                        case 'loan':
                            textContainer.innerHTML += `<p>${e.target.getAttribute('data-accept')}</p>`
                            chooseCareerEvent(undefined, 'loan');
                            break;

                        case 'myself':
                            if (player.money.income >= 6000 || player.money.total >= 6000 * 5) {
                                chooseCareerEvent(player, 'myself');
                            } else {
                                textContainer.innerHTML += `<p>${e.target.getAttribute('data-decline')}</p>`
                                e.target.remove()
                            }
                            break;

                        case 'no':
                            textContainer.innerHTML += `<p>${e.target.getAttribute('data-accept')}</p>`;
                            closeEvent();
                            break;
                    }
                })
            }
            break;
        default:
            break;
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

 const death = (person) => {
    //fix this crap with percentages
    const randomNum = Math.floor(Math.random() * person.age)
    
    if(person.age > 70 && person.stats.health < randomNum && person.alive){
        const deathCause = [`while ${person.gender == 'male' ? 'he' : 'she'} was sleeping`]
        const randomReason = deathCause[Math.floor(Math.random() * deathCause.length)]
        person.alive = false;
        textContainer.innerHTML += `<p>${person.fullName} has died ${randomReason} at age of ${person.age}</p>`

        person.deathCause = deathCause;

        if(player.job !== 'none'){
            person.job.until = year;
            person.cv.push(person.job)
            person.job = 'none'
        }
    }
 }