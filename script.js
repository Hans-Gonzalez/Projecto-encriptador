// Html elements
var input = document.getElementById("text-area");
var outputarea = document.getElementById("encrypter-results");
var encryptButton = document.getElementById("encrypt-button")
var decryptButton = document.getElementById("decrypt-button")

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
    outputarea.innerHTML = "<textarea id = 'text-ouput'>"+textOutput+"</textarea>";
}


function replacing(base,change){
        for (i = 0 ; i < letters.length ; i++){
            textInput = textInput.replaceAll(base[i],change[i]);   
        }        
        textOutput=textInput;        
}


function encrypt(){
    pushData();
    replacing(letters,replaces);
    write();
    createButton();
    clearData();
}

function decrypt(){
    pushData();
    replacing(replaces,letters);
    write();
    createButton();
    clearData();
}

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;



