document.getElementById('generatePassword').addEventListener('click', function() {
    const length = document.getElementById('passwordLength').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';

    let allowedChars = '';
    let password = '';

    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    if (allowedChars.length === 0) {
        alert('Por favor, selecciona al menos un tipo de carácter.');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    // Mostrar la contraseña en el campo de texto
    document.getElementById('generatedPassword').value = password;

    // Calcular el nivel de seguridad
    updateSecurityLevel(password);
});

document.getElementById('copyPassword').addEventListener('click', function() {
    const passwordField = document.getElementById('generatedPassword');
    const password = passwordField.value;

    if (password) {
        // Usar la API moderna del portapapeles
        navigator.clipboard.writeText(password)
            .then(() => {
                alert('Contraseña copiada al portapapeles: ' + password);
            })
            .catch(() => {
                // Fallback para navegadores que no soportan navigator.clipboard
                passwordField.select();
                document.execCommand('copy');
                alert('Contraseña copiada al portapapeles'+ password);
            });
    } else {
        alert('No hay contraseña para copiar.');
    }
});

function updateSecurityLevel(password) {
    const bars = document.querySelectorAll('.bar');
    let strength = 0;

    // Verificar la longitud de la contraseña
    if (password.length >= 12) strength += 2;
    else if (password.length >= 8) strength += 1;

    // Verificar la complejidad de la contraseña
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    // Resetear las barras
    bars.forEach(bar => bar.className = 'bar');

    // Actualizar el color de las barras según la fortaleza
    if (strength <= 2) {
        bars[0].classList.add('red');
    } else if (strength <= 4) {
        bars[0].classList.add('orange');
        bars[1].classList.add('orange');
    } else {
        bars[0].classList.add('green');
        bars[1].classList.add('green');
        bars[2].classList.add('green');
    }
}