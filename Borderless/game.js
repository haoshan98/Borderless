// ls | perl -pi -e 's/^(.*)\.jpg/"$1",/g'

words = [
         "acorn",
         "apple",
         "backpack",
         "ball",
         "barn",
         "basket",
         "basketball",
         "bear",
         "bed",
         "bee",
         "black",
         "blue",
         "boat",
         "book",
         "brown",
         "bus",
         "cake",
         "california",
         "camera",
         "candy",
         "car",
         "cat",
         "chair",
         "cloud",
         "cow",
         "dog",
         "doll",
         "donkey",
         "duck",
         "elephant",
         "extinguisher",
         "fire",
         "firefighter",
         "fish",
         "four",
         "fox",
         "giraffe",
         "globe",
         "goat",
         "green",
         "hat",
         "horse",
         "hose",
         "house",
         "hydrant",
         "ladder",
         "leaf",
         "leaves",
         "markers",
         "monkey",
         "moose",
         "one",
         "orange",
         "orchard",
         "oregon",
         "panda",
         "people",
         "pie",
         "pig",
         "pink",
         "plane",
         "pumpkin",
         "purple",
         "rain",
         "rake",
         "red",
         "road",
         "rollercoaster",
         "room",
         "ruler",
         "saw",
         "scarecrow",
         "school",
         "seed",
         "shell",
         "snow",
         "soccerball",
         "stars",
         "sun",
         "taxi",
         "teacher",
         "three",
         "train",
         "tree",
         "truck",
         "two",
         "white",
         "yellow"
];

function speak(str) {

    var msg = new SpeechSynthesisUtterance(str);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
}

var correctAns;

function GameCntl($scope, $timeout) {
    $scope.clue = "_ar";
    $scope.word = "car";
    $scope.letter = "c";
    $scope.index = 0;
    $scope.right_indicator = false;
    $scope.wrong_indicator = false;
    $scope.number_right = 0;
    $scope.timeout = 0;
    $scope.mode = "any";

    $scope.setmode = function(m) {
        $scope.mode = m;
        $scope.next();
    }

    $scope.next = function() {
      document.getElementById("clueDiv").innerHTML = "";
      document.getElementById("clueBtn").disabled = false;


        $scope.timeout = 0;

        // Pick a random word
        $scope.word = words[Math.floor(Math.random()*words.length)];

        // Select a letter
        if($scope.mode == "any") {
            $scope.index = Math.floor(Math.random()*$scope.word.length);
        } else {
            $scope.index = 0;
        }

        $scope.letter = $scope.word[$scope.index];
        // console.log($scope.letter);
        correctAns = ($scope.letter).toString();

        $scope.resetclue();
    };

    $scope.resetclue = function() {
        $scope.timeout = 0;
        $scope.right_indicator = false;
        $scope.wrong_indicator = false;

        $scope.clue = $scope.word.substr(0, $scope.index) + '_'
        + $scope.word.substr($scope.index + 1);

        speak($scope.word);
    };

    $scope.keyup = function(e) {
        // If they already got it right, ignore input
        if($scope.right_indicator) {
            return;
        }

        c = String.fromCharCode(e.keyCode);

        // Ignore key presses outside of A-Z
        if(c < 'A' || c > 'Z') {
            return;
        }

        if(c == $scope.letter.toUpperCase()) {
            $scope.correct();
        } else if(c == ' ') {
            $scope.next();
        } else {
            $scope.incorrect(c);
        }
    };

    $scope.correct = function() {

        $scope.number_right += 1;

        $scope.right_indicator = true;
        $scope.wrong_indicator = false;

        $scope.clue = $scope.word.substr(0, $scope.index) + $scope.letter
        + $scope.word.substr($scope.index + 1);

        if($scope.timeout != 0) {
            $timeout.cancel($scope.timeout);
        }
        $scope.timeout = $timeout($scope.next, 2000);

        $('#jpId').jPlayer("play");
    };

    $scope.incorrect = function(c) {
        $scope.right_indicator = false;
        $scope.wrong_indicator = true;

        $scope.clue = $scope.word.substr(0, $scope.index) + c.toLowerCase()
        + $scope.word.substr($scope.index + 1);

        if($scope.timeout != 0) {
            $timeout.cancel($scope.timeout);
        }
        $scope.timeout = $timeout($scope.resetclue, 2000);

        speak($scope.clue + "?");
    };

    $scope.next();
}

var letters = [];

function openClue(){  //make choices
  document.getElementById("clueBtn").disabled = true;

  var objDiv = document.getElementById("clueDiv");
  objDiv.innerHTML = "<br>";
    var noDuplicate = generateChoices();
    noDuplicate = shuffle(noDuplicate);
    // var choices = [("<h3>" + noDuplicate[0].toString() + "</h3>"), ("<h3>" + noDuplicate[1] + "</h3>"),
    //               ("<h3>" + noDuplicate[2] + "</h3>"), ("<h3>" + noDuplicate[3] + "</h3>")];

    var choices = [noDuplicate[0], noDuplicate[1], noDuplicate[2], noDuplicate[3]];
    var display = "";
    for(var i=0; i<choices.length; i++){
      //objDiv.innerHTML += choices[i];
      display += choices[i];
      if(i<choices.length-1){
        display += "  /  ";
      }
    }
    objDiv.innerHTML = "<br><h1 style='color:#42e2f4'>" + display + "</h1>";
}

function generateChoices(){
  for(var i=0, n=97; n<123; i++, n++){
    letters[i] = String.fromCharCode(n);
    //console.log(letters[i]);
  }

  var arr = [correctAns];
  var i = 1;
  var n;
  while(i<4){
    var temp = letters[n = Math.floor(randomNum(0, 25))];
    if(!arr.includes(temp)){  //make sure no duplicate
      arr[i] = temp;
      console.log("i " + i);
      i++;
    }
  }
  return arr;
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

function randomNum(min, max){
  return Math.random() * (max-min) + min;
}
