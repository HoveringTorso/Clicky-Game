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

    // Main click listener function
    clickListener = id => {
      // Variable to hold the characters' state.
      const characters = this.state.characters;
      // Search through character tiles to find the one that matches the clicked id.
      const tileClicked = characters.filter(tile => tile.id === id);
  
      // If the tile isn't clicked...
      if (!tileClicked[0].clicked) {
        // ...set it to now be clicked
        tileClicked[0].clicked = true;
        // ...call this function to register the correct guess
        this.handleCorrectClick();
  
        // ... randomize character tiles
        this.randomizeCharacters(characters);
  
        this.setState({ characters });
      } else {
        this.handleIncorrectClick();
      }
    };
  
    // Function to randomize the characters
    randomizeCharacters = characters => {
      characters.sort((a, b) => {
        return 0.5 - Math.random();
      });
    };
  
    // Handler for correct guesses/clicks
    handleCorrectClick = () => {
      this.setState({ isGuessCorrect: true });
      if (this.state.score + 1 > this.state.topScore) {
        this.setState({ topScore: this.state.topScore + 1 });
      }
      if (this.state.score + 1 >= this.state.maxScore) {
        this.setState({
          score: this.state.score + 1
        });
      } else {
        this.setState({
          score: this.state.score + 1
        });
      }
    };
  
    // Handler for incorrect guesses/clicks
    handleIncorrectClick = () => {
      this.setState({
        isGuessCorrect: false
      });
      this.resetGame();
    };
  
    // Resets the game
    resetGame = () => {
      const characters = this.state.characters;
      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }
      this.setState({ score: 0 });
      this.randomizeCharacters(characters);
    };
  

  render() {
    return (
      <div className="App">
        <NavBar score={this.state.score} topScore={this.state.topScore}/>
        <div className="container d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
          {characters.map(({ id, name, image, clicked }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              clicked={clicked}
              clickHandler={this.clickListener}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
