document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    document.getElementById('execute').addEventListener('click', () => {
        document.getElementById('titulo').classList.add('pronto');
    });

    document.getElementById('send').addEventListener('click', sendToServer);
}

function sendToServer() {
    let objRequest = new XMLHttpRequest();
    objRequest.onload = showResponse;
    objRequest.open("get", "https://jsonplaceholder.typicode.com/posts/1", true);
    objRequest.send();
}

function showResponse() {
    let responseTag = document.getElementById('response');
    responseTag.innerHTML = (this.responseText);
}