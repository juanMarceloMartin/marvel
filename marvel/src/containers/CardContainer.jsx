import React, { Component } from "react";
import Card from "../components/Card/Card";
import { connect } from "react-redux";

class CardContainer extends Component {}

const mapStateToProps = state => {
  return {
    random: state.random,
    character: state.character
  };
};

export default connect(mapStateToProps, null)(Card);
