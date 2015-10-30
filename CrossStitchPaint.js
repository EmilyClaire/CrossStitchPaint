// Setting the Global stitch variables
var stitchLength = 22;  //Actual length of the stitch
var stitchThick = 6; //Thickness of the diagnal stitch

//Length of the side of the whole square the stitch takes up
var stitchSide = stitchLength / Math.sqrt(2) + stitchThick;

//Setting up the base cloth grid
var canvasBase = document.getElementById('base');
var base = canvasBase.getContext('2d');

//Making the background a
base.fillStyle = '#F5F6CE';
base.fillRect(0, 0, canvasBase.width, canvasBase.height);

//Setting line width and color
//an equation to make the line width the same as cross part of the cross stitch
base.lineWidth = Math.sqrt(2) * stitchThick;
base.strokeStyle = '#BDBDBD';

//A method that draws the grid background
function drawAida(){

    for(var i = 0; i * stitchSide + stitchSide < canvasBase.height - stitchSide; i ++){
        base.beginPath();
        base.moveTo(stitchSide + stitchSide * i, stitchSide);
        base.lineTo(stitchSide + stitchSide * i, stitchSide);
        base.lineTo(stitchSide + stitchSide * i, canvasBase.height - stitchSide);
        base.closePath();
        base.stroke();

        base.beginPath();
        base.moveTo(stitchSide, stitchSide + stitchSide * i);
        base.lineTo(stitchSide, stitchSide + stitchSide * i);
        base.lineTo(canvasBase.width - stitchSide, stitchSide + stitchSide * i);
        base.closePath();
        base.stroke();
    }
}

drawAida();

/*********************Start of Cross Stitch Canvas*****************************/
//Where the outline stitches go
var canvasOutline = document.getElementById('outline');
var outline = canvasOutline.getContext('2d');

//The canvas where the crossStitches go
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var pos = {
  x: 0,
  y:0
};

canvas.addEventListener("mousedown", doMouseDown, false);

function doMouseDown(event){
  pos.x = event.pageX;
  pos.y = event.pageY;

  rightCrossStitch(Math.round(pos.x/stitchSide) * stitchSide,  Math.round(pos.y/stitchSide) * stitchSide, stitchThick, stitchLength, 'red');
}


//Setting the line width for the outline of the stitches
ctx.lineWidth = 1;

/*drawing 19 stiches*/
/*for(var i = 0; i < 19; i++){

    rightCrossStitch(2 * stitchSide + i * stitchSide,  2 * stitchSide, stitchThick, stitchLength, 'red');
    leftCrossStitch(2 * stitchSide,  3 * stitchSide + stitchSide * i, stitchThick, stitchLength, 'blue');
}

for(var i = 0; i < 19; i++){
    rightCrossStitch(27 + i * 20, 40, 6, 20, 'green');
    leftCrossStitch(47, 60 + i * 20, 6, 20, 'orange');
}
*/

//Draws one diagnal stitch
function drawDiagnalStitch(x,y,width,height,rad, color){

    ctx.save();

    //Set the origin to the center of coordinates given
    ctx.translate(x, y);

    //Rotate the canvas
    ctx.rotate(rad * Math.PI);

    //sets the color and draws and fills a rectangle
    ctx.fillStyle = color;
    ctx.fillRect(-width / 2, -height / 2, width, height);
    ctx.strokeRect(-width / 2, -height / 2, width, height);

    //reset the canvas
    ctx.restore();
}

//Draws a cross stitch where the stitch going from left to right is on top
function rightCrossStitch(x, y, width, height, color){
    drawDiagnalStitch(x, y, width, height, 3/4, color);
    drawDiagnalStitch(x, y, width, height, 1/4, color);
}

//Draws a cross stitch where the stitch going from right to left is on top
function leftCrossStitch(x, y, width, height, color){
    drawDiagnalStitch(x, y, width, height, 1/4, color);
    drawDiagnalStitch(x, y, width, height, 3/4, color);
}
/*******************************Start of Outline Canvas************************/
