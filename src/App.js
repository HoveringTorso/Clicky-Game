import React, { Component } from "react";
import NavBar from "./components/Navbar.js";
import Card from "./components/Card.js";
// import Score from "./components/Score.js";
import characters from "./Characters.json";
import "./App.css";

class App extends Component {

  state = {
    characters: characters,
    score: 0,
    maxScore: 12,
    topScore: 0
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
          {characters.map(({ id, name, image, clicked }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              clicked={clicked}
              clickHandler={this.handleSaveClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
