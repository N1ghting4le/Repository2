"use strict";

let answers = [];

let numberOfFilms;

let questions = ["Which film did you watch last time?", "What is your mark for this film?"];

function start() {
    numberOfFilms = +prompt("How many films you have watched?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films you have watched?");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm() {
    for (let i = 0; i < questions.length; i++) {
        answers[i] = prompt(questions[i]);
        if (answers === null || answers[i] === null || answers[i].length > 50 || answers[i] === "") {
            i--;
        }
    }
    personalMovieDB.movies[answers[0]] = answers[1];
}

rememberMyFilm();

function detectPersonalLevel() {
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
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();
