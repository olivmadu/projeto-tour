// Captura o formulário de recuperação de senha e a mensagem
const resetForm = document.getElementById('form_recSenha');
const resetMessage = document.createElement('p');
resetForm.parentElement.appendChild(resetMessage); 

// Função para encontrar o usuário pelo e-mail
function findUserByEmail(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email); 
}

// Evento de submissão do formulário de recuperação
resetForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Captura o e-mail digitado no formulário
    const email = document.getElementById('rec_email').value.trim();

    // Busca o usuário pelo e-mail
    const user = findUserByEmail(email);

    if (user) {
        resetMessage.textContent = 'Usuário encontrado! Agora você pode redefinir sua senha.';
        resetMessage.style.color = 'green';

        // Exibe o modal para redefinição
        const modal = document.getElementById('div_modal');
        modal.style.display = 'block'; 
    } else {
        resetMessage.textContent = 'E-mail não encontrado. Verifique e tente novamente.';
        resetMessage.style.color = 'red';
    }
});

// Captura o formulário de redefinição de senha
const redefineForm = document.getElementById('form_redefinirSenha');

// Evento de redefinição de senha
redefineForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Captura as novas senhas
    const newPassword = document.getElementById('novaSenha').value.trim();
    const confirmPassword = document.getElementById('confirmarNovaSenha').value.trim();

    if (newPassword !== confirmPassword) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }

    // Recupera o e-mail do formulário de recuperação
    const email = document.getElementById('rec_email').value.trim();

    // Atualiza a senha no localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(user => {
        if (user.email === email) {
            return { ...user, password: newPassword }; 
        }
        return user;
    });

    // Salva os usuários atualizados no localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert('Senha redefinida com sucesso!');
    window.location.href = 'login.html'; 
});

// Captura o botão "Cancelar"
const cancelButton = document.getElementById('cancelarOperacao');

// Adiciona o evento de clique para fechar o modal
cancelButton.addEventListener('click', () => {
    const modal = document.getElementById('div_modal');
    modal.style.display = 'none'; // Esconde o modal
});
