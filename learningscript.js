document.addEventListener('DOMContentLoaded', function() {
    const enlaces = document.querySelectorAll('.menu-pestañas a');
    const pestanas = document.querySelectorAll('.pestana');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();  // Evita salto # en URL

            // Quita clase 'activa' de todos los enlaces y pestañas
            enlaces.forEach(function(el) {
                el.classList.remove('activa');
            });
            pestanas.forEach(function(p) {
                p.classList.remove('activa');
            });

            // Activa el enlace clickeado
            this.classList.add('activa');

            // Muestra la pestaña correspondiente
            const targetId = this.getAttribute('href').substring(1);
            const targetPestana = document.getElementById(targetId);
            if (targetPestana) {
                targetPestana.classList.add('activa');
            }
        });
    });
});
