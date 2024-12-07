// Obtém o usuário logado do localStorage (se existir)
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Seleciona o elemento da mensagem de boas-vindas
const welcomeMessage = document.getElementById('welcomeMessage');

// Atualiza a mensagem de boas-vindas de acordo com o usuário logado
if (loggedInUser && loggedInUser.name) {
    welcomeMessage.textContent = `bem-vindo(a), ${loggedInUser.name}!`;
} else {
    welcomeMessage.textContent = 'bem-vindo(a), visitante!';
}
