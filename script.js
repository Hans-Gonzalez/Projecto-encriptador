// Html main elements
var inputText = document.getElementById("text-area");
var outputArea = document.getElementById("text-output");
var message = document.getElementById("message");
var hero = document.getElementById("hero");
var encryptButton = document.getElementById("encrypt-button");
var decryptButton = document.getElementById("decrypt-button");
var copyButton = document.getElementById("copy-button");


// Variables to use
var letters = ["e","i","a","o","u"];
var replaces = ["enter","imes","ai","ober","ufat"];
var textOutput;

function lowerCase(currentInput){
    newInput = currentInput.toLowerCase();
    inputText.value = newInput;
}

function clearData(){
   inputText.value = "";
}

function checkInput(input){
    //Boolean , checks if all items are letters or an space.//
    return /^[a-z ]+$/.test(input);
}

function replace(base,change,input){
    textInput=input.value;
        for (i = 0 ; i < letters.length ; i++){

            textInput = textInput.replaceAll(base[i],change[i]);   
        }        
        textOutput=textInput;        
}
function write(){
    outputArea.innerHTML = "<p>"+textOutput+"</p>";
    outputArea.className = "show";
    message.className = "hidden";
    hero.className = "hidden";
    copyButton.className= "show";
}
function encrypt(base,change,input){

    if(input.value != "" && checkInput(input)){
        replace(base,change,input);
        write();
        clearData();
    } 
    else{
        alert("El texto solo puede contenter letras minusculas")
    }
}

function copy(){
    navigator.clipboard.writeText(textOutput);
}
encryptButton.onclick = function(){encrypt(letters,replaces,inputText)};
decryptButton.onclick = function(){encrypt(replaces,letters,inputText)};
copyButton.onclick = copy;



