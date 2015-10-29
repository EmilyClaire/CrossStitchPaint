/*The canvas where the crossStitches go */
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

/*Where the outline stitches go*/
var canvasOutline = document.getElementById('outline');
var outline = canvasOutline.getContext('2d');

/*Setting the line width for the outline of the stitches*/
ctx.lineWidth = 1;

/*drawing 19 stiches*/
for(var i = 0; i < 19; i++){
    rightCrossStitch(27 + i * 20, 20, 6, 20, 'red');
    leftCrossStitch(27, 60 + 20 * i, 6, 20, 'blue');
}

for(var i = 0; i < 19; i++){
    rightCrossStitch(27 + i * 20, 40, 6, 20, 'green');
    leftCrossStitch(47, 60 + i * 20, 6, 20, 'orange');
}

/*Draws one diagnal stitch*/
function drawDiagnalStitch(x,y,width,height,rad, color){
    
    ctx.save();
    
    /*Set the origin to the center of coordinates given*/
    ctx.translate(x + width / 2, y + height / 2);

    /*Rotate the canvas*/
    ctx.rotate(rad * Math.PI);

    /*sets the color and draws and fills a rectangle*/
    ctx.fillStyle = color;
    ctx.fillRect(width / -2, height / -2, width, height);
    ctx.strokeRect(width / -2, height / -2, width, height);
    
    /*reset the canvas*/  
    ctx.restore();
}

/*Draws a cross stitch where the stitch going from left to right is on top*/
function rightCrossStitch(x, y, width, height, color){
    drawDiagnalStitch(x, y, width, height, 3/4, color);
    drawDiagnalStitch(x, y, width, height, 1/4, color);
}

/*Draws a cross stitch where the stitch going from right to left is on top*/
function leftCrossStitch(x, y, width, height, color){
    drawDiagnalStitch(x, y, width, height, 1/4, color);
    drawDiagnalStitch(x, y, width, height, 3/4, color);
}
