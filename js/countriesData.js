"use strict";

const countriesData = [
    { country: 'United States', nationality: 'american', languaje: 'english' },
    { country: 'Canada', nationality: 'canadian', languaje: 'english' },
    { country: 'Mexico', nationality: 'mexican', languaje: 'spanish' },
    { country: 'Guatemala', nationality: 'guatemalan', languaje: 'spanish' },
    { country: 'Belice', nationality: 'belizean', languaje: 'english' },
    { country: 'Honduras', nationality: 'honduran', languaje: 'spanish' },
    { country: 'Nicaragua', nationality: 'nicaraguan', languaje: 'spanish' },
    { country: 'Costa Rica', nationality: 'costa rican', languaje: 'spanish' },
    { country: 'Panama', nationality: 'panamanian', languaje: 'spanish' },
    { country: 'Colombia', nationality: 'colombian', languaje: 'spanish' },
    { country: 'Venezuela', nationality: 'venezuelan', languaje: 'spanish' },
    { country: 'Brazil', nationality: 'brazilian', languaje: 'portuguese' },
    { country: 'Ecuador', nationality: 'ecuadorian', languaje: 'spanish' },
    { country: 'Peru', nationality: 'peruvian', languaje: 'spanish' },
    { country: 'Chile', nationality: 'chilean', languaje: 'spanish' },
    { country: 'Bolivia', nationality: 'bolivian', languaje: 'spanish' },
    { country: 'Paraguay', nationality: 'paraguayan', languaje: 'spanish' },
    { country: 'Argentina', nationality: 'argentinean', languaje: 'spanish' },
    { country: 'Uruguay', nationality: 'uruguayan', languaje: 'spanish' },
    { country: 'Cuba', nationality: 'cuban', languaje: 'spanish' },
    { country: 'Portugal', nationality: 'portuguese', languaje: 'portuguese' },
    { country: 'Spain', nationality: 'spaniard', languaje: 'spanish' },
    { country: 'France', nationality: 'french', languaje: 'french' },
    { country: 'Germany', nationality: 'german', languaje: 'german' },
    { country: 'Italy', nationality: 'italian', languaje: 'italian' },
    { country: 'United Kingdom', nationality: 'british', languaje: 'english' },
    { country: 'Ireland', nationality: 'irish', languaje: 'irish' },
    { country: 'Ukraine', nationality: 'ukrainian', languaje: 'ukrainian' },
    { country: 'Russia', nationality: 'russian', languaje: 'russian' },
    { country: 'Sweeden', nationality: 'sweedish', languaje: 'sweedish' },
    { country: 'Finland', nationality: 'finnish', languaje: 'finnish' },
    { country: 'China', nationality: 'chinese', languaje: 'chinese' },
    { country: 'Taiwan', nationality: 'taiwanese', languaje: 'chinese' },
    { country: 'Japan', nationality: 'japanese', languaje: 'japanese' },
    { country: 'South Korea', nationality: 'south korean', languaje: 'korean' },
    { country: 'North Korea', nationality: 'north korean', languaje: 'korean' },
    { country: 'India', nationality: 'indian', languaje: 'hindi' },
    { country: 'Saudi Arabia', nationality: 'arab', languaje: 'arab' },
    { country: 'Syria', nationality: 'syrian', languaje: 'arab' },
    { country: 'Iraq', nationality: 'iraqi', languaje: 'arab' },
    { country: 'Israel', nationality: 'israeli', languaje: 'hebrew' },
    { country: 'Egypt', nationality: 'egyptian', languaje: 'arab' },
    { country: 'Libya', nationality: 'libyan', languaje: 'arab' },
    { country: 'Morocco', nationality: 'moroccan', languaje: 'arab' },
    { country: 'Algeria', nationality: 'algerian', languaje: 'arab' },
    { country: 'Turkey', nationality: 'turkish', languaje: 'turkish' },
    { country: 'Armenia', nationality: 'armenian', languaje: 'armenian' },
    { country: 'South Africa', nationality: 'south africam', languaje: 'english' },
    { country: 'Australia', nationality: 'australian', languaje: 'english' }
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
        male: ['Akira', 'Kuta', 'Hiroshi', 'Kousei'],
        female: ['Aiko', 'Aoi', 'Hana', 'Akira', 'Tsubaki']
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
        male: ['Hans', 'Heinrich', 'Joseph', 'Adolf', 'Erich', 'Paul', 'Ernst', 'Gunter', 'Friedrich', 'Arthur', 'Otto'],
        female: ['Erika', 'Frida', 'Annelies', 'Matilde']
    },
    italian: {
        male: ['Giuseppe', 'Luigi', 'Victor', 'Mario', 'Roberto', 'Benito','Giorno'],
        female: ['Emma', 'Beatrice', 'Sofia', 'Alice']
    },
    russian: {
        male: ['Vladimir', 'Aleksander', 'Ivan', 'Igor', 'Pyotr'],
        female: ['Natasha']
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
    ukrainian:{
        male: ['Volodimir'],
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
    russian: ['Putin', 'Gorbachov', 'Ivanovich', 'Petrikov'],
    sweedish: ['Johansson', 'Andersson', 'Karlsson'],
    finnish: ['Koskinen', 'Heikkinen', 'Korhonen'],
    irish: ['Murphy', 'McCarthy', 'Doyle'],
    armenian: ['Grigoryan', 'Sargsyan', 'Harutyunyan'],
    ukrainian:['Zelensky'],
}