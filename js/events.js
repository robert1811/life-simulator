//random events
const childhoodEvents = [
    
]

const adulthoodEvents = [

]

const elderhoodEvents = [

]

const prisonEvents = {
    theyCalledYou: {
        display(){
            const insults = ['baby', 'idiot', 'dumbass', 'faggot', 'retard', 'fatty']
            const insult = insults[Math.floor(Math.random() * insults.length)]

            modalBackground.style.display = 'flex'
            eventTitle.innerText = `the innmates called you ${insult}`
            eventBody.innerHTML = `
            <div class="option" onclick="closeEvent()">Close</div>
            `
        }
    }
}

const jobEvents = {
    jobMeeting: {
        display(){
            textContainer.innerHTML += `
            <p>We have a job meeting</p>
            `

            modalBackground.style.display = 'flex'
            eventTitle.innerText = 'Job meeting'
            eventBody.innerHTML = `
            <p>You have a meeting in your job, what are you going to do?</p>
            <div class="option" onclick="jobEvents.jobMeeting.dontSpeak()">Dont say a word</div>
            <div class="option" onclick="jobEvents.jobMeeting.proposeIdea()">Propose a revolutionary idea</div>
            `
        },
        dontSpeak(){
            closeEvent()
            textContainer.innerHTML += `
            <p>I said nothing in that meeting</p>
            `
        },
        proposeIdea(){
            const smartness = player.stats.smartness;
            const random = Math.floor(Math.random() * 50) + 50

            if(random <= smartness){
                closeEvent()
                textContainer.innerHTML += `
                <p>They congratulated me</p>
                `
            } else
                closeEvent()
                textContainer.innerHTML += `
                <p>They told me to shut up</p>
                `
        }
    }
}

const obligatoryEvents = {
    firstWords: {
        display(){
            modalBackground.style.display = 'flex';
            eventTitle.innerText = 'Your first words';
            eventBody.innerHTML = `
            <div class="option" onclick="obligatoryEvents.firstWords.speak('hungry')">Hungry</div>
            <div class="option" onclick="obligatoryEvents.firstWords.speak('water')">Water</div>
            <div class="option" onclick="obligatoryEvents.firstWords.speak('mom')">Mom</div>
            <div class="option" onclick="obligatoryEvents.firstWords.speak('dad')">Dad</div>
            `
        },
        speak(words){
            closeEvent()
            textContainer.innerHTML += `
            <p>My first words were ${words}</p>
            `
        }
    }
}