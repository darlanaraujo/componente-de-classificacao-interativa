const btnNota = document.querySelectorAll('.btn-nota');
const btnEnviar = document.querySelector('.btn-enviar');
const tela1 = document.querySelector('.tela1');
const tela2 = document.querySelector('.tela2');
const valor = document.querySelector('.valor');

let nota = 0;

btnNota.forEach((item) => {
    item.addEventListener('click', () => {
        nota = Number(item.innerHTML);

        btnNota.forEach((item) => {
            item.classList.remove('active');
        });

        item.classList.add('active');
    });

});

btnEnviar.addEventListener('click', () => {
    if(nota > 0) {
        tela1.classList.remove('active');
        tela2.classList.add('active');
        valor.innerHTML = nota;
    } else {
        alert('Antes de enviar, escolha uma nota!');
    }
});