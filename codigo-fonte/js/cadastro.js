// Captura o formulário e o elemento de mensagem
const form = document.getElementById('registerForm');
const message = document.getElementById('message');

// Função para verificar se o e-mail já está cadastrado
function isEmailRegistered(email) {
    const users = JSON.parse(localStorage.getItem('users')) || []; // Recupera todos os usuários cadastrados
    return users.some(user => user.email === email); // Verifica se o e-mail já existe
}

// Adiciona um evento de submissão ao formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Captura os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        message.textContent = 'As senhas não coincidem!';
        message.style.color = 'red';
        return;
    }

    // Verifica se o e-mail já está cadastrado
    if (isEmailRegistered(email)) {
        message.textContent = 'Este e-mail já está cadastrado!';
        message.style.color = 'red';
        return;
    }

    // Cria um objeto para armazenar os dados do usuário
    const user = {
        name: name,
        email: email,
        password: password // Em produção, as senhas devem ser criptografadas
    };

    // Recupera os usuários existentes e adiciona o novo
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);

    // Armazena a lista atualizada no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Exibe uma mensagem de sucesso e redireciona para o dashboard
    message.textContent = 'Conta criada com sucesso!';
    message.style.color = 'green';

    setTimeout(() => {
        window.location.href = 'dashboard.html'; // Redireciona para o dashboard
    }, 2000);
});
