console.log('dddd');

'use strict'


var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'imgs/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['funny', 'cat'] },
    { id: 19, url: 'imgs/19.jpg', keywords: ['funny', 'cat'] }]



var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'hhhh',
            size: 1,
            color: 'black'
        }]
}

let gTextPos = { x: 0, y: 0 }
const STEP = 12
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }


var gElCanvas
var gCtx

function onInit(){
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()

    window.addEventListener('resize', () => resizeCanvas())
    renderGallery()
    clearText()
}
function onChangColor(color) {
    gMeme.lines[0].color = color
}
function onChangSize(size) {
    gMeme.lines[0].size = size
}

// function onSelectImg(elImg) {
//     coverCanvasWithImg(elImg)
// }
function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}
function drawText(text, x, y) {
    gCtx.beginPath()
    // gCtx.lineWidth = 2
    gCtx.lineWidth = gMeme.lines[0].size;
    // gCtx.strokeStyle = 'pink'
    gCtx.strokeStyle = gMeme.lines[0].color;

    gCtx.fillStyle = gMeme.lines[0].color;
    gCtx.font = '45px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

let gSelectedImg

function onSelectImg(elImg) {
// var opct= document.querySelector('.opacity')
//  opct.classList.remove('opacity') 
//  const elGen = document.querySelector('.generator') 
//  elGen.style.display ='block' 
//  const el = document.querySelector('.gallery') 
// el.classList.remove('hidden') 
 hideGallery()
//    coverCanvasWithImg(elImg)
   gSelectedImg = elImg 
//  ; hideGallery()// 
//  ; hideGallery()
//  document.querySelectorAll('.opacity') 
//  ; hideGallery()// .forEach(el => el.classList.remove('opacity'))

console.log(elImg);

// document.querySelector('.generator').classList.remove('hidden')
// document.querySelector('.gallery').classList.add('hidden')


// document.querySelector('.gallery').classList.add('hidden')
 coverCanvasWithImg(elImg)


gTextPos.x = gElCanvas.width / 2 
gTextPos.y = gElCanvas.height / 2
renderCanvas()
}
function onAddTxt(txt) {
    if (txt.length > 13) return
    gMeme.lines[0].txt = txt
    renderCanvas()
    // gCtx.clearRect(0, 0, gElCanvas.width,gElCanvas.height)
    // gCtx.clearRect(0, 0, gElCanvas.width,gElCanvas.height)
    //  // if (gSelectedImg) coverCanvasWithImg(gSelectedImg)
    //  // drawText(txt, gElCanvas.width / 2, gElCanvas.height / 2)
}



function resizeCanvas() {
const elContainer = document.querySelector('.canvas-container')
gElCanvas.width = elContainer.clientWidth
}

function img2() {
const elGallery = document.querySelector('.gallery')
elGallery.classList.remove('hidden')
var opct = document.querySelectorAll('.generator')

opct[0].classList.add('opacity')
clearText() 
}
function clearText() {

    gMeme.lines[0].txt = ''
    const elInput = document.querySelector('.txt-input')
    if (elInput) elInput.value = ''
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}
function hideGallery() {
    // const elGallery = document.querySelector('.gallery')
    // elGallery.classList.add('hidden')
   // const elCanvas = document.querySelector('canvas')..... 
    // elCanvas.classList.remove('opacity')//////
    // var opct = document.querySelectorAll('.opacity')
    // opct[0].classList.remove('opacity')


    const elGallery = document.querySelector('.gallery')
  elGallery.classList.add('hidden')

  const opct = document.querySelector('.opacity')
  if (!opct) return
  opct.classList.remove('opacity')
}

function renderCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    if (gSelectedImg) coverCanvasWithImg(gSelectedImg)
        const txt = gMeme.lines[0].txt
    if (!txt) return
    drawText(txt, gTextPos.x, gTextPos.y)
}

function moveTextUp() {
    if (gTextPos.y - STEP < 0) return
    gTextPos.y -= STEP
    renderCanvas()
}
function moveTextDown() {
    if (gTextPos.y + STEP > gElCanvas.height) return
    gTextPos.y += STEP
    renderCanvas()
}
function renderGallery() {
    const elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = ''
    // gImgs.forEach(img => { elGallery.innerHTML += 
    // <img src="${img.url}"
    //  onclick="onSelectImg(this); hideGallery()"></img>
    // })
gImgs.forEach(img => {
elGallery.innerHTML +=
`<img src =${img.url}

onclick="onSelectImg(this); hideGallery()"/>`
})
}

function downloadCanvas(elLink) {
    elLink.download = 'my-img' // Set a name for the downloaded file
    const dataUrl = gElCanvas.toDataURL() 
    elLink.href = dataUrl
}