"use strict";

let answers = [];

let questions = ["How many films you have watched?",
                "Which film did you watch last time?",
                "What is your mark for this  film?"];

for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i]);
    if (answers === null || answers[i] === null || answers[i].length > 50 || answers[i] === "") {
        i--;
    }
}

let personalMovieDB = {
    count: answers[0],
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
    personalMovieDB.count = null; 
}

personalMovieDB.movies[answers[1]] = answers[2];

console.log(personalMovieDB);