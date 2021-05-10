import React from 'react';
import { Field } from '../field/';

import './Main.scss'

class Main extends React.Component {
    state = {
        items: [
            {id: 0, x: 0, y: 0, value: null, isDone: false,},
            {id: 1, x: 1, y: 0, value: null, isDone: false,},
            {id: 2, x: 2, y: 0, value: null, isDone: false,},
            {id: 3, x: 3, y: 0, value: null, isDone: false,},
            {id: 4, x: 0, y: 1, value: null, isDone: false,},
            {id: 5, x: 1, y: 1, value: null, isDone: false,},
            {id: 6, x: 2, y: 1, value: null, isDone: false,},
            {id: 7, x: 3, y: 1, value: null, isDone: false,},
            {id: 8, x: 0, y: 2, value: null, isDone: false,},
            {id: 9, x: 1, y: 2, value: null, isDone: false,},
            {id: 10, x: 2, y: 2, value: null, isDone: false,},
            {id: 11, x: 3, y: 2, value: null, isDone: false,},
            {id: 12, x: 0, y: 3, value: null, isDone: false,},
            {id: 13, x: 1, y: 3, value: null, isDone: false,},
            {id: 14, x: 2, y: 3, value: null, isDone: false,},
            {id: 15, x: 3, y: 3, value: null, isDone: false,},
        ],
        changesWasDone: false,
        score: 0,
        isGameOver: false,
        isGameWin: false,
        isGameContinue: false,
    };

    moveLeft() {
        const cells = [...this.state.items];

        for(let i = 3; i > 0; i--) {

            for(let j = 3; j > 0; j--) {

                cells.forEach((cel, index) => {
                    if(cel.x === j && cel.value !== null) {
                        const currentVal = cel.value;
                        const nextVal = cells[index - 1].value;
                        const nextDone = cells[index - 1].isDone;
                        const currentDone = cel.isDone;

                        if(currentVal === nextVal && !nextDone && !currentDone) {
                            let totalVal = currentVal + nextVal;


                            cells[index - 1].value += currentVal;
                            cells[index - 1].isDone = true;
                            cel.value = null;
                            cel.isDone = true;
                            this.setState((state) => {
                                return {
                                    changesWasDone: true,
                                    score: state.score + totalVal,
                                }
                            });
                        } else if (nextVal === null) {
                            cells[index - 1].value += currentVal;
                            cel.value = null;
                            this.setState({
                                changesWasDone: true,
                            });
                        }
                    }
                });
            }
        }

        cells.forEach(e => e.isDone = false);

        this.setState({
            items: cells,
        });

        this.afterKeyUp()
    };

    moveRight() {
        const cells = [...this.state.items];

        for(let i = 3; i > 0; i--) {

            for(let j = 2; j >= 0; j--) {

                cells.forEach((cel, index) => {
                    if(cel.x === j && cel.value !== null) {
                        const currentVal = cel.value;
                        const nextVal = cells[index + 1].value;
                        const nextDone = cells[index + 1].isDone;
                        const currentDone = cel.isDone;

                        if(currentVal === nextVal && !nextDone && ! currentDone) {
                            const totalVal = currentVal + nextVal;


                            cells[index + 1].value += currentVal;
                            cells[index + 1].isDone = true;
                            cel.value = null;
                            cel.isDone = true;
                            this.setState((state) => {
                                return {
                                    changesWasDone: true,
                                    score: state.score + totalVal,
                                }
                            });
                        } else if (nextVal === null) {
                            cells[index + 1].value += currentVal;
                            cel.value = null;
                            this.setState({
                                changesWasDone: true,
                            });
                        }
                    }
                });
            }
        }

        cells.forEach(e => e.isDone = false);

        this.setState({
            items: cells,
        });

        this.afterKeyUp()
    };

    moveTop() {
        const cells = [...this.state.items];

        for(let i = 3; i > 0; i--) {

            for(let j = 1; j <= 3; j++) {

                cells.forEach((cel, index) => {
                    if(cel.y === j && cel.value !== null) {
                        const currentVal = cel.value;
                        const nextVal = cells[index - 4].value;
                        const nextDone = cells[index - 4].isDone;
                        const currentDone = cel.isDone;

                        if(currentVal === nextVal && !nextDone && !currentDone) {
                            const totalVal = currentVal + nextVal;

                            cells[index - 4].value += currentVal;
                            cells[index - 4].isDone = true;
                            cel.value = null;
                            cel.isDone = true;
                            this.setState((state) => {
                                return {
                                    changesWasDone: true,
                                    score: state.score + totalVal,
                                }
                            });
                        } else if (nextVal === null) {
                            cells[index - 4].value += currentVal;
                            cel.value = null;
                            this.setState({
                                changesWasDone: true,
                            });
                        }
                    }
                });
            }
        }

        cells.forEach(e => e.isDone = false);

        this.setState({
            items: cells,
        });

        this.afterKeyUp()
    };

    moveBottom() {
        const cells = [...this.state.items];

        for(let i = 3; i > 0; i--) {

            for(let j = 2; j >= 0; j--) {

                cells.forEach((cel, index) => {
                    if(cel.y === j && cel.value !== null) {
                        const currentVal = cel.value;
                        const nextVal = cells[index + 4].value;
                        const nextDone = cells[index + 4].isDone;
                        let currentDone = cel.isDone;

                        if(currentVal === nextVal && !nextDone && !currentDone) {
                            const totalVal = currentVal + nextVal;

                            cells[index + 4].value += currentVal;
                            cells[index + 4].isDone = true;
                            cel.isDone = true;
                            cel.value = null;

                            this.setState((state) => {
                                return {
                                    changesWasDone: true,
                                    score: state.score + totalVal,
                                }
                            });
                        } else if (nextVal === null) {
                            cells[index + 4].value += currentVal;
                            cel.value = null;
                            this.setState({
                                changesWasDone: true,
                            });
                        }
                    }
                });
            }
        }

        cells.forEach(e => e.isDone = false);

        this.setState({
            items: cells,
        });

        this.afterKeyUp()
    };

    afterKeyUp() {
        let freeCells = 0;

        this.props.onChangeScore(this.state.score);
        this.setState({
            score: 0,
        })
        this.state.items.forEach(cell => {
            if(cell.value === null) {
                freeCells++
            }
        });

        if (this.state.changesWasDone && freeCells > 1) {
            this.setRandomCell();
            this.setRandomCell();
            freeCells -= 2;
        } else if (this.state.changesWasDone && freeCells > 0) {
            this.setRandomCell();
            freeCells -= 1;
        }

        if (freeCells === 0) {
            this.simulateMoves();
        }

        const gameWin = this.state.items.find(cell => cell.value === 2048);

        if (gameWin) {
            console.log(1992)
            this.setState({
                isGameWin: true,
            })
        }

        this.setState({
            changesWasDone: false,
        });

        freeCells = 0;
    };

    simulateMoves() {
        let noMoves = 0;

        noMoves += this.simulateMoveBottom();
        noMoves += this.simulateMoveTop();
        noMoves += this.simulateMoveRight();
        noMoves += this.simulateMoveLeft();

        if(noMoves === 48) {
           this.setState({
               isGameOver: true,
           })
        } else {
            this.setState({
                noMove: 0,
            })
        }
    }

    simulateMoveBottom() {
        const cells = [...this.state.items];
        let a = 0;

        cells.forEach((cel, index) => {
            if(cel.y !== 3) {
                const currentVal = cel.value;
                const nextVal = cells[index + 4].value;

                if(currentVal !== nextVal) {
                    a++;
                }
            }
        });

        return a;
    }

    simulateMoveTop() {
        const cells = [...this.state.items];
        let a = 0;

        cells.forEach((cel, index) => {
            if(cel.y !== 0) {
                const currentVal = cel.value;
                const nextVal = cells[index - 4].value;

                if(currentVal !== nextVal) {
                    a++;
                }
            }
        });

        return a;
    }

    simulateMoveRight() {
        const cells = [...this.state.items];
        let a = 0;

        cells.forEach((cel, index) => {
            if(cel.x !== 3) {
                const currentVal = cel.value;
                const nextVal = cells[index + 1].value;

                if(currentVal !== nextVal) {
                    a++;
                }
            }
        });

        return a;
    }

    simulateMoveLeft() {
        const cells = [...this.state.items];
        let a = 0;

        cells.forEach((cel, index) => {
            if(cel.y !== 0) {
                const currentVal = cel.value;
                const nextVal = cells[index - 1].value;

                if(currentVal !== nextVal) {
                    a++;
                }
            }
        });

        return a;
    }

    checkKey = (e) => {


        if (e.keyCode === 38) {
            e.preventDefault();
            this.moveTop();
        }
        else if (e.keyCode === 40) {
            e.preventDefault();
            this.moveBottom();
        }
        else if (e.keyCode === 37) {
            e.preventDefault();
            this.moveLeft();
        }
        else if (e.keyCode === 39) {
            e.preventDefault();
            this.moveRight();
        }
    };

    setRandomCell() {
        const cellNum = Math.floor(Math.random() * (15));
        const cellVal = Math.floor(Math.random() * (10));

        if(this.state.items[cellNum].value !== null) {
            this.setRandomCell()
        } else {
            const newArr = [...this.state.items];
            newArr[cellNum].value = cellVal < 9 ? 2 : 4;

            this.setState({
                items: newArr,
            });
        }
    };

    newGame = () =>  {

        const newGameCells = [...this.state.items];
        newGameCells.map(cell => cell.value = null);

        this.setState({
            score: 0,
            items: newGameCells,
            isGameOver: false,
            isGameWin: false,
        })

        this.setRandomCell();
        this.setRandomCell();
    }

    componentDidMount() {
        window.addEventListener('keydown', this.checkKey);
        this.setRandomCell();
        this.setRandomCell();
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.checkKey);
    }

    render() {
        const { items, isGameOver, isGameWin}  = this.state;

        return (
            <main className={'main'}>
                <Field
                    items={ items }
                    onNewGame={this.newGame}
                    gameOver={isGameOver}
                    gameWin={isGameWin}
                />
            </main>
        );
    };
}

export default Main;
