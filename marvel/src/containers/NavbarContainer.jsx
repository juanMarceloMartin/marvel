import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import {
  fetchCharacter,
  fetchCharacterAndComics
} from "../store/actions/action-creator";
import { connect } from "react-redux";

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchCharacter(this.state.name);
    this.props.fetchCharacterAndComics(this.state.name);
  }

  render() {
    return (
      <Navbar
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      ></Navbar>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCharacter: name => dispatch(fetchCharacter(name)),
  fetchCharacterAndComics: name => dispatch(fetchCharacterAndComics(name))
});

export default connect(null, mapDispatchToProps)(NavbarContainer);
