'use strict'

const MINE = '💣' 
const NUMBER = '0'
const FLAG = '⛳' 
const EMPTY = ''


var gBoard = {
    minesAroundCount: 0,
    isShown: true,
    isMine: false,
    isMarked: true
}

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: true,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}


function intinGame() {
    // console.log('Mine Sweeper')

    gBoard = buildBoard()
    // console.table(gBoard)

    // createPacman(gBoard);
    createMines(gBoard);
    // console.table(gBoard)

    renderBoard(gBoard, '.board-container')
    // gGame.isOn = true
}


function buildBoard() {
    var board = []

    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([]);

        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = EMPTY

            // setMinesNegsCount(board, board.location.i, board.location.j)
        }
    }
    console.log(board);
    return board
}

// // function setLevel(boardSize) {
// //     // console.log('boardSize:', boardSize)
// //     gLevel.SIZE = boardSize
// //     init()
// // }