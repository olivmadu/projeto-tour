// Captura o formulário e elementos do login
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

// Função para verificar o login
function validateLogin(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || []; // Recupera os usuários registrados
    return users.find(user => user.email === email && user.password === password); // Retorna o usuário encontrado
}

// Evento de submissão do formulário
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Captura os valores do formulário
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    // Valida o login
    const user = validateLogin(email, password);

    if (user) {
        loginMessage.textContent = 'Login realizado com sucesso!';
        loginMessage.style.color = 'green';

        // Salva o nome do usuário logado no localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Redireciona para o dashboard após 2 segundos
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        loginMessage.textContent = 'Email ou senha inválidos.';
        loginMessage.style.color = 'red';
    }
});

