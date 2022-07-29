const soma = function(a, b){
    console.log(a + b)
}

export default soma; 
//Navegadores nao fazem no browseer normal exports.
//No webpack vem como default, gerando arquivo diferente que vai dar importação