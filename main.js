document.addEventListener('DOMContentLoaded', function() {
    const formMatutina = document.querySelector('#grado');
    const formVespertina = document.querySelector('#grado');

    formMatutina.addEventListener('change', function() {
        if (this.value !== "") {
            alert(`Has seleccionado ${this.options[this.selectedIndex].text} en la Jornada Matutina`);
        }
    });

    formVespertina.addEventListener('change', function() {
        if (this.value !== "") {
            alert(`Has seleccionado ${this.options[this.selectedIndex].text} en la Jornada Vespertina`);
        }
    });
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('¡Gracias por tu interés en inscribirte en el Colegio VALLE COLONIAL!');
    });
});
