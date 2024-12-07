// ------------------------- Seletores e Elementos ------------------------- //
const resetForm = document.getElementById('form_recSenha');
const resetMessage = document.createElement('p');
resetForm.parentElement.appendChild(resetMessage);

const modal = document.getElementById('div_modal');
const redefineForm = document.getElementById('form_redefinirSenha');
const cancelButton = document.getElementById('cancelarOperacao');

// ------------------------- Funções Auxiliares ------------------------- //

/**
 * Obtém a lista de usuários do localStorage.
 * @returns {Array} Lista de usuários cadastrados.
 */
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

/**
 * Salva a lista de usuários no localStorage.
 * @param {Array} users - Lista atualizada de usuários.
 */
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

/**
 * Busca um usuário pelo e-mail.
 * @param {string} email - E-mail do usuário.
 * @returns {Object|undefined} O usuário encontrado ou undefined caso não exista.
 */
function findUserByEmail(email) {
    const users = getUsers();
    return users.find(user => user.email === email);
}

/**
 * Exibe uma mensagem de feedback ao usuário.
 * @param {string} text - Texto da mensagem.
 * @param {string} color - Cor da mensagem (ex: 'green', 'red').
 */
function showMessage(text, color) {
    resetMessage.textContent = text;
    resetMessage.style.color = color;
}

// ------------------------- Evento de Recuperação de Senha ------------------------- //

resetForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.getElementById('rec_email').value.trim();
    const user = findUserByEmail(email);

    if (user) {
        showMessage('Usuário encontrado! Agora você pode redefinir sua senha.', 'green');
        modal.style.display = 'block'; 
    } else {
        showMessage('E-mail não encontrado. Verifique e tente novamente.', 'red');
    }
});

// ------------------------- Evento de Redefinição de Senha ------------------------- //

redefineForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newPassword = document.getElementById('novaSenha').value.trim();
    const confirmPassword = document.getElementById('confirmarNovaSenha').value.trim();
    const email = document.getElementById('rec_email').value.trim();

    if (newPassword !== confirmPassword) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }

    // Atualiza a senha do usuário no localStorage
    const users = getUsers();
    const updatedUsers = users.map(user => 
        user.email === email ? { ...user, password: newPassword } : user
    );

    saveUsers(updatedUsers);

    alert('Senha redefinida com sucesso!');
    window.location.href = 'login.html';
});

// ------------------------- Evento de Cancelamento ------------------------- //

cancelButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
