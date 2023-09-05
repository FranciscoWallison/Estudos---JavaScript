# Estudos---JavaScript

## testando api com reac  
next api 

## atividade e projetos com ecmascript 
introducao-javascript-inicial

````
<div id="myModal" class="modal">
    <div class="modal-content">
        <div class="header">
            <span class="close">&times;</span>
            <h2>Título do Modal</h2>
        </div>
        <p>Texto no corpo do modal.</p>
        <button id="closeModalBtn">Fechar Modal</button>
    </div>
</div>
````

````
/* Estilos para o modal */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center; /* Centralizar verticalmente */
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
}

/* Estilos para o cabeçalho (título e botão de fechar) */
.header {
    background-color: #007bff; /* Cor do cabeçalho */
    color: white; /* Cor do texto no cabeçalho */
    padding: 10px;
    border-radius: 5px 5px 0 0; /* Borda arredondada no topo */
}


/* Estilos para o botão de fechar (x) */
.header .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}
/* Estilos para o botão "Fechar Modal" no rodapé */
#closeModalBtn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#closeModalBtn:hover {
    background-color: #0056b3;
}

````
