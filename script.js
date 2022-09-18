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

function onlyLetters(string){
    //Boolean , checks if all items are letters or an space.//
    return /^[a-zA-Z ]+$/.test(string);
}


function checkInput(){
    
    currentInput = inputText.value;

    if (onlyLetters(currentInput)){
        lowerCase(currentInput);
    }
    else{
        currentInput = currentInput.
        // Deletes the last character on the input if it isn't an allowed character//
        substring(0,currentInput.length-1);
        inputText.value = currentInput;
    }
    
    
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

    if(input.value != ""){
        replace(base,change,input);
        write();
        clearData();
    } 
}

function copy(){
    navigator.clipboard.writeText(textOutput);
}
inputText.onkeyup = function(){checkInput()};
encryptButton.onclick = function(){encrypt(letters,replaces,inputText)};
decryptButton.onclick = function(){encrypt(replaces,letters,inputText)};
copyButton.onclick = copy;



