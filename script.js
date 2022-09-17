// Html elements
var input = document.getElementById("text-area");
var outputArea = document.getElementById("text-ouput");
var message = document.getElementById("message");
var encryptButton = document.getElementById("encrypt-button");
var decryptButton = document.getElementById("decrypt-button");
var copyButton = document.getElementById("copy-button");

// Variables to use
var letters = ["e","i","a","o","u"];
var replaces = ["enter","unes","ai","ober","ufat"];
var textInput;
var textOutput;

function pushData(){
    textInput = input.value;
}
function clearData(){
    input.value = "";
}
function write(){
    outputArea.className = "show";
    message.className = "hidden";
    copyButton.className= "show";
    outputArea.value = textOutput;
}


function replacing(base,change){
        for (i = 0 ; i < letters.length ; i++){
            textInput = textInput.replaceAll(base[i],change[i]);   
        }        
        textOutput=textInput;        
}


function encrypt(){
    if(input.value != ""){
        pushData();
        replacing(letters,replaces);
        write();
        clearData();
    } 
}

function decrypt(){
    if(input.value != ""){
        pushData();
        replacing(replaces,letters);
        write();
        clearData();
    }
}

function copy(){
    navigator.clipboard.writeText(textOutput);
    outputArea.value = "";
    outputArea.className = "hidden";
    message.className = "show message-container";
    copyButton.className= "hidden";
}

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;
copyButton.onclick = copy;


