const socket = io();

socket.on("history", (message) => {
  const ul = document.getElementById("messages");
  for (let i = 0; i < message.length; i++) {
    const li = document.createElement("li");
    li.className = "message";
    li.textContent = message[i];
    ul.appendChild(li);
  }
});

socket.on("message", (message) => {
  const ul = document.getElementById("messages");
  const li = document.createElement("li");
  li.className = "message";
  li.textContent = message;
  ul.appendChild(li);
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("textarea");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const date = `${hours}:${minutes}`;
  const message = input.value + `(${date})`;
  socket.emit("message", message);
  input.value = "";
});
