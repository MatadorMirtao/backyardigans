var canvas = new fabric.Canvas('myCanvas');
playerX = 10; playerY = 10;
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
		blockImageObject = Img;
	
		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
		top:playerY,
		left:playerX
		});
		canvas.add(blockImageObject);
	
		});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '85') 
	{
		blockX = 100
		newImage('uniqua.png'); 
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage('austin.png'); 
		}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage('pablo.png'); 
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		newImage('tasha.png'); 
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		newImage('tyro.png'); 
	}
	
}

