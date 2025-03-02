// Simulación de una base de datos usando localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

function registerUser(username, email, password) {
    // Verificar si el usuario o el correo ya existen
    const userExists = users.some(user => user.username === username || user.email === email);
    if (userExists) {
        alert("El usuario o el correo electrónico ya están registrados.");
        return false;
    }

    // Registrar el nuevo usuario
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Usuario registrado con éxito.");
    return true;
}

function LogIn() {
    let usuario = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Buscar el usuario por username o email
    const user = users.find(user => user.username === usuario || user.email === usuario);

    if (user && user.password === password) {
        alert("Bienvenido");
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function mostrarTexto() {
    let userText = document.getElementById("texto").value;
    document.getElementById("mostrar").innerText = userText;
}

function showRegisterForm() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
}

function showLoginForm() {
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}

function register() {
    let username = document.getElementById("register-username").value;
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;

    if (registerUser(username, email, password)) {
        showLoginForm();
    }
}