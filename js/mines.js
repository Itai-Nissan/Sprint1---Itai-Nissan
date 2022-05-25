'use strict'

var gMine = []

function createMine(board, currPos) {
    // console.log(currPos)

    board[currPos.i][currPos.j] = MINE    
}

function createMines(board) {
    gMine = []
    
    var mine
    
    for (var i = 0; i < gLevel.MINES; i++) {
        var mine = {
            location: { i: getRandomIntInc(0, board.length - 1), j: getRandomIntInc(0, board.length - 1) },
            currCellContents: EMPTY,
        }
        
        // console.log(mine.location)
        createMine(board, mine.location)
        setMinesNegsCount(board, mine.location)
    }    

    return board
}

