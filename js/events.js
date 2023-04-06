//random events
const childhoodEvents = [

]

const adulthoodEvents = [

]

const elderhoodEvents = [

]

const prisonEvents = [
    {
        display() {
            const insults = ['baby', 'idiot', 'dumbass', 'faggot', 'retard', 'fatty']
            const insult = insults[Math.floor(Math.random() * insults.length)]

            createEvent({
                title: `The inmates called you ${insult}`,
                body(id) {
                    return `
                    <div class="option" onclick="prisonEvents[0].argue('${id}')">Argue</div>
                    `
                }
            })
        },
        argue(id) {
            textContainer.innerHTML += `<p>I insulted them</p>`

            closePopup(id)
        }
    }
]

const jobEvents = [
    {
        display() {
            textContainer.innerHTML += `
            <p>We have a job meeting</p>
            `
            createEvent({
                title: 'Job Meeting',
                body(id) {
                    return `
                    <p>You have a meeting in your job, what are you going to do?</p>
                        <div class="option" onclick="jobEvents[0].dontSpeak('${id}')">Dont say a word</div>
                        <div class="option" onclick="jobEvents[0].proposeIdea('${id}')">Propose a revolutionary idea</div>
                `}
            })
        },
        dontSpeak(id) {
            closePopup(id)
            textContainer.innerHTML += `
            <p>I said nothing in that meeting</p>
            `
        },
        proposeIdea(id) {
            const smartness = player.stats.smartness;
            const random = Math.floor(Math.random() * 50) + 50

            if (random <= smartness) {
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
]

const obligatoryEvents = {
    firstWords: {
        display() {
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
        speak(words) {
            closeEvent()
            textContainer.innerHTML += `
            <p>My first words were ${words}</p>
            `
        }
    }
}

const eventsHandler = () => {
    if (!player.alive || player.age < 4) return

    const displayHandler = (events, probability) => {
        const random = Math.floor(Math.random() * 100)
        console.log(random)
        const eventIndex = Math.floor(Math.random() * events.length)
        if (random + 5 <= probability) {
            events[eventIndex].display()
        }
    }

    if (player.prison.jailed) return displayHandler(prisonEvents, 10)

    if (player.job != 'none') displayHandler(jobEvents, 8)

    // if(player.lifeStage === 'childhood') displayHandler(childhoodEvents, 20)
}