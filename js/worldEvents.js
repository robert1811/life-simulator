const worldEvents = {}

// they display eventually and dont affect any character

worldEvents.randomWar = () => {
    let i = Math.floor(Math.random() * countriesData.length);
    let j = Math.floor(Math.random() * countriesData.length);
    if(i === j){
        j--;
        if(j === -1) j = 2;
    };

    const casusBellis = ['because they have chemical weapons', 'due to their human rights violations', 'they have stolen their land', 'because they want to overthrow their dictatorship', 'in order to restore their democracy'];
    const randomCasusBellis = Math.floor(Math.random() * casusBellis.length);

    return `${countriesData[i].country} has declared war on ${countriesData[j].country} ${casusBellis[randomCasusBellis]}`
    
}

worldEvents.randomAsteroid = () =>{
    let i = Math.floor(Math.random() * countriesData.length);
    let casualties = Math.floor(Math.random() * 5000);

    return `An asteroid crashed in ${countriesData[i].country}, ${casualties} people died`;
}

worldEvents.randomTerroristAttack = () => {
    let i = Math.floor(Math.random() * countriesData.length);
    let casualties = Math.floor(Math.random() * 120);
    let injuried = Math.floor(Math.random() * 150)

    return `Terrorist attack in ${countriesData[i].country}, ${casualties} deaths and ${injuried} injuried`
}

const worldEventsMethodArr = Object.entries(worldEvents);
const worldEventsAmount = worldEventsMethodArr.length;

