document.getElementById('hazifeladatok-lista').addEventListener('change', function() {
    var valasztottLink = this.value;
    if (valasztottLink) {
        window.location.href = valasztottLink;
    }
});
