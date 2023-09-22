function contadorVogal(palavra){
    const vogais = 'aeiouáàãâéèêíìîóòõAEIOUÁÃÀÂÊÉÈÍÌÎÓÒÔÕ';
    let contador = 0;
    for(let i = 0;i < palavra.length; i++){
        if(vogais.includes(palavra[i])){
          contador++
      }

    }
    return contador 
}
const palavra = 'aeiouáàãâéèêíìîóòõAEIOUÁÃÀÂÊÉÈÍÌÎÓÒÔÕ';
const quantidadeVogais = contadorVogal(palavra)
console.log(`a palavra ${palavra} tem ${quantidadeVogais} vogais`)