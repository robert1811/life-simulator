//random events
const childhoodEvents = [
    {
        display() {
            createStoryEvent({
                title: 'Happy Birthday!',
                body(id) {
                    return `
                    <p>What are you going to do?</p>
                    <div class="option" onclick="childhoodEvents[0].celebrate('${id}', 'friends')">Invite friends</div>
                    <div class="option" onclick="childhoodEvents[0].celebrate('${id}', 'family')">Only invite family</div>
                    <div class="option" onclick="closeStoryEvent('${id}')">Dont celebrate</div>
                    `
                }
            })
        },
        celebrate(id, guests) {
            player.stats.happiness += 5 + Math.floor(Math.random() * 10)
            statsLimit(player)
            closeStoryEvent(id)
            textContainer.innerHTML += `
            <p>I celebrated my birthday</p>
            <p>I invited my ${guests}</p>
            `
            scrolldown(textContainer)
        }
    },
    {
        display() {
            const person = new Person(undefined, undefined, player.age, player.gender == 'male' ? 'female' : 'male')
            const appearance = person.stats.appearance
            const { fullName, gender, age } = person
            const pronoun = gender === 'male' ? 'him' : 'her'
            createStoryEvent({
                title: 'Kiss',
                body(id) {
                    return `
                    <p><b>Name: </b>${fullName}</p>
                    <p><b>Gender: </b>${gender}</p>
                    <p><b>Age: </b>${age}</p>
                    <p><b>Appearance: </b></p>
                    <div class="window-bar">
                    <div style="height: 100%; width: ${appearance}%; background-color: ${barColor(appearance)}"></div>
                    </div>
                    <br>
                    <p>You got the oportunity to kiss ${pronoun}. Would you like to do it?</p>
                    <div class="option" onclick="childhoodEvents[1].kiss('${id}', '${pronoun}')">Kiss ${pronoun}</div>
                    <div class="option" onclick="closeStoryEvent('${id}')">Close</div>
                    `
                }
            })
        },
        kiss(id, pronoun) {
            const appearance = player.stats.appearance
            const enjoyment = appearance + Math.floor(Math.random() * (100 - appearance))

            modifyStoryEvent({
                id,
                title: 'Kiss',
                body(id){ return `
                <p>You kissed ${pronoun}.</p>
                <p>${pronoun == 'him' ? 'His' : 'Her'} enjoyment.</p>
                <div class="window-bar">
                    <div style="width: ${enjoyment}%; background-color: ${barColor(enjoyment)}; height: 100%"></div>
                </div>
                <br>
                <div class="option" onclick="closeStoryEvent('${id}')">Close</div>
                `
                }
            })
        }
    }
]

const adulthoodEvents = [
    {
        display() {
            const places = ['a hospital', 'the zoo', 'a store']
            const random = Math.floor(Math.random() * places.length)
            const place = places[random]
            createStoryEvent({
                title: 'Provide directions',
                body(id) {
                    return `
                    <p>Someone asked you for the direction of ${place}.</p>
                    <br>
                    <div class="option" onclick="closeStoryEvent('${id}')">Correct directions</div>
                    <div class="option" onclick="closeStoryEvent('${id}')">Incorrect directions</div>
                    <div class="option" onclick="closeStoryEvent('${id}')">Ignore</div>
                    `
                }
            })
        }
    }
]

const elderhoodEvents = [

]

const prisonEvents = [
    {
        display() {
            const insults = ['baby', 'idiot', 'dumbass', 'faggot', 'retard', 'fatty']
            const insult = insults[Math.floor(Math.random() * insults.length)]
            textContainer.innerHTML += '<p>I got insulted by inmates</p>'

            createStoryEvent({
                title: `The inmates called you ${insult}`,
                body(id) {
                    return `
                    <div class="option" onclick="prisonEvents[0].argue('${id}')">Argue</div>
                    <div class="option" onclick="closeStoryEvent('${id}')">Do nothing</div>
                    `
                }
            })
        },
        argue(id) {
            textContainer.innerHTML += `<p>I insulted them</p>`
            scrolldown(textContainer)

            closeStoryEvent(id)
        }
    }
]

const jobEvents = [
    {
        display() {
            textContainer.innerHTML += `
            <p>We have a job meeting</p>
            `
            scrolldown(textContainer)
            createStoryEvent({
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
            textContainer.innerHTML += `
            <p>I said nothing in that meeting</p>
            `
            closeStoryEvent(id)
            scrolldown(textContainer)
        },
        proposeIdea(id) {
            const smartness = player.stats.smartness;
            const random = Math.floor(Math.random() * 50) + 50

            if (random <= smartness) {
                textContainer.innerHTML += `
                <p>They congratulated me</p>
                `
                closeStoryEvent(id)
            } else
                textContainer.innerHTML += `
            <p>They told me to shut up</p>
            `
            closeStoryEvent(id)
            scrolldown(textContainer)
        }
    }
]

const obligatoryEvents = {
    firstWords: {
        display() {
            createStoryEvent({
                title: 'Your first words',
                body(id) {
                    return `
                <div class="option" onclick="obligatoryEvents.firstWords.speak('hungry', '${id}')">Hungry</div>
                <div class="option" onclick="obligatoryEvents.firstWords.speak('water', '${id}')">Water</div>
                <div class="option" onclick="obligatoryEvents.firstWords.speak('mom', '${id}')">Mom</div>
                <div class="option" onclick="obligatoryEvents.firstWords.speak('dad', '${id}')">Dad</div>    
                `
                }
            })
        },
        speak(words, id) {
            closeStoryEvent(id)
            textContainer.innerHTML += `
            <p>My first words were "${words}"</p>
            `
        }
    }
}

const eventsHandler = () => {
    if (!player.alive || player.age < 4) return

    const displayHandler = (events, probability) => {
        const random = Math.floor(Math.random() * 100)
        const eventIndex = Math.floor(Math.random() * events.length)
        if (random + 5 <= probability) {
            events[eventIndex].display()
        }
    }

    if (player.prison.jailed) return displayHandler(prisonEvents, 10)

    if (player.job != 'none') displayHandler(jobEvents, 8)

    if (player.lifeStage === 'childhood') displayHandler(childhoodEvents, 20)

    else if (player.lifeStage === 'adulthood') displayHandler(adulthoodEvents, 8)
}