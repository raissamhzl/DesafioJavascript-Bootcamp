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
    /* LEGENDA DO DESAFIO
        LETRA A. Referenciar elementos dos campos do formulário pelo ID
        LETRA B. Verificar se a senha e o e-mail estão válidos 
        LETRA C. Se tudo estiver ok, alertar o usuário que o formulário foi submetido
        LETRA D:  Plus - Alertar o usuário quando o e-mail ou senha estiverem vazios.
    */

//Função que valida se o email existe e compara com o email digitado pelo usuário
function validateEmail() {
    //LETRA A
    let inputEmail = document.getElementById('email').value;

    const emailUsers = users.find(el => el.email === inputEmail);
    let completeForm = false;   
    //LETRA B
    emailUsers === undefined ? completeForm = false : completeForm = true

    return completeForm
}     

//Função que soma as idades e compara com a senha digitada pelo usuário
function validatePasswd() {
    //LETRA A
    let inputPasswd = document.getElementById('passwd').value;   
    
    const passwdUsers = users.map(user => user.age);
    const soma = passwdUsers.reduce((previous, current) => previous + current, 0);
    let completeForm = false;  
    //LETRA B
    inputPasswd != soma ? completeForm = false : completeForm = true

    return completeForm
}    

//Função principal que alerta o usuário sobre o preenchimento do formulário
function validateForm() {
    let email = validateEmail()
    let password = validatePasswd()
    let empty = emptyField()
   
    // LETRA D
    if (empty){
        alert('Algum campo está vazio!')
     //LETRA C
    } else if (email && password) {
        alert('O formulário foi preenchido com sucesso!');
    } else {
        alert('Um dos dados informados estão incorretos ou não se encontram em nossa base de dados.')
      }     
}

//Função que alerta se o usuário deixou de preencher algum dos campos 
function emptyField() {
//LETRA D
   let  x = document.getElementById('passwd').value;
   let  y = document.getElementById('email').value;
   let completeForm = true;

   ((x == null || x=="") || (y == null || y=="")) ? completeForm = true : completeForm = false

    return completeForm
}