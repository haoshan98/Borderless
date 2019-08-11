/*CODOKO by Joakim Nyland

I hope you like this little game! I am quite happy with how the code turned out, so I hope some of you will have a look at it!😄

----Updates----
- Added sound
- Added harder difficulty (stage 5-7)

----Plans----
- More stages
- Harder difficulties
- Stages overview

*/
$(document).ready(function() {

alert("Objective: Get different colors in vertical and horizontal directions!\n\nPress a circle to change its color!⚪️🔴🔵")

// Variables and arrays
const c = ["white","red","blue","green","orange"];
var A = [0];
var A2 = [];
var currentColors = [0];
var zeroArray = [0];
var lockedArray = [];
var unlockedArray = [];
var solutionArray = [];
var allC=[c1,c2,c3,c4,c5,c6,c7,c8,c9];
allC2 = [c10,c11,c12,c13,c14,c15,c16];
var notLocked = true;
var myFooter = document.getElementById("footer");
var stageCount = 1;
// Thank to Warith Vatanaplachaigoon for the sound
var correct = new Audio('https://dl.dropbox.com/s/ehdu5ilfh5f96h8/Sololearn%20Correct.mp3?dl=1&raw=1');
//********** DIFFICULTY: BEGINNER**********

// STAGE 1 
function stage1(){
	solutionArray = [
					 2,1,3,
					 1,3,2,
					 3,2,1];
						 
	lockedArray = [c1,c4,c9];
	unlockedArray = [c2,c3,c5,c6,c7,c8];
	
	// Set colors to locked spheres
	setColors(lockedArray[0],c[2]);
	setColors(lockedArray[1],c[1]);
	setColors(lockedArray[2],c[1]);
	
	//Set white color to unlocked spheres
	whiteSpheres();
	
	myFooter.innerHTML = "STAGE 1";
}
stage1();

//STAGE 2
function stage2(){
	solutionArray = [
					 1,2,3,
					 2,3,1,
					 3,1,2];
						 
	lockedArray = [c1,c5,c9];
	unlockedArray = [c2,c3,c4,c6,c7,c8];
	
	// Set colors to locked spheres
	setColors(lockedArray[0],c[1]);
	setColors(lockedArray[1],c[3]);
	setColors(lockedArray[2],c[2]);
	
	//Set white color to unlocked spheres
	whiteSpheres();
	
	myFooter.innerHTML = "STAGE 2";
	stageCount = 2;
}

// STAGE 3
function stage3(){
	solutionArray = [
					 3,2,1,
					 1,3,2,
					 2,1,3];
						 
	lockedArray = [c3,c5,c7];
	unlockedArray = [c1,c2,c4,c6,c8,c9];
	
	// Set colors to locked spheres
	setColors(lockedArray[0],c[1]);
	setColors(lockedArray[1],c[3]);
	setColors(lockedArray[2],c[2]);
	
	//Set white color to unlocked spheres
	whiteSpheres();
	
	myFooter.innerHTML = "STAGE 3";
	stageCount = 3;
}

// STAGE 4
function stage4(){
	solutionArray = [
					 3,1,2,
					 1,2,3,
					 2,3,1];
						 
	lockedArray = [c1,c3,c9];
	unlockedArray = [c2,c4,c5,c6,c7,c8];

	// Set colors to locked spheres
	setColors(lockedArray[0],c[3]);
	setColors(lockedArray[1],c[2]);
	setColors(lockedArray[2],c[1]);
	
	//Set white color to unlocked spheres
	whiteSpheres();
	
	myFooter.innerHTML = "STAGE 4";
	stageCount = 4;
}

// STAGE 5
function stage5(){
	solutionArray = [
					 2,1,3,
					 1,3,2,
					 3,2,1];
						 
	lockedArray = [c3,c6,c7];
	unlockedArray = [c1,c2,c4,c5,c8,c9];

	// Set colors to locked spheres
	setColors(lockedArray[0],c[3]);
	setColors(lockedArray[1],c[2]);
	setColors(lockedArray[2],c[3]);
	
	//Set white color to unlocked spheres
	whiteSpheres();
	
	myFooter.innerHTML = "STAGE 5";
	stageCount = 5;
}

function stage6(){
	for (p=0;p<allC.length;p++){
		allC[p].style.width="60px";
		allC[p].style.height="60px";
	}
	
	c2.style.left="40%";
	c5.style.left="40%";
	c8.style.left="40%";
	
	c3.style.left="60%";
	c6.style.left="60%";
	c9.style.left="60%";
	
	c4.style.bottom="55%";
	c5.style.bottom="55%";
	c6.style.bottom="55%";
	 
	c7.style.bottom="35%";
	c8.style.bottom="35%";
	c9.style.bottom="35%";
	
	solutionArray = [
					 4,3,2,
					 1,2,3,
					 2,1,4,
					 3,4,1,2,3,4,1];

	lockedArray = [c1,c6,c8,c9,c13];
	unlockedArray = [c2,c3,c4,c5,c7,c10,c11,c12,c14,c15,c16];

	// Set colors to locked spheres
	setColors(lockedArray[0],c[4]);
	setColors(lockedArray[1],c[3]);
	setColors(lockedArray[2],c[1]);
	setColors(lockedArray[3],c[4]);
	setColors(lockedArray[4],c[2]);

	whiteSpheres();

for (i=0;i<allC2.length;i++){
	allC2[i].style.display="inline";
}

	myFooter.innerHTML = "STAGE 6";
	stageCount = 6;
}

function stage7(){
	solutionArray = [
					 3,2,1,
					 4,1,2,
					 2,3,4,
					 1,4,3,2,1,3,4];

	lockedArray = [c6,c8,c10,c12,c16];
	unlockedArray = [c1,c2,c3,c4,c5,c7,c9,c11,c13,c14,c15];

	// Set colors to locked spheres
	setColors(lockedArray[0],c[2]);
	setColors(lockedArray[1],c[3]);
	setColors(lockedArray[2],c[1]);
	setColors(lockedArray[3],c[3]);
	setColors(lockedArray[4],c[4]);
	
	whiteSpheres();

	myFooter.innerHTML = "STAGE 7";
	stageCount = 7;
}


// Function for setting 
function whiteSpheres(){
	
	// Set thick border to locked spheres
	for (j=0;j<lockedArray.length;j++){
		lockedArray[j].style.border = "2px solid black";
	}
	
	// Set white color and thinn border to unlocked spheres
	for (k=0;k<unlockedArray.length;k++){
		setColors(unlockedArray[k],c[0]);
		unlockedArray[k].style.border = "1px solid black";
	}
	
}

// Function to set the color of the locked spheres
function setColors(sphere,color){
	sphere.style.backgroundColor = color;
}

// Function to sum up an array (using .reduce function)
function add(a, b) {
	return a + b;
}

document.getElementById("parent-color").addEventListener("click", function(e) {

	notLocked = true;
	
	// Check if the sphere that is clicked is locked or not
	for (i=0;i<=lockedArray.length;i++){
		if(e.target == lockedArray[i]){
			notLocked = false;
			i = lockedArray.length+1;
		}
	}

if (notLocked){
	
	// When a sphere is clicked, change its color
	if(e.target.style.backgroundColor=="white"){
	
	e.target.style.backgroundColor="red";
	
	}
	else if (e.target.style.backgroundColor=="red"){
	  e.target.style.backgroundColor="blue";	
	}
	else if (e.target.style.backgroundColor=="blue"){
	  e.target.style.backgroundColor="green";	
	}
	else if (e.target.style.backgroundColor=="green" && stageCount<=5){
	  e.target.style.backgroundColor="white";	
	}
	else if (e.target.style.backgroundColor=="green" && stageCount>5){
	  e.target.style.backgroundColor="orange";	
	}
		else if (e.target.style.backgroundColor=="orange"
){
	  e.target.style.backgroundColor="white";	
	}
	
	// A-array stores all the background colors of the spheres
	A = [0,c1.style.backgroundColor,c2.style.backgroundColor, c3.style.backgroundColor,c4.style.backgroundColor,c5.style.backgroundColor,c6.style.backgroundColor,c7.style.backgroundColor,c8.style.backgroundColor,c9.style.backgroundColor];

if (stageCount>5){
A2 = [c10.style.backgroundColor,c11.style.backgroundColor,c12.style.backgroundColor,c13.style.backgroundColor,c14.style.backgroundColor,c15.style.backgroundColor,c16.style.backgroundColor];

A = A.concat(A2);
}

	// Store a number in currentColors array corresponding to which color it is
	for (q=1;q<=A.length-1;q++){
		if( A[q]=="red" ){
			currentColors[q] = 1;
		}
		else if( A[q]=="blue" ){
			currentColors[q] = 2;
		}
		else if( A[q]=="green" ){
			currentColors[q] = 3;
		}
		else if( A[q]=="orange"){
			currentColors[q] = 4;
		}
		else{
			currentColors[q] = 5;
		}
	}

	// Check if puzzle is solved
	for (x=1;x<=currentColors.length-1;x++){
		
		zeroArray[x] = Math.abs(currentColors[x] - solutionArray[x-1]);
	}
	
	if ( zeroArray.reduce(add, 0) == 0){
	   correct.play();
	   alert("Congratulations, you finished the stage! Good work😄");
	   switch (stageCount){
		   case 1: stage2(); break;
		   case 2: stage3(); break;
		   case 3: stage4(); break;
		   case 4: stage5(); break;
		   case 5: stage6(); break;
		   case 6: stage7(); break;
	   }
	}
}

});

});