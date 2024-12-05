// Captura o nome do usuário do localStorage
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Atualiza a mensagem de boas-vindas
const welcomeMessage = document.getElementById('welcomeMessage');
if (loggedInUser) {
    welcomeMessage.textContent = `bem-vindo(a), ${loggedInUser.name}!`;
} else {
    welcomeMessage.textContent = 'bem-vindo(a), visitante!';
}
