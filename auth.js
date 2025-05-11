
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').onsubmit = function(e) {
        e.preventDefault();
        const user = {
            name: document.getElementById('regName').value,
            email: document.getElementById('regEmail').value,
            password: document.getElementById('regPassword').value
        };
        
        localStorage.setItem(user.email, JSON.stringify(user));
        alert('Регистрация успешна!');
        window.location.href = 'login.html';
    };
}

if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').onsubmit = function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const user = JSON.parse(localStorage.getItem(email));

        if (user && user.password === password) {
            alert('Вход выполнен! Привет, ' + user.name);
            window.location.href = 'index.html';
        } else {
            alert('Ошибка: неверный email или пароль');
        }
    };
}