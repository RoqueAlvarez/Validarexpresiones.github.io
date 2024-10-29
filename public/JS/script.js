const evaluarExpresionTexto = (expresion, texto) => {
    try {
        const regex = new RegExp(expresion);
        return regex.test(texto);
    } catch (e) {
        return false;
    } 
};

const mostrarResultados = (expresion, textoIngresado, card, alert, mensaje) => {
    card.classList.remove('border-primary', 'fondoCard');
    alert.classList.remove('alert-primary');

    card.classList.remove('border-success', 'correcto');
    alert.classList.remove('alert-success');

    card.classList.remove('border-danger', 'incorrecto');
    alert.classList.remove('alert-danger');

    if (evaluarExpresionTexto(expresion, textoIngresado)) {
        card.classList.add('border-success', 'correcto');
        alert.classList.add('alert-success');
        mensaje.textContent = `Expresión correcta para: ${textoIngresado}`;
    } else {
        card.classList.add('border-danger', 'incorrecto');
        alert.classList.add('alert-danger');
        mensaje.textContent = 'Expresión incorrecta o no válida.';
    }
};

const $formulario = document.getElementById('formulario');
const $regexInput = document.getElementById('regexInput');
const $textoInput = document.getElementById('textoInput');
const $card = document.getElementById('card');
const $alert = document.getElementById('alert');
const $mensaje = document.getElementById('mensaje');

$formulario.addEventListener('submit', e => {
    e.preventDefault();
    mostrarResultados($regexInput.value, $textoInput.value, $card, $alert, $mensaje);
});
