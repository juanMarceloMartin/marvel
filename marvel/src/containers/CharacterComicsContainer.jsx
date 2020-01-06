import React, { Component } from "react";
import CharacterComics from "../components/CharacterComics/CharacterComics";
import { connect } from "react-redux";
import { fetchCharacter, fetchComics } from "../store/actions/action-creator";

class CharacterComicsContainer extends Component {}

const mapStateToProps = state => {
  return {
    comics: state.comics,
    character: state.character
  };
};

export default connect(mapStateToProps, null)(CharacterComics);
