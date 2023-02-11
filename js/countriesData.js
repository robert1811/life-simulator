"use strict";

const countriesData = [
    {
        country: 'United States', nationality: 'american', language: 'english', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Canada', nationality: 'canadian', language: 'english', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Mexico', nationality: 'mexican', language: 'spanish', laws: {
            abort: false,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Guatemala', nationality: 'guatemalan', language: 'spanish', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Belice', nationality: 'belizean', language: 'english', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Honduras', nationality: 'honduran', language: 'spanish', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Nicaragua', nationality: 'nicaraguan', language: 'spanish', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Costa Rica', nationality: 'costa rican', language: 'spanish', laws: {
            abort: false,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Panama', nationality: 'panamanian', language: 'spanish', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Colombia', nationality: 'colombian', language: 'spanish', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Venezuela', nationality: 'venezuelan', language: 'spanish', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Brazil', nationality: 'brazilian', language: 'portuguese', laws: {
            abort: false,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Ecuador', nationality: 'ecuadorian', language: 'spanish', laws: {
            abort: false,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Peru', nationality: 'peruvian', language: 'spanish', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Chile', nationality: 'chilean', language: 'spanish', laws: {
            abort: false,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Bolivia', nationality: 'bolivian', language: 'spanish', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Paraguay', nationality: 'paraguayan', language: 'spanish', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Argentina', nationality: 'argentinean', language: 'spanish', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Uruguay', nationality: 'uruguayan', language: 'spanish', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Cuba', nationality: 'cuban', language: 'spanish', laws: {
            abort: true,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Portugal', nationality: 'portuguese', language: 'portuguese', laws: {
            abort: true,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Spain', nationality: 'spaniard', language: 'spanish', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'France', nationality: 'french', language: 'french', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Germany', nationality: 'german', language: 'german', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Italy', nationality: 'italian', language: 'italian', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'United Kingdom', nationality: 'british', language: 'english', laws: {
            abort: false,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Ireland', nationality: 'irish', language: 'irish', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Ukraine', nationality: 'ukrainian', language: 'ukrainian', laws: {
            abort: true,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Russia', nationality: 'russian', language: 'russian', laws: {
            abort: true,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Sweeden', nationality: 'sweedish', language: 'sweedish', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Finland', nationality: 'finnish', language: 'finnish', laws: {
            abort: false,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'China', nationality: 'chinese', language: 'chinese', laws: {
            abort: true,
            gay_weddings: false,
            banned_youtube: true,
            banned_instagram: true
        }
    },
    {
        country: 'Taiwan', nationality: 'taiwanese', language: 'chinese', laws: {
            abort: false,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Japan', nationality: 'japanese', language: 'japanese', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'South Korea', nationality: 'south korean', language: 'korean', laws: {
            abort: true,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'North Korea', nationality: 'north korean', language: 'korean', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: true,
            banned_instagram: true
        }
    },
    {
        country: 'India', nationality: 'indian', language: 'hindi', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Saudi Arabia', nationality: 'arab', language: 'arab', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Syria', nationality: 'syrian', language: 'arab', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Iraq', nationality: 'iraqi', language: 'arab', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Israel', nationality: 'israeli', language: 'hebrew', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Egypt', nationality: 'egyptian', language: 'arab', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Libya', nationality: 'libyan', language: 'arab', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Morocco', nationality: 'moroccan', language: 'arab', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Algeria', nationality: 'algerian', language: 'arab', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Turkey', nationality: 'turkish', language: 'turkish', laws: {
            abort: true,
            gay_weddings: false,
            banned_youtube: true,
            banned_instagram: false
        }
    },
    {
        country: 'Armenia', nationality: 'armenian', language: 'armenian', laws: {
            abort: false,
            gay_weddings: false,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'South Africa', nationality: 'south africam', language: 'english', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    },
    {
        country: 'Australia', nationality: 'australian', language: 'english', laws: {
            abort: true,
            gay_weddings: true,
            banned_youtube: false,
            banned_instagram: false
        }
    }
];

const names = {
    spanish: {
        male: ['Abraham', 'Adolfo', 'Adrian', 'Alejandro', 'Alejandro', 'Alexander', 'Andres', 'Armando', 'Arturo', 'Benjamin', 'Carlos', 'Daniel', 'David', 'Edixon', 'Eduardo', 'Edward', 'Emanuel', 'Emiliano', 'Enmanuel', 'Ernesto', 'Felix', 'Francisco', 'Franco', 'Genaro', 'Geronimo', 'Humberto', 'Ignacio', 'Jesús', 'Josue', 'José', 'Julian', 'Lautaro', 'Lucas', 'Matias', 'Mauricio', 'Miguel', 'Omar', 'Pedro', 'Rigoberto', 'Roberto', 'Rodolfo', 'Rodrigo', 'Santiago', 'Saul', 'Thiago'],
        female: ['Juana', 'Sofia', 'Ariana', 'Victoria', 'Arianna', 'Daniela', 'Hilda', 'Carmen', 'Sara', 'Maria', 'Valentina', 'Aleina', 'Jimena', 'Valeria', 'Aura', 'Juliana', 'Alejandra', 'Francisca', 'Yazmina', 'Carolina', 'Julieta', 'Juliana']
    },
    english: {
        male: ['Thomas', 'Edward', 'Charles', 'Robert', 'Joseph', 'Daniel', 'Mathew', 'John', 'Benjamin', 'Humbert', 'Andrew', 'Adolf', 'Saul', 'James', 'Tyler'],
        female: ['Sophie', 'Victoria', 'Sara', 'Olivia', 'Amelia', 'Emily', 'Emma', 'Enid']
    },
    portuguese: {
        male: ['Joao', 'Alexander', 'Aleixo', 'Abrahao', 'Roberto', 'Jesus', 'Donato', 'Mateus', 'Marcelo'],
        female: ['Ana', 'Maria', 'Rosa', 'Isabel']
    },
    french: {
        male: ['Jean', 'Paul', 'Adrien', 'Oliver'],
        female: ['Paulette', 'Lucie', 'Nadine']
    },
    arab: {
        male: ['Abdul', 'Ibrahim', 'Osama', 'Abdel', 'Hassan'],
        female: ['Abir', 'Abla', 'Amira', 'Badra']
    },
    hebrew: {
        male: ['Aaron', 'Abner', 'Asaf'],
        female: ['Ada', 'Ana', 'Daniela', 'Ariel']
    },
    japanese: {
        male: ['Akira', 'Kuta', 'Hiroshi', 'Kousei', 'Tenma'],
        female: ['Aiko', 'Aoi', 'Hana', 'Akira', 'Tsubaki', 'Chihiro']
    },
    korean: {
        male: ['Kim', 'Yejun', 'SeoJoon', 'Jiho'],
        female: ['Suni', 'Yon', 'Mi-Suk']
    },
    turkish: {
        male: ['Adem', 'Acar', 'Kadir'],
        female: ['Adalet', 'Asya', 'Ayla', 'Damla']
    },
    hindi: {
        male: ['Brahma', 'Madhur', 'Ranjit', 'Apu'],
        female: ['Uma', 'Denali', 'Indira']
    },
    german: {
        male: ['Hans', 'Heinrich', 'Joseph', 'Adolf', 'Erich', 'Paul', 'Ernst', 'Gunter', 'Friedrich', 'Arthur', 'Otto', 'Johan', ''],
        female: ['Erika', 'Frida', 'Annelies', 'Matilde', 'Anna', 'Nina', 'Berta', 'Emilia']
    },
    italian: {
        male: ['Giuseppe', 'Luigi', 'Victor', 'Mario', 'Roberto', 'Benito', 'Giorno'],
        female: ['Emma', 'Beatrice', 'Sofia', 'Alice']
    },
    russian: {
        male: ['Vladimir', 'Aleksander', 'Ivan', 'Igor', 'Pyotr'],
        female: ['Natasha', 'Dasha', 'Irina', 'Tasya', 'Zaria', 'Karenina']
    },
    sweedish: {
        male: ['Acke', 'Aleksander'],
        female: ['Ottilia', 'Ellie', 'Aischa']
    },
    finnish: {
        male: ['Onni', 'Eetu', 'Elias', 'Aleksi'],
        female: ['Sofia', 'Lia', 'Lily']
    },
    irish: {
        male: ['Brian', 'Aidan'],
        female: ['Brianna', 'Adara']
    },
    armenian: {
        male: ['Davit', 'Narek', 'Tigran', 'Alex'],
        female: ['Maria', 'Yeva', 'Nare']
    },
    ukrainian: {
        male: ['Volodimir', 'Bohdan', 'Anton', 'Anatoliy', 'Borys', 'Gleb', 'Georgiy', 'Ivan'],
        female: ['Nataliya', 'Natalka', 'Oleksandra', 'Mariya']
    },
    chinese: {
        male: ['Bao', 'Da', 'Jin', 'Hong'],
        female: ['Xiang', 'Shui', 'Yun']
    }
}

const surnames = {
    spanish: ['Gonzales', 'Gonzalez', 'Jimenez', 'Chavez', 'Andreone', 'Arevalo', 'Acosta', 'Rodriguez', 'Gomez', 'Oviedo', 'Hernandez', 'Paredes', 'Torres', 'Valenzuela', 'Nuñez', 'Muñoz', 'Andrade', 'Enrique', 'Coronado', 'Preciado', 'Pineda', 'Moreyra'],
    english: ['Johnson', 'Adamson', 'Jobs', 'Gates', 'Bush', 'Adams'],
    portuguese: ['Freitas', 'De Sousa', 'Aveiro', 'Silva'],
    french: ['Lamont', 'Martin', 'Bernard'],
    arab: ['Ahmad', 'Abadi', 'Ayad', 'Ramaiti'],
    hebrew: ['Friedman', 'Bernstein', 'Lewin'],
    japanese: ['Tanaka', 'Sato', 'Yamamoto'],
    korean: ['Kim', 'Lee', 'Choi'],
    turkish: ['Kaya', 'Aydin', 'Demir'],
    hindi: ['Kumar', 'Devi', 'Singh', 'Ram'],
    german: ['Schmid', 'Schneider', 'Ehrmantraut', 'Weber'],
    italian: ['Vecchio', 'Giordano', 'Giovanna'],
    russian: ['Gorbachov', 'Ivanovich', 'Petrikov', 'Ivanov', 'Ivanova', 'Petrov', 'Petrova', 'Magomedov', 'Kuznetsov'],
    sweedish: ['Johansson', 'Andersson', 'Karlsson'],
    finnish: ['Koskinen', 'Heikkinen', 'Korhonen'],
    irish: ['Murphy', 'McCarthy', 'Doyle'],
    armenian: ['Grigoryan', 'Sargsyan', 'Harutyunyan'],
    ukrainian: ['Bondarenko', 'Kovalenko', 'Boiko', 'Tkachenko', 'Kravchenko', 'Kovalchuk'],
}

const popularYoutubers = [
    { user: 'Sr Bestia', subscribers: 190000000 },
    { user: 'Piudipai', subscribers: 111000000 },
    { user: 'ORichMC', subscribers: 10000000 },
    { user: 'BBE', subscribers: 92000000 },
    { user: 'Piernafloo', subscribers: 52000000 },
    { user: 'PlayGeorge', subscribers: 90000000 },
    { user: 'Rincon de Jose', subscribers: 46000000 },
    { user: 'Fast', subscribers: 58200000 }
]