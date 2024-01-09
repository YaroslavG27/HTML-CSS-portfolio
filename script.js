function copyToClipboard() {
    const emailElement = document.getElementById('email');
    const emailText = emailElement.innerText;

    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');

    document.body.removeChild(tempInput);

    // Cambiar el texto del botón después de copiar
    const copyButton = document.querySelector('button');
    copyButton.innerHTML = '<img src="./copy-svgrepo-com.svg" alt="Copy Icon"> Copied!';
    
    // Restaurar el texto original después de un tiempo (por ejemplo, 2 segundos)
    setTimeout(() => {
        copyButton.innerHTML = '<img src="./copy-svgrepo-com.svg" alt="Copy Icon"> Copy Email';
    }, 2000);
}