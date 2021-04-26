canvas = document.getElementById('my_canvas');
ctx = canvas.getContext ("2d");
car1_width = 120;
car1_height = 70;

background_image = "car_canvas.jpg";

car1_image = "car1.png";

car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;

car2_image = "car2.jpg";

car2_x = 10;
car2_y = 90;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car1_imgTag = new Image(); //defining a variable with a new image
	car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
	car1_imgTag.src = car1_image;   // load image

	car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
	car2_imgTag.src = car2_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("right");
		}

        if(keyPressed == '85')//"u" is used as up//
		{
			car2_up();
			console.log("u");
		}
		if(keyPressed == '68')//"d" is used as down//
		{
			car2_down();
			console.log("d");
		}
		if(keyPressed == '76')//"l" is used as left//
		{
			car2_left();
			console.log("l");
		}
		if(keyPressed == '82')//"r" is used as right//
		{
			car2_right();
			console.log("key r");
		}
}

//car1 starts//

function car1_up()
{

	if (car1_y >= 0)
	{

		car1_y = car1_y - 10;
		console.log("When up arrow is pressed, x = "+ car1_x + " y =" + car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}

function car1_down()
{

	if (car1_y <= 500)
	{

		car1_y = car1_y + 10;
		console.log("When up arrow is pressed, x = "+ car1_x + " y =" + car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}

function car1_left()
{

	if (car1_x >= 0)
	{

		car1_x = car1_x - 10;
		console.log("When up arrow is pressed, x = "+ car1_x + " y =" + car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}

function car1_right()
{

	if (car1_x <= 500)
	{

		car1_x = car1_x + 10;
		console.log("When up arrow is pressed, x = "+ car1_x + " y =" + car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}

//car2 starts//

function car2_up()
{

	if (car2_y >= 0)
	{

		car2_y = car2_y - 10;
		console.log("When up arrow is pressed, x = "+ car2_x + " y =" + car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}

function car2_down()
{

	if (car2_y <= 500)
	{

		car2_y = car2_y + 10;
		console.log("When up arrow is pressed, x = "+ car2_x + " y =" + car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}

function car2_left()
{

	if (car2_x >= 0)
	{

		car2_x = car2_x - 10;
		console.log("When up arrow is pressed, x = "+ car2_x + " y =" + car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}

function car2_right()
{

	if (car2_x <= 500)
	{

		car2_x = car2_x + 10;
		console.log("When up arrow is pressed, x = "+ car2_x + " y =" + car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();

	}
}