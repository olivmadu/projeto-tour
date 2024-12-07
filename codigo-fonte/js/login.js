// ------------------------- Seleção de Elementos ------------------------- //
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const inputEmail = document.getElementById('loginEmail');
const inputPassword = document.getElementById('loginPassword');

// ------------------------- Funções Auxiliares ------------------------- //

/**
 * Obtém a lista de usuários do localStorage.
 * @returns {Array} Lista de usuários cadastrados.
 */
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

/**
 * Exibe uma mensagem de feedback ao usuário.
 * @param {string} text - Texto da mensagem.
 * @param {string} color - Cor da mensagem (ex: 'green', 'red').
 */
function showMessage(text, color) {
    loginMessage.textContent = text;
    loginMessage.style.color = color;
}

/**
 * Valida as credenciais de login.
 * @param {string} email - O e-mail digitado.
 * @param {string} password - A senha digitada.
 * @returns {Object|undefined} Retorna o objeto do usuário se válido, ou undefined se inválido.
 */
function validateLogin(email, password) {
    const users = getUsers();
    return users.find(user => user.email === email && user.password === password);
}

// ------------------------- Lógica de Login ------------------------- //
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();

    const user = validateLogin(email, password);

    if (user) {
        showMessage('Login realizado com sucesso!', 'green');
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        showMessage('Email ou senha inválidos.', 'red');
    }
});


