import React, { Component } from "react";
import { connect } from "react-redux";
import { setRecipes } from "../actions";

import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

class SearchRecipes extends Component {
  state = {
    ingredients: "",
    dish: ""
  };

  search = () => {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    console.log("state", this.state, "url", url);

    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.props.setRecipes(json.results);
      });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Form inline className="container mt-4">
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>{" "}
          <FormControl
            name="ingredients"
            value={this.state.ingredients}
            onChange={this.handleOnChange}
            type="text"
            placeholder="garlic, chicken"
          />
        </FormGroup>
        {""}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {""}
          <FormControl
            name="dish"
            value={this.state.dish}
            onChange={this.handleOnChange}
            type="text"
            placeholder="adobo"
          />
        </FormGroup>
        {""}
        <Button onClick={() => this.search()} className="btn btn-secondary">
          Submit
        </Button>
      </Form>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipes);
