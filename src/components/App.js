import React from 'react';
import { Header } from './header/';
import Main from './main/';

class App extends React.Component {

    state = {
        score: 0,
    };

    addScore = (newScore) => {
        this.setState((state) => {
            return {
                score: state.score + newScore,
            }
        })
    };

    gameEnd = () => {

    }

    render() {
        const { score } = this.state;

        return (
            <>
                <Header score={score}/>
                <Main onChangeScore={this.addScore} />
            </>
        );
    }
}

export default App;
