var color=["green","red","yellow","brown","black","pink","orange","blue"]
var figure=["circle","square","rectangle","oval","triangle","rhombus"]

//gen random number from 0 to n+1//
function gennum(n){return(Math.round((Math.random() * (n - 0 + 1)) +0))}


//result//
var z=1
var w=1

function restrue() {$("#true").html(z++)}
function resfalse() {$("#false").html(w++)}

//save value and start gen random task//
function restart() {
$("#taskcol").text(color[gennum(6)])
$("#taskfig").text(figure[gennum(4)])


$("#task").html("Choose" +" "+$("#taskcol").text()+" "+"color"+" "+"and"+" "+$("#taskfig").text())
    };


    
//pick color//
$(function(){$("#green,#red,#yellow,#brown,#black,#pink,#orange,#blue").click(
function() {$("#chcol").html($(this).attr("id"))}
);});
//clear border//
$(function(){$("#green,#red,#yellow,#brown,#black,#pink,#orange,#blue").click(function (){$("#green,#red,#yellow,#brown,#black,#pink,#orange,#blue").css({"border":"1.9px solid black"})}
);});
//green border//
$(function(){$("#green,#red,#yellow,#brown,#black,#pink,#orange,#blue").click(function() {$(this).css({"border":"1.9px solid white"})} 
);});


//pick figure//
$(function(){$("#circle,#square,#rectangle,#oval,#triangle,#rhombus").click(function() {$("#chfig").html($(this).attr("id"));
    });});
//answer - if picked 2 value//
$(function(){

$("#circle,#square,#rectangle,#oval,#triangle,#rhombus").click(function rules() {
//color and figure are not ampty//
if(
(!($("#chcol").text()==""))
&&
(!($("#chfig").text()=="")))

{if(
($("#taskcol").text()==$("#chcol").text())
&&
($("#taskfig").text()==$("#chfig").text())
)
{restrue(),restart ()}
else 
{resfalse ()}
}  
}) })