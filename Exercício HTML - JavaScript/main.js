const form = document.getElementById('form-vali');

function numbervalid(campoA, campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let campoA = parseFloat(document.getElementById('campo-A').value);
    let campoB = parseFloat(document.getElementById('campo-B').value);

    if (numbervalid(campoA, campoB)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        
        campoA.value = '';
        campoB.value = '';
    } 
    else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
    }
});

