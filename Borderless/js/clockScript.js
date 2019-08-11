$(document).ready(function() {

var _H, _M, _S;
var res = "";
var finalAns = "";
var correctAns = "";
var ques = 1;
var score = 0;

//clock();
function clock(){

  //reset
  res = "";
  finalAns = "";
  correctAns = "";

    //calculate angle
    var d, h, m, s;
    d = new Date;

    var rH, rM, rS;
    rH = randomNum(1, 12);
    rM = randomNum(1, 60);
    rS = randomNum(1, 60);

    h = 30 * (rH);
    m = 6 * rM;
    s = 6 * rS;

    // h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    // m = 6 * d.getMinutes();
    // s = 6 * d.getSeconds();

    //move hands
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);

    //display time
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    // if(h >= 12){
    //     setText('suffix', 'PM');
    // }else{
    //     setText('suffix', 'AM');
    // }

    // if(h != 12){
    //     h %= 12;
    // }

    // setText('sec', parseInt(rS, 10));
    // setText('min', parseInt(rM, 10));
    // setText('hr', parseInt(rH, 10));

    _H = parseInt(rH, 10);
    _M = parseInt(rM, 10);
    _S = parseInt(rS, 10);

    //createRadio2(_H, _M, _S);
    //call every second
    //setTimeout(clock, 1000);

};

function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};

function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};



//createRadio2(_H, _M, _S);
function createRadio2(h, m, s){
		// var objDiv = document.getElementById("radioDiv");
    // objDiv.innerHTML = "<br>";
    var temp = [correctAns = displayChoice(h, m, s), displayChoice(randomNum(1, 12), randomNum(1, 60), randomNum(1, 60)),
                displayChoice(randomNum(1, 12), randomNum(1, 60), randomNum(1, 60)), displayChoice(randomNum(1, 12), randomNum(1, 60), randomNum(1, 60))]

    // var answers = ["<label for='rad1'><input type='radio' name='radGrp' id='rad' value='temp[0]'>"+temp[0]+"</label>",
    //               "<label for='rad2'><input type='radio' name='radGrp' id='rad' value='temp[1]'>"+temp[1]+"</label>",
    //               "<label for='rad2'><input type='radio' name='radGrp' id='rad' value='temp[2]'>"+temp[2]+"</label>",
    //               "<label for='rad2'><input type='radio' name='radGrp' id='rad' value='temp[3]'>"+temp[3]+"</label>"];

    //var res = shuffle(answers);
    res = shuffle(temp);
    for(var i=0; i<res.length; i++){
      //objDiv.innerHTML += res[i] + "<br>";

      //set button text
      $("#button" + (i+1).toString()).text(res[i]);
    }


}

function shuffle(ans){
  var j, x, i;
    for (i = ans.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = ans[i];
        ans[i] = ans[j];
        ans[j] = x;
    }
    return ans;
}

function display(h, m, s){
  return h + ":" + m + ":" + s;
}

function displayChoice(h, m, s){
  return parseInt(h, 10) + ":" + parseInt(m, 10) + ":" + parseInt(s, 10);
}


checkAnswer();

function checkAnswer(){
  clock();
  createRadio2(_H, _M, _S);
}


  $('#button1').click(function(){
		finalAns = res[0];
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})

	$('#button2').click(function(){
    finalAns = res[1];
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})

	$('#button3').click(function(){
    finalAns = res[2];
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})


	$('#button4').click(function(){
    finalAns = res[3];
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})

    $('#submit').click(function(){
      if(finalAns === correctAns){
        alert("You are right, Congratulation!");
        checkAnswer();
        ques++;
        document.getElementById("test2").innerHTML=ques;
        document.getElementById("ans").innerHTML=	score += 100;
      }else if(finalAns === ""){
  			alert("Please select your answer");
  		}
      else{
				alert("You are wrong, the correct answer is " + correctAns + ". Keep it up!");
        checkAnswer();
      }
    })

// document.getElementById("test2").innerHTML=ques;




// function checkAnswer2(objDiv, temp, res){
//   var radios = document.getElementsByName('rad');
//     console.log(objDiv.innerHTML);
//     for(var i = 0; i < radios.length; i++){
//         radios[i].onclick = function(){
//             //document.getElementById('choiceLabel').innerText = this.value;
//             if(radios[i].value === display(_H, _M, _S)){
//               alert(radios[i].value);
//             }
//         }
//     }
// }

function randomNum(min, max){
  return Math.random() * (max-min) + min;
}

})

//window.onload=clock;


// function createRadio(){
// 		var objDiv = document.getElementById("radioDiv");
//
// 		var radioItem1 = document.createElement("input");
// 		radioItem1.type = "radio";
// 		radioItem1.name = "radioGrp";
// 		radioItem1.id = "rad1";
// 		radioItem1.value = "myradio1";
//
// 		radioItem1.defaultChecked = true;
// 		radioItem1.checked = true;
//
// 		var radioItem2 = document.createElement("input");
// 		radioItem2.type = "radio";
// 		radioItem2.name = "radioGrp";
// 		radioItem2.id = "rad2";
// 		radioItem2.value = "myradio2";
//
// 		var objTextNode1 = document.createTextNode("Radio1");
// 		var objTextNode2 = document.createTextNode("Radio2");
//
// 		var objLabel = document.createElement("label");
// 		objLabel.htmlFor = radioItem1.id;
// 		objLabel.appendChild(radioItem1);
// 		objLabel.appendChild(objTextNode1);
//
// 		var objLabel2 = document.createElement("label");
// 		objLabel2.htmlFor = radioItem2.id;
// 		objLabel2.appendChild(radioItem2);
// 		objLabel2.appendChild(objTextNode2);
//
//
// 		objDiv.appendChild(objLabel);
// 		objDiv.appendChild(objLabel2);
//
// }
