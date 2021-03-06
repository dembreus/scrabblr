import React from "react";

// internal components
import Scrabble from "./Scrabble.js";

//context from provider
import { MyContext } from "./App.js";

class GameArea extends React.Component {
  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div>
          
            <Scrabble
              tiles={context.state.tiles}
              updateTiles={context.updateTiles}
              scoreHash={context.state.scoreHash}
              isInGameLoop={context.state.isInGameLoop}
              checkForWords={context.checkForWords}
              tileClass={context.state.tileClass}
            />
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
export default GameArea;
