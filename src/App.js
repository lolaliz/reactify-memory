import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import matches from "./imagecards.json";
import './App.css';

class App extends Component {
  // Setting this.state.matches to the matches json array
  state = {
    matches
    // correctGuesses,
    // bestScore,
    // clickMessage
}; 
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p className="App-title">Click an image to begin!</p>
        <p> -Click on an image once, earn a point
            -don't click on an image more than once!</p>
          <h1 > Score:  <span> | </span> Top Score: </h1>
        </header>
        <Wrapper>
        {this.state.matches.map(match => (
                    <ImageCard
                        //setClicked={this.setClicked}
                        id={match.id}
                        key={match.id}
                        image={match.image}
                    />
                ))}
        </Wrapper>
        
      </div>
    );
  }
}

export default App;
