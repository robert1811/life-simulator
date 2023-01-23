const childhoodEducation = {
    preschool: {
        label:'Preschool',
        since: 3,
        until: 5,
    },
    elementary: {
        label: 'Elementary school',
        since: 5,
    }
}

const universityCareers = {
    medic: {
        label: 'medic',
        name: 'Medic',
        duration: 4
    },
    computerScience: {
        label: 'computerScience',
        name: 'Computer science',
        duration: 4
    },
    biology: {
        label: 'biology',
        name: 'Biology',
        duration: 4
    },
    chemistry: {
        label: 'chemistry',
        name: 'Chemistry',
        duration: 4
    },
    history : {
        label: 'history',
        name: 'History',
        duration: 4
    },
    politicalScience: {
        label: 'politicalScience',
        name: 'Political science',
        duration: 4
    },
    math: {
        label: 'math',
        name: 'Math',
        duration: 4
    },


}

const jobs = [
    {
        label: 'Jr App Developer',
        requirements: {
            education: 'computerScience',
            programming: 3
        },
        salary: 55000,
        field: 'technology',
        promotion: 'App Developer'
    }, {
        label: 'App Developer',
        requirements: {
            education: 'computerScience',
            programming: 5
        },
        salary: 75000,
        field: 'technology',
        promotion: 'Sr App Developer'
    }, {
        label: 'Sr App Developer',
        requirements: {
            education: 'computerScience',
            programming: 8
        },
        salary: 100000,
        field: 'technology',
        promotion: 'none'
    }, {
        label: 'Supermarket cashier',
        requirements: {
            minAge: 16
        },
        salary: 25000,
        field: '',
        promotion: 'none'
    },{
        label: 'Janitor',
        requirements: {
            minAge: 16
        },
        salary: 18000,
        field: '',
        promotion: 'none'
    }, {
        label: 'History teacher',
        requirements: {
            minAge: 20,
            education: 'history'
        },
        salary: 50000,
        field: 'history',
        promotion: 'none'
    },{
        label: 'Math teacher',
        requirements: {
            minAge: 20,
            education: 'math'
        },
        salary: 50000,
        field: 'math',
        promotion: 'none'
    },{
        label: 'Gym trainer',
        requirements: {
            minAge: 18,
            fitness: 70
        },
        salary: 36000,
        field: 'fitness',
        promotion: 'none'
    }, {
        label: 'Chemistry teacher',
        requirements: {
            minAge: 20,
            education: 'chemistry'
        },
        salary: 50000,
        field: 'chemistry',
        promotion: 'none'
    }, {
        label: 'Biology teacher',
        requirements: {
            minAge: 20,
            education: 'biology'
        },
        salary: 50000,
        field: 'biology',
        promotion: 'none'
    }, {
        label: 'Jr Web developer',
        requirements: {
            minAge: 18,
            education: 'computerScience',
            programming: 2
        },
        salary: 52000,
        field: 'technology',
        promotion: 'Web developer'
    }, {
        label: 'Web developer',
        requirements: {
            education: 'computerScience',
            programming: 4
        },
        salary: 65000,
        field: 'technology',
        promotion: 'Sr Web developer'
    }, {
        label: 'Sr Web developer',
        requirements: {
            education: 'computerScience',
            programming: 7
        },
        salary: 80000,
        field: 'technology',
        promotion: 'none'
    }, {
        label: 'Truck driver',
        requirements: {
            driverLicense: true
        },
        salary: 40000,
        field: 'transport',
        promotion: 'none'
    }, {
        label: 'Taxi driver',
        requirements: {
            driverLicense: true
        },
        salary: 48000,
        field: 'transport',
        promotion: 'none'
    }, {
        label: 'Music teacher',
        requirements: {
            education: 'music',
            music: 2
        },
        salary: 50000,
        field: 'music',
        promotion: 'none'
    }, {
        label: 'Pianist',
        requirements: {
            education: 'music',
            music: 4
        },
        salary: 55000,
        field: 'music',
        promotion: 'none'
    }, {
        label: 'Guru',
        requirements: {
            happiness: 100,
            health: 100,
            minAge: 18,
            criminalRecord: 'clean'
        },
        salary: 78000,
        promotion: 'none'
    }
];