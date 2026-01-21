'use strict'

var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['funny', 'me'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['love', 'dog'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['love', 'baby'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['sleep', 'cat'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['baby', 'yes'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['funny', ''] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['funny', 'chocolate'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['funny', ''] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['crazy', ''] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['crazy', ''] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['old', 'you'] },
    // { id: 13, url: 'imgs/13.jpg', keywords: ['crazy', ''] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['crazy', ''] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['crazy', ''] },
    { id: 16, url: 'imgs/16.jpg', keywords: ['crazy', 'yes'] },
    { id: 17, url: 'imgs/17.jpg', keywords: ['dog', 'what'] },
    { id: 18, url: 'imgs/18.jpg', keywords: ['blak', 'smile'] },
    { id: 19, url: 'imgs/19.jpg', keywords: ['crazy', ''] },
    { id: 20, url: 'imgs/20.jpg', keywords: ['crazy', ''] },
    { id: 21, url: 'imgs/21.jpg', keywords: ['crazy', ''] },
    { id: 22, url: 'imgs/22.jpg', keywords: ['crazy', ''] },
    { id: 23, url: 'imgs/23.jpg', keywords: ['crazy', ''] },
    { id: 24, url: 'imgs/24.jpg', keywords: ['crazy', ''] },
    { id: 25, url: 'imgs/25.jpg', keywords: ['crazy', ''] },
    { id: 26, url: 'imgs/26.jpg', keywords: ['dump', 'idiot'] }]
    
   


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

var gTextPos = { x: 0, y: 0 }
const STEP = 12
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gSelectedImg

var gElCanvas
var gCtx

function onChangColor(color) {
    gMeme.lines[0].color = color
    renderCanvas()
}
function onChangSize(size) {
    gMeme.lines[0].size = size
    renderCanvas()
}
function onSelectImg(elImg) {

    hideGallery()

    gSelectedImg = elImg

    coverCanvasWithImg(elImg)


    gTextPos.x = gElCanvas.width / 2
    gTextPos.y = gElCanvas.height / 2
    // hideGallery()
    renderCanvas()
}

function onAddTxt(txt) {
    if (txt.length > 13) return
    gMeme.lines[0].txt = txt
    renderCanvas()
}

function onShowGallery() {
    const elGallery = document.querySelector('.gallery')
    const elFilter = document.querySelector('.filter-container')
    elFilter.classList.remove('hidden')
    elGallery.classList.remove('hidden')
    var generator = document.querySelector('.generator')

    generator.classList.add('hidden')
    clearText()
    renderCanvas()
}

function onFilter(txt){
 var filterImges =gImgs.filter(img=>{
    if(img.keywords.includes(txt)||txt==='')return true
})
 renderGallery(filterImges)
}