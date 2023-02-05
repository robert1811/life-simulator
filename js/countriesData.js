"use strict";

const countriesData = [
    { country: 'United States', nationality: 'american', language: 'english' },
    { country: 'Canada', nationality: 'canadian', language: 'english' },
    { country: 'Mexico', nationality: 'mexican', language: 'spanish' },
    { country: 'Guatemala', nationality: 'guatemalan', language: 'spanish' },
    { country: 'Belice', nationality: 'belizean', language: 'english' },
    { country: 'Honduras', nationality: 'honduran', language: 'spanish' },
    { country: 'Nicaragua', nationality: 'nicaraguan', language: 'spanish' },
    { country: 'Costa Rica', nationality: 'costa rican', language: 'spanish' },
    { country: 'Panama', nationality: 'panamanian', language: 'spanish' },
    { country: 'Colombia', nationality: 'colombian', language: 'spanish' },
    { country: 'Venezuela', nationality: 'venezuelan', language: 'spanish' },
    { country: 'Brazil', nationality: 'brazilian', language: 'portuguese' },
    { country: 'Ecuador', nationality: 'ecuadorian', language: 'spanish' },
    { country: 'Peru', nationality: 'peruvian', language: 'spanish' },
    { country: 'Chile', nationality: 'chilean', language: 'spanish' },
    { country: 'Bolivia', nationality: 'bolivian', language: 'spanish' },
    { country: 'Paraguay', nationality: 'paraguayan', language: 'spanish' },
    { country: 'Argentina', nationality: 'argentinean', language: 'spanish' },
    { country: 'Uruguay', nationality: 'uruguayan', language: 'spanish' },
    { country: 'Cuba', nationality: 'cuban', language: 'spanish' },
    { country: 'Portugal', nationality: 'portuguese', language: 'portuguese' },
    { country: 'Spain', nationality: 'spaniard', language: 'spanish' },
    { country: 'France', nationality: 'french', language: 'french' },
    { country: 'Germany', nationality: 'german', language: 'german' },
    { country: 'Italy', nationality: 'italian', language: 'italian' },
    { country: 'United Kingdom', nationality: 'british', language: 'english' },
    { country: 'Ireland', nationality: 'irish', language: 'irish' },
    { country: 'Ukraine', nationality: 'ukrainian', language: 'ukrainian' },
    { country: 'Russia', nationality: 'russian', language: 'russian' },
    { country: 'Sweeden', nationality: 'sweedish', language: 'sweedish' },
    { country: 'Finland', nationality: 'finnish', language: 'finnish' },
    { country: 'China', nationality: 'chinese', language: 'chinese' },
    { country: 'Taiwan', nationality: 'taiwanese', language: 'chinese' },
    { country: 'Japan', nationality: 'japanese', language: 'japanese' },
    { country: 'South Korea', nationality: 'south korean', language: 'korean' },
    { country: 'North Korea', nationality: 'north korean', language: 'korean' },
    { country: 'India', nationality: 'indian', language: 'hindi' },
    { country: 'Saudi Arabia', nationality: 'arab', language: 'arab' },
    { country: 'Syria', nationality: 'syrian', language: 'arab' },
    { country: 'Iraq', nationality: 'iraqi', language: 'arab' },
    { country: 'Israel', nationality: 'israeli', language: 'hebrew' },
    { country: 'Egypt', nationality: 'egyptian', language: 'arab' },
    { country: 'Libya', nationality: 'libyan', language: 'arab' },
    { country: 'Morocco', nationality: 'moroccan', language: 'arab' },
    { country: 'Algeria', nationality: 'algerian', language: 'arab' },
    { country: 'Turkey', nationality: 'turkish', language: 'turkish' },
    { country: 'Armenia', nationality: 'armenian', language: 'armenian' },
    { country: 'South Africa', nationality: 'south africam', language: 'english' },
    { country: 'Australia', nationality: 'australian', language: 'english' }
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
        female: ['Natasha', 'Dasha', 'Irina','Tasya', 'Zaria', 'Karenina']
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
    ukrainian:['Bondarenko', 'Kovalenko', 'Boiko', 'Tkachenko', 'Kravchenko', 'Kovalchuk'],
}