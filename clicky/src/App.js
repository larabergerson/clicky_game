import React, { Component } from "react";
import Card from "./components/card/card";
import Wrapper from "./components/wrapper/wrapper";
import Header from "./components/header/header";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>Clicky Game</Header>
        {this.state.friends.map(friend => (
          <Card
            // id={friend.id}
            // key={friend.id}
            // name={friend.name}
            image={friend.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
