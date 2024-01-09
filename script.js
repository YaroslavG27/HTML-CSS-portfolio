function copyToClipboard() {
    const emailElement = document.getElementById('email');
    const emailText = emailElement.innerText;

    // Crear un elemento temporal (input) para copiar el texto
    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);

    // Seleccionar y copiar el texto
    tempInput.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);

    // Puedes agregar aquí algún mensaje de confirmación
}