
var gImgs = [{ id: 1, url: 'imgs/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'imgs/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: 'imgs/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'u vhg hgv',
            size: 20,
            color: 'blue'
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gElCanvas
var gCtx

function renderMeme(imgggg) {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    const img = new Image()
    img.src = imgggg

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawTextOnCanvas()
    }
}
function drawTextOnCanvas() {
    gMeme.lines.forEach((line, idx) => {

        gCtx.fillStyle = line.color
        gCtx.strokeStyle = 'red'

        gCtx.font = `${line.size}px impact`

        // דוגמה למיקום בסיסי: שורה עליונה ותחתונה
        const y = 60 + idx * 60

        gCtx.textAlign = 'center'

        gCtx.fillText(line.txt, gElCanvas.width / 2, y)
        gCtx.strokeText(line.txt, gElCanvas.width / 2, y)
    })
}
fff()
function fff(){
    gMeme.lines.txt='yyyy'
    console.log(gMeme.lines.txt);
    return  gMeme.txt='yyyy'
    
}