window.onload = function () {

    $_id("num-phone").onkeypress = function () {
       return mascara(this, mascaratel);
    }//Terminar essa validação

    $_id("cadastrar").onclick = function () {
        return verificanull();//Bt recebe vagas no celular
    }
    $_id("btjobs").onclick = function () {
        return verificanullsearch();//Bt campo de busca
    }
}

    //Valida campo numero de telefone

    function mascara(o, f) {
        v_obj = o
        v_fun = f
        setTimeout(execmascara, 1000) //Chama a função apos um segundo
    }
    function execmascara() {
        v_obj.value = v_fun(v_obj.value)
    }

    function mascaratel(valor) {
        valor = valor.replace(/\D/g, ""); //Remove tudo o que não é dígito
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");//Coloca parênteses em volta dos dois primeiros dígitos
        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        return valor;
    }
   // Fim - Valida campo numero

    function $_id(elemento_id) {// Recupera o elemento id
        return document.getElementById(elemento_id);
    }

    //Verifca tamanho e se os campos do form para receber vagas foram preenchidos
    function verificanull() {
        var numero = $_id("num-phone").value;
        var l = numero.length;//15
        var valselec = $_id("especial").value;
        var msg = $_id("message-erro-cadastro");
    
        if (numero == "" || valselec == "") {
            msg.innerHTML = "Campo Vazio!" + "\n" +
            "Preencha os corretamente para receber as vagas";
            return false;
        }

        if (l < 14) {
            msg.innerhtml = "por favor. digite um numero válido!";
            return false;
        }
        return true;
    }


    //Valida campos de pesquisa
    function verificanullsearch() {
        var job = $_id("jobq").value;
        var vaga = $_id("jobo").value;
        var msg = $_id("message-erro");

        if (job == "" || vaga == "") {
            msg.innerHTML = "Campo de pesquisa vazio!";
            return false;
        }

        return true;
    }

    // Valida form contato
    function validaforms() {
        var cname = $_id("nome-contato").value;
        var cemail = $_id("email-contato").value;
        var cassunto = $_id("assunto").value;
        var cmsg = $_id("msg-contato").value;

        if (cassunto == "" || cname == "" || cemail == "" || cmsg == "") {
            return false;
        }
        return true;
    }







 
 