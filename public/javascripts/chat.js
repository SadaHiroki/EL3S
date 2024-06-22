const socket = io();

socket.on('message', (message) => {
  const ul = document.getElementById("messages");
  const li = document.createElement('li');
  li.className = "message";
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const date = `${hours}:${minutes}`;
  li.textContent = message + ' (' + date + ')';
  ul.appendChild(li);
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById("textarea");
  const message = input.value;
  socket.emit('message', message);
  input.value = '';
});
