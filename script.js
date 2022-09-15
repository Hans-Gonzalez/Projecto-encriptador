var results = document.getElementById("encrypter-results");
var encryptButton = document.getElementById("encrypt-button") ;


function write(){
    results.textContent= "works";
}


encryptButton.onclick = write;

