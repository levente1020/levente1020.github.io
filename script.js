document.getElementById('hazifeladatok-lista').addEventListener('change', function() {
    var valasztottLink = this.value;
    if (valasztottLink) {
        window.location.href = valasztottLink;
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const comingSoonButton = document.querySelector('.coming-soon-btn');

    comingSoonButton.addEventListener('click', () => {
        alert('Ez a szekció még fejlesztés alatt áll. Kérjük, látogasson vissza később.');
    });
});
