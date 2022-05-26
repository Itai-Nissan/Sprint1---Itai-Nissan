'use strict'

function renderBoard(mat, selector) {

  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j]
      var className = 'cell cell-' + i + '-' + j
      strHTML += '<td onClick="clickedCell(this)" id=' + i + '-' + j + '' + ' class="' + className + ' not-clicked-Cell"> ' + cell + ' </td>'
      // renderCell({ i: i, j: j }, cell)
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector)
  elContainer.innerHTML = strHTML

  // console.log(elContainer);
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
  var elCell = document.querySelectorAll(`.cell-${location.i}-${location.j}`)

  elCell.innerHTML = value
  // console.log(elCell.innerHTML)
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function getRandEmptyCell() {
  //   return {
  //     i: getRandomIntInc(1, gBoard.length - 2),
  //     j: getRandomIntInc(1, gBoard[0].length - 2),
  //   };
  var emptyCells = [];
  for (var i = 1; i < gBoard.length - 1; i++) {
    for (var j = 1; j < gBoard[i].length - 1; j++) {
      if (!gBoard[i][j].gameElement) emptyCells.push({ i, j })
    }
  }
  var emptyCellIdx = getRandomIntInc(0, emptyCells.length - 1)
  return emptyCells[emptyCellIdx]
}

function getRandomIntInc(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function playAudio(url) {
  new Audio(url).play();
}

function getData() {

  var elBox = document.querySelector('.box')

  var x = elBox.getAttribute('data-x');
  var y = elBox.getAttribute('data-y');
  var data = elBox.dataset;

  console.log('x: ', x)
  console.log('y: ', y)

  console.log('data: ', data)
}

function createBox() {
  var a = getRandomInt(1, 100)
  var b = getRandomInt(1, 100)

  var strHTML =
    `<div class="box" data-x="${a}" data-y="${b}"">
              Nothing to see here... Look in the console.
          </div>`

  var elBox = document.querySelector('#container')
  var elBox = document.getElementById('container')
  elBox.innerHTML = strHTML
}

function setMinesNegsCount(mat, posI, posJ) {
  // console.log(mat);
  // console.log(pos);

  var count = 0
  var numberOfMines = 1
  // console.log(mat);
  // console.log(pos.location.i);

  for (var i = posI - 1; i <= posI + 1; i++) {
    if (i < 0 || i >= mat.length) continue

    for (var j = posJ - 1; j <= posJ + 1; j++) {
      if (j < 0 || j >= mat[i].length) continue
      if (i === posI && j === posJ) continue


      if (mat[i][j] === numberOfMines) {
        mat[i][j] = numberOfMines + 1
      }
          
      if (mat[i][j] === EMPTY && mat[i][j] !== MINE) {
        count++
        mat[i][j] = numberOfMines
      }
      
      if (mat[i][j] === EMPTY) {
        console.log('hi');
        console.log(mat[i][i]);
        return mat
      }
        
        // var elCell = document.querySelectorAll(`.cell-${location.i}-${location.j}`)
        // elCell.classList.remove('.not-clicked-Cell')


        // console.log(count)
      }
    }
    return
  }




