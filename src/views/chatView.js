function updateChat(message) {
    const chatBox = document.getElementById('chat');
    chatBox.innerHTML += `<p>${message}</p>`;
}
  
module.exports = { updateChat };
  