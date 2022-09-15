
var textInput = document.getElementById("text-area");
var encryptButton = document.getElementById("encrypt-button");
var outputArea = document.getElementById("encrypter-results");

var text = textInput.value;
const chars = {"a":"ai","e":"enter","i":"imes","o":"ober","u":"ufar"} 
var output = encrypt();
//var decryptOutput = decrypt();

function encrypt(){
     return text.replace(/[aeiou]/g, m => chars[m]); 
}

function write(){
    encrypt;
    outputArea.innerHTML = output;
    textInput.value="";
}


encryptButton.onclick = write;


