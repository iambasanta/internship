"use strict";

const socket = io();
const form = document.getElementById("form");
const message = document.getElementById("message");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (message.value) {
    sendMessage(message.value);
    socket.emit("message", message.value);
    message.value = "";
  }
});

function sendMessage(message) {
  appendMessage(message, "outgoing");
}

socket.on("message", (message) => {
  appendMessage(message, "incoming");
});

function appendMessage(message, type) {
  let messageContent = document.createElement("div");
  messageContent.classList.add(type, "content");
  messageContent.innerText = message;
  messages.appendChild(messageContent);
  window.scrollTo(0, document.body.scrollHeight);
}
