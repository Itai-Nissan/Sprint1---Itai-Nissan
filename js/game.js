'use strict'




const MINE = '💣'
const FIRE = '🔥'
const NUMBER = '0'
const FLAG = '⛳'
const EMPTY = ''

const SMILY = '😃'
const NOT_SMILING = '😞'


var gLife = 2
var numberOfCellsOpened = 0


var gBoard = {
    minesAroundCount: 0,
    isShown: false,
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

    createMines(gBoard);

    // console.table(gBoard)
    lifeCounter()

    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
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
    // console.log(board);
    return board
}

function setLevel(boardSize) {
    // console.log('boardSize:', boardSize)
    var elSetLevelBtn = document.querySelector('.setLevel')

    gLevel.SIZE = boardSize
    if (boardSize === 4) {
        gLevel = {
            SIZE: 4,
            MINES: 2
        }
    }
    else if (boardSize === 8) {
        gLevel = {
            SIZE: 8,
            MINES: 4
        }
    }
    else if (boardSize === 12) {
        gLevel = {
            SIZE: 12,
            MINES: 8
        }
    }
    // console.log(gLevel);

    intinGame()
}

function resetButton() {

    var elResetBtn = document.querySelector('.reset-button')

    // console.log(gLife);
    gLife = 2
    // console.log(gLife);

    if (elResetBtn.innerText === NOT_SMILING) {
        elResetBtn.innerText = SMILY

    }

}

function resetGame() {
    resetButton()
    intinGame()
}

function gameOver() {
    gGame.isOn = false

    // console.log(elGameOver.innerText);

    var elResetBtn = document.querySelector('.reset-button')
    elResetBtn.innerText = NOT_SMILING
}


function lifeCounter() {

    var life = gLife
    var elLifeCount = document.querySelector('.game-pad h3 span')
    elLifeCount.innerHTML = life
    // elLifeCount.innerHTML = elLifeCount.innerHTML + gLife
}


var elClickedCell


function clickedCell(elBtn, i, j) {
    // console.log(...elBtn.classList[1][5])
    // console.log(...elBtn.classList[1][7])

    elClickedCell = elBtn
    // console.log(elClickedCell);
    var currCellContent

    // checkIfWon(elBtn)

    var elResetBtn = document.querySelector('.reset-button')

    // count opened Cells
    // numberOfCellsOpened++
    // console.log(numberOfCellsOpened);

    if (elResetBtn.innerText === NOT_SMILING) return

    if (!elClickedCell.classList.contains('not-clicked-Cell')) return

    // find and open empty negs    ***
    elClickedCell.classList.toggle('not-clicked-Cell')
    if(elClickedCell.classList.toggle) 

    currCellContent = elClickedCell.innerText
    // console.log(currCellContent)

    elClickedCell.innerText = currCellContent

    // console.log(elBtnCurrPosI[0]);
    // console.log(elBtnCurrPosJ[0]);

    if (elBtn.innerText === EMPTY) {
        var elBtnCurrPosI = [...elBtn.classList[1][5]]
        var elBtnCurrPosJ = [...elBtn.classList[1][7]]
        var emptyCellsToOpen = revelEmptyNegs(gBoard, elBtnCurrPosI[0], elBtnCurrPosJ[0], elClickedCell)
        // console.log(emptyCellsToOpen)
    }

    if (!elClickedCell.classList.contains('not-clicked-Cell') && elBtn.innerHTML === MINE) {
        // console.log(gLife);
        gLife--
        lifeCounter()
        // console.log(gLife);
        elBtn.innerHTML = FIRE
    }

    if (elBtn.innerHTML === FIRE && gLife === 0) {
        // console.log('Game Over');
        gameOver()
        return
    }

    checkIfWon(elBtn)

}

function checkIfWon() {

    // console.log(gLife);
    // console.log(elBtn.classList.contains('.not-clicked-Cell'));
    // console.log(gBoard);

    if(numberOfCellsOpened === gLevel.SIZE * gLevel.SIZE){
        console.log('Won');
    }

//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard[i].length; j++) {
//             console.log(elBtn.classList.contains('.not-clicked-Cell'));
//             // if (!elBtn[i][j].classList.contains('.not-clicked-Cell')/* && gLife !== 0*/) {
//             //     // win()
//             //     console.log('opened cell');
//             //     console.log(gBoard[i][j]);
//             // }
//         }
//     }
}

// function win(){
//     console.log('Yesh');
// }


