const textArea = document.querySelector('.texto_area');
const mensagem = document.querySelector('.texto_mensagem');

//CONTR + ; = COMENTA TUDO
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"], ["o", "ober"] , ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }
        return stringEncriptada
}

function btnDescriptar(){
    const textoDesencriptado = desencriptrar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptrar(stringDesencriptada){
    let matrizCodigo = [['e', 'enter'] , ['i', 'imes'] , ['a', 'ai'], ['o', 'ober'] , ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }
        return stringDesencriptada

}

const btnCopiar = document.querySelector(".botao_copiar");

btnCopiar.addEventListener("click", function() {
  mensagem.select();
  document.execCommand('copy');
  alert("Texto copiado com sucesso!");
});
