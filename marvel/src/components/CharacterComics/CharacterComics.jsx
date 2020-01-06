import React from "react";
import "./CharacterComics.css";

export default function CharacterComics(props) {
  const { character, comics } = props;
  return (
    <div className="container">
      {character.length ? (
        <section>
          <div className="characterPic">
            <img
              id="photo"
              alt="avatar"
              src={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`}
            ></img>
            <div className="comicCardContainer">
              <h1>
                <b>{character[0].name}</b>
              </h1>
              <p>{character[0].description}</p>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h1>{character[0].name} Comics</h1>
          </div>
        </section>
      ) : null}

      <div className="container">
        {comics.map((comic, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt="avatar"
                style={{ width: "100%" }}
              ></img>
              <div className="cardContainer">
                <h4>
                  <b>{comic.title}</b>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
