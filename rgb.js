var colors = [];
var pickedcolor;
var numsqu = 6;

var squares =document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colordisplay");
var msg = document.getElementById("mesg");
var h1 = document.querySelector("h1");
var resetBut = document.querySelector("#reset");
var modeBut = document.querySelectorAll(".mode");


init();
function init(){
	setmode();
	setsquare();
	reset();
}

function setmode(){
	for(var i = 0; i<modeBut.length; i++){
		modeBut[i].addEventListener("click", function(){
			modeBut[0].classList.remove("selected");
			modeBut[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numsqu = 3 : numsqu = 6;
			reset();
		});
	}
}
function setsquare(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var clickedcolor = this.style.background;
			if (clickedcolor === pickedcolor) {
				msg.textContent = "Correct";
				changeCol(clickedcolor);
				h1.style.background = clickedcolor;
				resetBut.textContent = "Play Again?"
			}
			else{
				msg.textContent = "Try Again";
				this.style.background = "#232323";
			}
		});
	}
}
resetBut.addEventListener("click",function(){
	reset();
});



function reset(){
	colors = generateRandomColor(numsqu);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i =0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";

		}else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "	steelblue";
	msg.textContent = "";
	resetBut.textContent = "New Colors";
}


function changeCol(color){
	for (var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function Randomcolor(){
	var randomR = Math.floor(Math.random() * 256 );
	var randomG = Math.floor(Math.random() * 256 );
	var randomB = Math.floor(Math.random() * 256 );
	return "rgb("+ randomR +", "+ randomG +", "+ randomB +")";
}

function generateRandomColor(num){
	var arr =[];
	for(var i =0;i<num;i++){
		arr.push(Randomcolor());
	}
	return arr;
}
