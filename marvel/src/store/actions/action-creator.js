import { FETCH_CHARACTER, FETCH_RANDOM, FETCH_COMICS } from "../constants";
import axios from "axios";

const receiveCharacter = character => ({
  type: FETCH_CHARACTER,
  character
});

const receiveRandom = characters => ({
  type: FETCH_RANDOM,
  characters
});

const receiveComics = comics => ({
  type: FETCH_COMICS,
  comics
});

var md5 = require("md5");

const timeStamp = new Date().getTime();

const publicKey = "45f0935e0ee0f023f67df6ff1ce2b8ae";

const privateKey = "2a3feb8e2295e401ca9b995c25e89f3442b1c22a";

const hash = md5(timeStamp + privateKey + publicKey);

export const fetchCharacter = name => dispatch => {
  axios
    .get(
      `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&name=${name}
    `
    )
    .then(res => res.data)
    .then(character => dispatch(receiveCharacter(character.data.results)));
};

export const fetchRandom = () => dispatch => {
  axios
    .get(
      `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=8
  `
    )
    .then(res => res.data)
    .then(characters => dispatch(receiveRandom(characters.data.results)));
};

//INTENTO DE OBTENER LISTADO DE PERSONAJES RANDOM

// export const fetchRandom = () => dispatch => {
//   let id = `100${Math.floor(Math.random() * 10000)}`;
//   axios
//     .get(
//       `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&id=${id}
//   `
//     )
//     .then(res => res.data)
//     .then(characters => dispatch(receiveRandom(characters.data.results)));
// };

//PROBLEMA: Algunos de los id creados no existian en la base de datos.

export const fetchComics = characterId => dispatch => {
  axios
    .get(
      `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    )
    .then(res => res.data)
    .then(comics => dispatch(receiveComics(comics.data.results)));
};

export const fetchCharacterAndComics = name => dispatch => {
  axios
    .get(
      `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&name=${name}
      `
    )
    .then(res => res.data)
    .then(character => character.data.results[0].id)
    .then(id => {
      return axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
      );
    })
    .then(res => res.data)
    .then(comics => dispatch(receiveComics(comics.data.results)))
    .catch(() => {
      return axios
        .get(
          `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=8
    `
        )
        .then(res => res.data)
        .then(characters => dispatch(receiveRandom(characters.data.results)));
    });
};
