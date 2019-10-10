class TicTacToe {


    constructor() {
        this.currentPlayer = 'x';
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

    }

    getCurrentPlayerSymbol() {
        //console.log("_____________________" + this.currentPlayer);
        return this.currentPlayer;
    }

    changePlayer() {
        const changeItem = {
            o: 'x',
            x: 'o'
        };
        this.currentPlayer = changeItem[this.getCurrentPlayerSymbol()];
        // this.iter++;
    }



    nextTurn(rowIndex, columnIndex) {
        /*this.changePlayer();
        this.matrix[rowIndex][columnIndex] = this.currentPlayer;
        return this.currentPlayer;*/
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = (this.currentPlayer === 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        return (this.getWinner() || this.noMoreTurns()) ? true : false;
    }

    getWinner() {

        // getFieldValue() == this.winnerMatrix ? true : isDraw();
        const lastTurn = (this.currentPlayer === 'x') ? 'o' : 'x';
        for (let i = 0; i < 3; i += 1) {
            if (this.matrix[i][0] === lastTurn && this.matrix[i][1] === lastTurn && this.matrix[i][2] === lastTurn) return lastTurn;
            if (this.matrix[0][i] === lastTurn && this.matrix[1][i] === lastTurn && this.matrix[2][i] === lastTurn) return lastTurn;
        }
        if (this.matrix[0][0] === lastTurn && this.matrix[1][1] === lastTurn && this.matrix[2][2] === lastTurn) return lastTurn;
        if (this.matrix[0][2] === lastTurn && this.matrix[1][1] === lastTurn && this.matrix[2][0] === lastTurn) return lastTurn;
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] === null) return false;
            }
        }
        return true;
    }


    isDraw() {
        // if (!this.isFinished | this.getWinner) {
        //     return false;
        // } else
        if (this.isFinished & !this.getWinner) {
            return true;
        } else {
            return false;
        }
        //return this.noMoreTurns() || !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;