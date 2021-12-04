var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

var block_image = "";

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
       block_image = Img;

       block_image.scaleToWidth(700);
       block_image.scaleToHeight(510);
       block_image.set({
           top : 0,
           left : 0
       });

        canvas.add(block_image);
    })
	
}

function playSound(){
	x.play();
}
