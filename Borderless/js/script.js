$(document).ready(function() {
	
	var ques=1;
	document.getElementById("test2").innerHTML=ques;
	
	
	
		
		
	var x=Math.floor(Math.random() * 10)+1; 
	document.getElementById("test").innerHTML=x;
	
	var string="";
	var id;
	var total=0;
	var answer=0;
	var correctans=0;
	
	
	
	
for (var i = 0; i < x; i++) { 
   id=i+1;
	 string=string+'	<div class=container11 id="firstpic'+id+'"><a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p></p></div> ';
	
	document.getElementById("pic222").innerHTML=string;
	
}
		
	check();
function check(){
	
	
	
	
		$('#firstpic1').click(function(e){
			if(this.id=='firstpic1'){
			total=total+1;			}
			document.getElementById("firstpic1").innerHTML='	<a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p>'+total+'</p> ';
			e.preventDefault();
			document.getElementById("firstpic1").id = "newid";
		})
	
	$('#firstpic2').click(function(e){
		if(this.id=='firstpic2'){
			total=total+1;			}		
			document.getElementById("firstpic2").innerHTML='	<a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p>'+total+'</p> ';
				e.preventDefault();
		document.getElementById("firstpic2").id = "newid";
		})
	
	$('#firstpic3').click(function(e){
			if(this.id=='firstpic3'){
			total=total+1;			}
			document.getElementById("firstpic3").innerHTML='	<a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p>'+total+'</p> ';
				e.preventDefault();
		document.getElementById("firstpic3").id = "newid";
		})
	
	$('#firstpic4').click(function(e){
			if(this.id=='firstpic4'){
			total=total+1;			}
			document.getElementById("firstpic4").innerHTML='	<a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p>'+total+'</p> ';
			e.preventDefault();
		document.getElementById("firstpic4").id = "newid";
		})
	
	$('#firstpic5').click(function(e){
			if(this.id=='firstpic5'){
			total=total+1;			}
			document.getElementById("firstpic5").innerHTML='	<a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p>'+total+'</p> ';
						e.preventDefault();
		document.getElementById("firstpic5").id = "newid";
		})
	
	$('#firstpic6').click(function(e){
		if(this.id=='firstpic6'){
			total=total+1;			}	
			document.getElementById("firstpic6").innerHTML='	<a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p>'+total+'</p> ';
						e.preventDefault();
		document.getElementById("firstpic6").id = "newid";
		})
	
$('#firstpic7').click(function(e){
			if(this.id=='firstpic7'){
			total=total+1;			}		
			document.getElementById("firstpic7").innerHTML='	<a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p>'+total+'</p> ';
				e.preventDefault();
	document.getElementById("firstpic7").id = "newid";
		})
	
	$('#firstpic8').click(function(e){
			if(this.id=='firstpic8'){
			total=total+1;			}			
			document.getElementById("firstpic8").innerHTML='	<a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p>'+total+'</p> ';
						e.preventDefault();
		document.getElementById("firstpic8").id = "newid";
		})
	
	$('#firstpic9').click(function(e){
			if(this.id=='firstpic9'){
			total=total+1;			}			
			document.getElementById("firstpic9").innerHTML='	<a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p>'+total+'</p> ';
							e.preventDefault();
		document.getElementById("firstpic9").id = "newid";
		})
	
	$('#firstpic10').click(function(e){
			if(this.id=='firstpic10'){
			total=total+1;			}		
			document.getElementById("firstpic10").innerHTML='	<a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p>'+total+'</p> ';
						e.preventDefault();
		document.getElementById("firstpic10").id = "newid";
		})
	
}
	
	
	$('#button1').click(function(){
		answer=1;
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})
	
	$('#button2').click(function(){
		answer=2;
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})
	
	$('#button3').click(function(){
		answer=3;
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})
	
	
	$('#button4').click(function(){
		answer=4;
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})
	
	$('#button5').click(function(){
		answer=5;
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})
	
	
	$('#button6').click(function(){
		answer=6;
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})
	
	$('#button7').click(function(){
		answer=7;
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})
	
	
	$('#button8').click(function(){
		answer=8;
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})
	
	$('#button9').click(function(){
		answer=9;
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})
	
	$('#button10').click(function(){
		answer=10;
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})
		
	
	
		$('#submit').click(function(){
	
		if(answer==x){
			alert("correct");
			ques=ques+1;
			correctans=correctans+1;
			string="";
			total=0;
			
			 x=Math.floor(Math.random() * 10)+1; 
	document.getElementById("test").innerHTML=x;
			
		for (var i = 0; i < x; i++) { 
   id=i+1;
	 string=string+'	<div class=container11 id="firstpic'+id+'"><a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p></p></div> ';
	
	document.getElementById("pic222").innerHTML=string;
	check();
}	document.getElementById("test2").innerHTML=ques;
			document.getElementById("ans").innerHTML=	Math.floor(correctans*100/(ques-1)); 
		
			if(ques==11)
			{
				alert("You have finished all the question, your score is "+Math.floor(correctans*100/(ques-1)))
				
			window.location.href = "generic.html";
			}
			
		}
			
		else if(answer==0){
			alert("please select your answer");
			
		}	
			
			else{
				alert("You are wrong,the correct answer is "+x);
					ques=ques+1;
			string="";
			total=0;
			
			 x=Math.floor(Math.random() * 10)+1; 
	document.getElementById("test").innerHTML=x;
			
		for (var i = 0; i < x; i++) { 
   id=i+1;
	 string=string+'	<div class=container11 id="firstpic'+id+'"><a href="#"><img border="0" src="images/apple.png" width="92" height="92"></a><p></p></div> ';
	
	document.getElementById("pic222").innerHTML=string;
	check();
}	document.getElementById("test2").innerHTML=ques;
				
						document.getElementById("ans").innerHTML=Math.floor(correctans*100/(ques-1));
				
				
				
				if(ques==11)
			{
				alert("You have finished all the question, your score is "+Math.floor(correctans*100/(ques-1)))
				window.location.href = "generic.html";
				
			}
				
			}
			
			
			
		})	
	
		
		
		
	
	
	
	
	
	
	
	
	
	
	
});