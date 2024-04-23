document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const emailInput = document.getElementById('email');
        const mensajeInput = document.getElementById('mensaje');

        const userEmail = emailInput.value;
        const userMessage = mensajeInput.value;

        if (userEmail.trim() === '' || userMessage.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }
        fetch('http://localhost:3000/procesar-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                mensaje: userMessage
            })
        })
        .then(response => {
            if (response.ok) {
                alert('¡Correo enviado correctamente!');
               
            } else {
                throw new Error('Ocurrió un error al enviar el correo.');
            }
        })
        .catch(error => {
            console.error('Error al enviar el correo:', error);
            alert('Ocurrió un error al enviar el correo. Por favor, intenta de nuevo más tarde.');
        });

        emailInput.value = '';
        mensajeInput.value = '';
    });
});