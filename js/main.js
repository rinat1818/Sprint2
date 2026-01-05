 'use strict' 


var gImgs = [{ id: 1, url: 'imgs/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'imgs/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: 'imgs/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'hhhh',
            size: 20,
            color: 'blue'
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gElCanvas
var gCtx

function onInit(){
 gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

 resizeCanvas()
  window.addEventListener('resize', () => resizeCanvas())
}

function renderMeme(imgggg) {
   

    const img = new Image()
    img.src = imgggg

    img.onload = () => {
         gCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
        // gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        // drawTextOnCanvas()
         drawText(fff(), gElCanvas.width / 2, gElCanvas.height / 2)
    }
}
function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}
function drawText(text, x, y) {
	gCtx.lineWidth = 2
	gCtx.strokeStyle = 'orange'

	gCtx.fillStyle = 'lightsteelblue'

	gCtx.font = '45px Arial'
	gCtx.textAlign = 'center'
	gCtx.textBaseline = 'middle'

	gCtx.fillText(text, x, y)
	gCtx.strokeText(text, x, y)
}

function fff(){
    gMeme.lines[0].txt='yyyy'
    // console.log(gMeme.lines[0].txt);
    return  gMeme.txt='yyyy'
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    
    // Changing the canvas dimension clears the canvas
    gElCanvas.width = elContainer.clientWidth
}

// / function drawTextOnCanvas() {
//     gMeme.lines.forEach((line, idx) => {

//         gCtx.fillStyle = line.color
//         gCtx.strokeStyle = 'red'

//         gCtx.font = `${line.size}px impact`

//         // דוגמה למיקום בסיסי: שורה עליונה ותחתונה
//         const y = 60 + idx * 60

//         gCtx.textAlign = 'center'

//         gCtx.fillText(line.txt, gElCanvas.width / 2, y)
//         gCtx.strokeText(line.txt, gElCanvas.width / 2, y)
//     })
// }
// fff()