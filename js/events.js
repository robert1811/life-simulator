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
            createEvent({
                title: 'Job Meeting',
                body(id){
                    return  `
                    <p>You have a meeting in your job, what are you going to do?</p>
                        <div class="option" onclick="jobEvents.jobMeeting.dontSpeak('${id}')">Dont say a word</div>
                        <div class="option" onclick="jobEvents.jobMeeting.proposeIdea('${id}')">Propose a revolutionary idea</div>
                `}
            })
        },
        dontSpeak(id){
            closePopup(id)
            textContainer.innerHTML += `
            <p>I said nothing in that meeting</p>
            `
        },
        proposeIdea(id){
            const smartness = player.stats.smartness;
            const random = Math.floor(Math.random() * 50) + 50

            if(random <= smartness){
                closePopup(id)
                textContainer.innerHTML += `
                <p>They congratulated me</p>
                `
            } else
                closePopup(id)
                textContainer.innerHTML += `
                <p>They told me to shut up</p>
                `
        }
    }
}

const obligatoryEvents = {
    firstWords: {
        display(){
            showEvent({
                title: 'Your first words',
                body: `
                <div class="option" onclick="obligatoryEvents.firstWords.speak('hungry')">Hungry</div>
                <div class="option" onclick="obligatoryEvents.firstWords.speak('water')">Water</div>
                <div class="option" onclick="obligatoryEvents.firstWords.speak('mom')">Mom</div>
                <div class="option" onclick="obligatoryEvents.firstWords.speak('dad')">Dad</div>    
                `
            })
        },
        speak(words){
            closeEvent()
            textContainer.innerHTML += `
            <p>My first words were ${words}</p>
            `
        }
    }
}