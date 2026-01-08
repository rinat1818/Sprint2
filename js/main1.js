'use strict'

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()

    window.addEventListener('resize', () => resizeCanvas())
    renderGallery()
    clearText()
}
function renderGallery() {
    const elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = ''

    gImgs.forEach(img => {
        elGallery.innerHTML +=
            `<img src =${img.url}
            
            onclick="onSelectImg(this);"/>`

    })
}


function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText(text, x, y) {
    gCtx.beginPath()

    gCtx.lineWidth = gMeme.lines[0].size;

    gCtx.strokeStyle = gMeme.lines[0].color;

    gCtx.fillStyle = gMeme.lines[0].color;
    gCtx.font = '45px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.clientWidth

}

function clearText() {

    gMeme.lines[0].txt = ''
    const elInput = document.querySelector('.txt-input')
    if (elInput) elInput.value = ''
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}
function hideGallery() {

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

function downloadCanvas(elLink) {
    elLink.download = 'my-img'
    const dataUrl = gElCanvas.toDataURL()
    elLink.href = dataUrl
}