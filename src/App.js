import React, { Component } from 'react';
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./imagecards.json";
import './App.css';

let correctClicks = 0;
let bestScore = 0;
let gameMessage = "Click on an image once to earn a point, but don't click on image twice!";
class App extends Component {
  // set this.state.images to the imagecards json array
  state = {
    images,
    correctClicks,
    bestScore,
    gameMessage
}; 

setClicked = id => {

  const images = this.state.images;
  const clickedPic = images.filter(image => image.id === id);

  if (clickedPic[0].clicked){

      console.log ("Correct Clicks: " + correctClicks);
      console.log ("Best Score: " + bestScore);

      correctClicks = 0;
      gameMessage = "Shame! You already clicked on that one! Start Again!"

      for (let i = 0 ; i < images.length ; i++){
          images[i].clicked = false;
      }

      this.setState({gameMessage});
      this.setState({ correctClicks });
      this.setState({images});

  } else if (correctClicks < 11) {

      clickedPic[0].clicked = true;
      correctClicks++;
      
      gameMessage = "Your memory is strong! Onward!";

      if (correctClicks > bestScore){
          bestScore = correctClicks;
          this.setState({ bestScore });
      }
      //sorting array in a random order
      images.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({ images });
      this.setState({correctClicks});
      this.setState({gameMessage});
  } else {

      clickedPic[0].clicked = true;
      correctClicks = 0;

      gameMessage = "Congratulations! You've won the Game of Clicks!";
      bestScore = 12;
      this.setState({ bestScore });
      //start the game over
      for (let i = 0 ; i < images.length ; i++){
          images[i].clicked = false;
      }

      // Shuffle the image array
      images.sort(function(a, b){return 0.5 - Math.random()});

      // resets this.state.images equal to the new shuffled array
      this.setState({ images });
      this.setState({correctClicks});
      this.setState({gameMessage});

  }
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Game of Clicks</h1>
        <h3 className="gameDirections">{this.state.gameMessage} </h3>
          <h4 > Score: {this.state.correctClicks}  <span> | </span> Top Score: {this.state.bestScore} </h4>
        </header>
        <Wrapper>
        {this.state.images.map(image => (
                    <ImageCard
                        setClicked={this.setClicked}
                        id={image.id}
                        key={image.id}
                        image={image.image}
                    />
                ))}
        </Wrapper>
        
      </div>
    );
  }
}

export default App;
