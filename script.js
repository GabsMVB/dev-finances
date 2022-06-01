const Modal = {
    open() {
        //abrir modal
       document.querySelector('.modal-overlay').classList.add('active');
    },close() {
        //fechar modal
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}