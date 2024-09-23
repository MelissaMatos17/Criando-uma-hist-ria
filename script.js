const avanca = document.querySelectorAll('.btn.próximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const próximoPasso = 'passo-' + this.getAttribute('data-próximo');

        atual.classlist.remove('ativo');
        document.getElementById(próximoPasso).classList.add('ativo');
    })
})