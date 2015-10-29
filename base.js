/*The cloth grid that cannot be erased ever*/
var canvasBase = document.getElementById('base');
var base = canvasBase.getContext('2d');

/*Making the background and outline box*/
base.fillStyle = '#F5F6CE';
base.fillRect(0, 0, canvasBase.width, canvasBase.height);
base.strokeRect(0,0, canvasBase.width, canvasBase.height);

/*Setting line width and color*/
base.lineWidth = 7;
base.strokeStyle = '#BDBDBD';

/*A method that draws the grid background*/
function drawAida(){
    for(var i = 0; i < 23; i ++){
        base.beginPath();
        base.moveTo(10 + 20 * i, 10);
        base.lineTo(10 + 20 * i, 10);
        base.lineTo(10 + 20 * i, canvasBase.height - 45);
        base.closePath();
        base.stroke();
    }

    for(var i = 0; i < 23; i++){
        base.beginPath();
        base.moveTo(10, 10 + 20 * i);
        base.lineTo(10, 10 + 20 * i);
        base.lineTo(canvasBase.width -45, 10 + 20 * i);
        base.closePath();
        base.stroke();
    }
}

drawAida();
