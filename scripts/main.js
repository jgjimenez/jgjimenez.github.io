document.getElementById('paypalLink').addEventListener('click', function() {
    var selectedAmount = document.getElementById('donationAmount').value; // Obtiene el valor seleccionado del ComboBox
    var paypalUrl;

    // Verifica si se seleccionó 'Otro monto'
    if (selectedAmount === 'custom') {
        paypalUrl = "https://www.paypal.me/josegjimenez"; // URL genérica
    } else {
        paypalUrl = `https://www.paypal.me/josegjimenez/${selectedAmount}`; // URL con el monto seleccionado
    }

    window.open(paypalUrl, '_blank'); // Abre el enlace en una nueva pestaña
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página

    // Aquí puedes agregar la lógica para enviar el formulario (por ejemplo, usando un servicio backend)
    alert('Mensaje enviado. Gracias por contactarme!');
    this.reset(); // Reinicia el formulario
});