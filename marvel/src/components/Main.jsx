import React, { Component } from "react";
import NavbarContainer from "../containers/NavbarContainer";
import CardContainer from "../containers/CardContainer";
import { Route, Switch } from "react-router-dom";
import CharacterComicsContainer from "../containers/CharacterComicsContainer";
import store from "../store/store";
import { fetchRandom } from "../store/actions/action-creator";

class Main extends Component {
  componentDidMount() {
    store.dispatch(fetchRandom());
  }

  render() {
    return (
      <div>
        <NavbarContainer></NavbarContainer>
        <Switch>
          <Route exact path="/" component={CardContainer} />
          <Route path="/character/:id" component={CharacterComicsContainer} />
        </Switch>
      </div>
    );
  }
}

export default Main;
