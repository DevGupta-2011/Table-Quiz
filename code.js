var x="";
var y="";
var till = "";
var user="";
var input_value;

function ques(){
    till=document.getElementById("lol").value;
    x = Math.floor((Math.random() * till) + 1);
    document.getElementById("table_of").innerHTML="";
    input_value=document.getElementById("table_of").value;
    document.getElementById("Q").innerHTML="What is "+input_value+" into "+x+" ?";
    y = x*input_value;
    user = getElementById("user");
}
function checker(){
    document.getElementById("uwu").innerHTML="The correct answer is "+y;
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){

    key_press=e.keyCode;
    if(key_press=='13'){

        checker();
        ques();
        console.log("yo");

    }
}