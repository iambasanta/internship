"use strict";

const socket = io();
const form = document.getElementById("form");
const message = document.getElementById("message");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (message.value) {
    socket.emit("message", message.value);
    message.value = "";
  }
});

socket.on("message", (message) => {
  appendMessage(message);
});

function appendMessage(message) {
  let messageContent = document.createElement("li");
  messageContent.innerText = message;
  messages.append(messageContent);
  window.scrollTo(0, document.body.scrollHeight);
}
