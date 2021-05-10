import React from 'react';

import './Field.scss';

export class Field extends React.Component {
  state = {
    gameOver: false,
    gameWin: false,
    isGameContinue: false,
  }

  startNewGame = () => {
    this.setState({
      gameOver: false,
      gameWin: false,
      isGameContinue: false,
    })

    this.props.onNewGame();
  }

  continueGame = () => {
    this.setState({
        isGameContinue: true,
    })
  }

  setGameOver() {
    return (
        <li className="game-over">
          <button
              className="game-over__button"
              onClick={this.startNewGame}
          >
            NewGame
          </button>
        </li>
    )
  }

  setGameWin() {
    return (
        <li className="game-over">
          <button
              className="game-over__button"
              onClick={this.startNewGame}
          >
            NewGame
          </button>
          <button className="game-over__button"
                  onClick={this.continueGame}
          >
            Continue
          </button>
        </li>
    )
  }

    render() {
    const { items, gameWin }= this.props;
    const { isGameContinue } = this.state;
    let gameOver = null;
    let gameWinRender = null;

    if (this.props.gameOver) {
      gameOver = this.setGameOver();
    }

    if (gameWin && !isGameContinue) {
        gameWinRender = this.setGameWin();
    }

    return (
        <ul className={'field'}>
          {gameWinRender}
          {gameOver}
          {items.map(item => (
            <li
                className={'field__item'}
                key={item.id}
            >
              {item.value}
            </li>
          ))}
        </ul>
    );
  }
}
