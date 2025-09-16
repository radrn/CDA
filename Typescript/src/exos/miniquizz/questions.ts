export const questions: Array<string> = [
    "Combien font 2 + 2 ?",
    "Quelle est la capitale de la France ?",
    "Combien de jours dans une semaine ?",
    "Quel langage est exécuté dans le navigateur ?",
    "Combien de continents y a-t-il sur Terre ?"
];

export const options: Array<Array<string|number>> = [
    [3, 4, 5, 6], // pour la question 1
    ["Paris", "Londres", "Rome", "Berlin"], // pour la question 2
    [5, 6, 7, 8], // pour la question 3
    ["JavaScript", "Python", "C++", "Java"], // pour la question 4
    [5, 6, 7] // pour la question 5
];

export const correctAnswers:Array<string|number> = [
    4,
    "Paris",
    7,
    "JavaScript",
    7
];