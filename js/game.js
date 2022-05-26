'use strict'




const MINE = '💣'
const FIRE = '🔥'
const NUMBER = '0'
const FLAG = '⛳'
const EMPTY = ''

var gLife = 2


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
    lifeCounter()

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
    // console.log(board);
    return board
}

// // function setLevel(boardSize) {
// //     // console.log('boardSize:', boardSize)
// //     gLevel.SIZE = boardSize
// //     init()
// // }

function resetGame() {
    intinGame()
    var elGameOver = document.querySelector('.game-over')
    elGameOver.style.display = 'none'

}

function gameOver() {
    gGame.isOn = false
    // console.log(elGameOver.innerText);

    var elResetBtn = document.querySelector('.reset-button')
    elResetBtn.innerText = '😲'


}


function lifeCounter() {

    var life = gLife
    var elLifeCount = document.querySelector('.game-pad h3 span')
    elLifeCount.innerHTML = life
    // elLifeCount.innerHTML = elLifeCount.innerHTML + gLife

}


function clickedCell(elBtn, i, j) {


    var elClickedCell = elBtn
    var currCellContent

    var elResetBtn = document.querySelector('.reset-button')




    if (elResetBtn.innerText === '😲') return

    elClickedCell.classList.toggle('clicked-Cell')
    currCellContent = elClickedCell.innerText
    // console.log(currCellContent)
    elClickedCell.innerText = currCellContent
    if (!elClickedCell.classList.contains('clicked-Cell') && elBtn.innerHTML === MINE) {
        console.log(gLife);
        gLife--
        lifeCounter()
        console.log(gLife);
        elBtn.innerHTML = FIRE
    }

    if (elBtn.innerHTML === FIRE && gLife === 0) {
        console.log('Game Over');
        gameOver()
        return
    }
}

