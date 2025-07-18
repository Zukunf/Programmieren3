function main() {
    var socket = io();
    var chatDiv = document.getElementById('Chat');
    var input = document.getElementById('Nachricht');
    var button = document.getElementById('Senden');
    function handleSubmit(evt) {
        console.log("sending message")
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
    function handleMessage(msg) {
        console.log("handling message")
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }
    socket.on('display message', handleMessage);
}

window.onload = main;