import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import {
  fetchCharacter,
  fetchComics
} from "../../store/actions/action-creator";
import store from "../../store/store";

export default function Card(props) {
  const { random, character } = props;
  return (
    <div className="container">
      {character.length ? (
        <Link to={`/character/${character[0].id}`} key={character[0].id}>
          <div
            className="card"
            key={character[0].id}
            onClick={() => {
              store.dispatch(fetchComics(character[0].id));
            }}
          >
            <img
              alt="avatar"
              src={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`}
              style={{ width: "100%" }}
            ></img>

            <div className="cardContainer">
              <h4>
                <b>{character[0].name}</b>
              </h4>
            </div>
          </div>
        </Link>
      ) : (
        random.map((random, index) => {
          return (
            <Link to={`/character/${random.id}`} key={index}>
              <div
                className="card"
                key={index}
                onClick={() => {
                  store.dispatch(fetchCharacter(random.name));
                  store.dispatch(fetchComics(random.id, random.name));
                }}
              >
                <img
                  alt="avatar"
                  src={`${random.thumbnail.path}.${random.thumbnail.extension}`}
                  style={{ width: "100%" }}
                ></img>
                <div className="cardContainer">
                  <h4>
                    <b>{random.name}</b>
                  </h4>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}
