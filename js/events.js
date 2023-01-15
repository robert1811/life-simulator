//random events
const childhoodEvents = [
    {
        //TODO: Implement a function for these events which reads body and also options
    }
]

const adulthoodEvents = [

]

const elderhoodEvents = [

]

const prisonEvents = [
//TODO
]

const jobEvents = [

]

// obligatory events, in this part of the development I used other
//approach for event handling, declaring here the msgs and inserting them
//in the data attributes
const firstWordsEvent = {
    title: 'Your first words!',
    options: ['Hungry', 'Water', 'Mom', 'Dad', 'Hello']
}

const universityEvent = {
    title: 'Are you going to the university?',
    options: [
        {
            label: 'parents',
            decision: 'Ask to my parents to pay it',
            accepted_msg: 'My parents agreed to pay it',
            declined_msg: 'My parents declined to pay it'
        },
        {   
            label: 'loan',
            decision: 'Ask for a student loan',
            accepted_msg: 'I applied for a student loan'
        },
        {   
            label: 'myself',
            decision: 'Pay it by myself',
            accepted_msg: 'I am paying my university right now',
            declined_msg: 'I cant afford a university'
        }, 
        {
            label: 'no',
            decision: 'No way!',
            accepted_msg: 'Not gonna go to university lol, I will be a streamer mom!'
        }
    ],
    careerChoose: {
        title: 'Choose a career',
        body: `
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
    }
}