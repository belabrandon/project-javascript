   //         3.Pagina de cadastro
        
      

        //convertando NOME para maiúscula
        function maiusc(x) {
            
            x.value = x.value.toUpperCase() ;
       }


       // Formatando e validando CPF --------------------
       function formataCPF(cpf) {
        const cpfAlvo = cpf //valor final que será passado na função
        const cpfDigitado = cpf.value   // valor definido pelo usuario
        let cpfNovo; // função que vai receber o cpfDigitado e fazer sua formatação

            cpfNovo = cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
                function( regex, arg1, arg2, arg3, arg4 ) {
                        return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4;
                })  
        cpfAlvo.value = cpfNovo; 
        } 

        // Alertando se CPF não é válido
        function valida() {
            //elemento js que retorna falso se o input corresponde ao seu pattern
            if (document.cad.cpf.validity.patternMismatch) {
                document.getElementById("cpfTxt").innerHTML="<font color='coral';>CPF inválido. Exemplo válido: 111.222.333-44</font>";
                alert("O CPF está incorreto");
            } else {
                document.getElementById("cpfTxt").innerHTML="<font color='white'; text-shadow: '20px 20px white';>CPF válido";
            }
            return false;
        }


        //Validando Data ---------------------
        var idadeF =[];
        function validadata(){
        var data = document.getElementById("nascimento").value; // pega o valor do input
   

        var ref = new Date();
        var nasc  = new Date(data);
        var idade = ref.getFullYear()- nasc.getFullYear();
        var mes = ref.getMonth() - nasc.getMonth();
        var dia = ref.getDate() - nasc.getDate()
       
            if (mes < 0 || (mes === 0 && dia<0)) {idade--;
                
                idadeF = idade
    
                if(idade>=0 && idade<=130){
                    //alert("Pode se cadastrar.");
                    document.getElementById("dataTxt").innerHTML="<font color='white'>Data válida";
                    return true;
                    
                } else{
                    document.getElementById("dataTxt").innerHTML="<font color='coral'>Data inválida. Digite uma idade entre 0 e 130 anos.</font>";
                    alert("Digite uma idade válida");
                    return false;
                    }

            
            return false;
            return idade
            
            }

        }

        //validando E-mail ----------------------------------------
        function validacaoEmail(field) {
        usuario = field.value.substring(0, field.value.indexOf("@")); //antes do @
        dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length); // depois do @
        if ((usuario.length >=1) && 
            (dominio.length >=3) &&
            (usuario.search("@")==-1) && //usuario / dominio não pode conter @
            (dominio.search("@")==-1) && 
            (usuario.search(" ")==-1) && //usuario / dominio sem espaço em branco
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) && //tem que ter ponto no dominio
            (dominio.indexOf(".") >=1)&&  // posição do 1° ponto tem que ser maior ou igual a 1 espaço, pois posição 0> deve ser ocupada por um caracter
            // tedm que ter caracter depois do ultimo ponto
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("msgemail").innerHTML="<font color='white'>E-mail válido";
 
        }
        else{
        document.getElementById("msgemail").innerHTML="<font color='coral'>Email inválido. Exemplo válido: joao@email.com</font>";
        alert("E-mail invalido");
        }
        }

        // FRASE DE CADASTRO -------------------------------------------------

        function frase(){
            var Fname = document.getElementById("nome").value
            var Femail = document.getElementById("email").value
            var Fgender = document.getElementById("gender").value
            var Fcpf = document.getElementById("cpf").value
            

            document.getElementById("resultCad").innerHTML="Olá, "+Fname+" seu login é "+Femail+", você tem "+idadeF+" anos, se define como uma pessoa do sexo "+Fgender+" e pode usar "+Fcpf+" como senha."+"<br/>";
        }