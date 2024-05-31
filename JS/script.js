document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.borderBottom = '2px solid #fff';
        });

        item.addEventListener('mouseout', function() {
            this.style.borderBottom = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const profesHeader = document.getElementById('profes');
    profesHeader.style.color = 'red'; 

    const primerEnlace = document.querySelector('nav ul li a');
    primerEnlace.textContent = 'Inicio'; 

    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.borderBottom = '2px solid #fff';
        });

        item.addEventListener('mouseout', function() {
            this.style.borderBottom = 'none';
        });
    });
});
