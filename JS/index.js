function Encriptar(){
    var codificador= {
        a:'ai',
        e:'enter',
        i:'imes',
        o:'ober',
        u: 'ufat'
        };
    let texto = document.getElementById('e1').value;
    texto=texto.replace(/a|e|i|o|u/g,function(coincidencia){return codificador[coincidencia]})
    console.log(texto);
    document.getElementById('e2').value=texto;
    
}

function Descencriptar(){
    var codificador= {
        ai:'a',
        enter:'e',
        imes:'i',
        ober:'o',
        ufat: 'u'
        };
    let texto = document.getElementById('e1').value;
    texto=texto.replace(/ai|enter|imes|ober|ufat/g,function(coincidencia){return codificador[coincidencia]})
    console.log(texto);
    document.getElementById('e2').value=texto;
    
}

function copiar(){
    let texto2= document.getElementById('e2').value;
    document.getElementById('e1').value=texto2
    document.getElementById('e2').value=''
}
