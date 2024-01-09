function copyToClipboard() {
    const emailElement = document.getElementById('email');
    const emailText = emailElement.innerText;

    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');

    document.body.removeChild(tempInput);

    // Obtener el botón y su elemento hijo
    const copyButton = document.querySelector('button');
    const textSpan = copyButton.querySelector('.text-span');

    // Cambiar el contenido del botón después de copiar
    textSpan.textContent = 'Copied!';

    // Restaurar el contenido original después de un tiempo (por ejemplo, 2 segundos)
    setTimeout(() => {
        textSpan.textContent = 'Copy Email';
    }, 2000);
}