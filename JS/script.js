"use strict";

let numberOfFilms = +prompt("How many films you have watched", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("Which film did you watch last time?", ""),
    b = prompt("What is your mark for this  film?", "");

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);