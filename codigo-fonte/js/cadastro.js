// ------------------------ Seleção de Elementos ------------------------ //
const form = document.getElementById('registerForm');
const message = document.getElementById('message');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirm-password');

// ------------------------ Funções Auxiliares ------------------------ //

/**
 * Obtém a lista de usuários do localStorage.
 * @returns {Array} Lista de usuários cadastrados.
 */
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

/**
 * Salva a lista de usuários no localStorage.
 * @param {Array} users - Lista de usuários a ser salva.
 */
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

/**
 * Verifica se um e-mail já está cadastrado.
 * @param {string} email - E-mail a ser verificado.
 * @returns {boolean} True se o e-mail já existir, caso contrário false.
 */
function isEmailRegistered(email) {
    const users = getUsers();
    return users.some(user => user.email === email);
}

/**
 * Exibe uma mensagem na tela.
 * @param {string} text - Texto da mensagem.
 * @param {string} color - Cor da mensagem (ex: 'red', 'green').
 */
function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}

// ------------------------ Lógica do Formulário ------------------------ //

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = inputName.value.trim();
    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();
    const confirmPassword = inputConfirmPassword.value.trim();

    // Verificação de senhas
    if (password !== confirmPassword) {
        showMessage('As senhas não coincidem!', 'red');
        return;
    }

    // Verificação de e-mail já cadastrado
    if (isEmailRegistered(email)) {
        showMessage('Este e-mail já está cadastrado!', 'red');
        return;
    }

    // Cria objeto de usuário
    const newUser = { name, email, password };

    // Adiciona o novo usuário
    const users = getUsers();
    users.push(newUser);
    saveUsers(users);

    // Exibe mensagem de sucesso e redireciona
    showMessage('Conta criada com sucesso!', 'green');
    
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 2000);
});

