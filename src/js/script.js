const users = [
	{
		login: 'brunohs',
		email: 'brunohs@pbtech.net.br',
		age: 18
	},
	{
		login: 'thainabcc',
		email: 'thaina.biudes@gmail.com',
		age: 25
	},
	{
		login: 'annecl',
		email: 'annecl@pbtech.net.br',
		age: 34
	},
    {
        login: 'willianfl',
        email: 'willianfl@pbtech.net.br',
        age: 30
    },
    {
        login: 'lucasplc',
        email: 'lucasplc@pbtech.net.br',
        age: 20
    }
];

/*Por não ser um projeto real e sim um código de caráter avaliativo, 
preferi manter clara e detalhada qual foi a linha de raciocínio criada. 
Versão reduzida no fim da página em formato de comentário*/

//Função que valida e-mail digitado pelo usuário, retornando um boolean
function validateEmail() {
    let inputEmail = document.getElementById('email').value;
    const emailUsers = users.find(el => el.email === inputEmail);
    let completeForm = false;   

    emailUsers === undefined ? completeForm = false : completeForm = true
    return completeForm
}     

//Função que valida a senha digitada pelo usuário, retornando um boolean
function validatePasswd() {
    let inputPasswd = document.getElementById('passwd').value;    
    const passwdUsers = users.map(user => user.age);
    const soma = passwdUsers.reduce((previous, current) => previous + current, 0);
    let completeForm = false;  
    
    inputPasswd != soma ? completeForm = false : completeForm = true
    return completeForm
}  

//Função que analisa se algum campo está sem conteúdo, retornando um boolean
function emptyField() {
       let  x = document.getElementById('passwd').value;
       let  y = document.getElementById('email').value;
       let completeForm = true;
    
       ((x == null || x=="") || (y == null || y=="")) ? completeForm = true : completeForm = false
        return completeForm
    }

//Função que valida formulário, trazendo as 3 funções acima como variáveis
function validateForm() {
    let email = validateEmail()
    let password = validatePasswd()
    let empty = emptyField()
   
    if (empty){
        alert('Eita! Algum campo está vazio :/')
    } else if (email && password) {
        alert('Eba! Fica de olho nas informações para não perder o próximo <re>Programa :D');
    } else {
        alert('Xiii... Seu e-mail ou senha estão incorretos :(')
      }     
}

/* 
-------------------------
VERSÃO REDUZIDA DO DESAFIO

function validateForm() {
    let inputEmail = document.getElementById('email').value;
    let inputPasswd = document.getElementById('passwd').value;  
    const emailUsers = users.find(el => el.email === inputEmail);   
    const passwdUsers = users.map(user => user.age);
    const soma = passwdUsers.reduce((previous, current) => previous + current, 0);
   
    (!inputEmail || !inputPasswd) ? alert('Eita! Algum campo está vazio :/') :
    (!emailUsers || (inputPasswd !=soma)) ? alert('Xiii... Seu e-mail ou senha estão incorretos :(') :
    alert('Eba! Fica de olho nas informações para não perder o próximo <re>Programa :D')
    }
*/