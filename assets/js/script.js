const form = document.querySelector("#form");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const queryInput = document.querySelectorAll('input[type= radio]');
const textareaInput = document.querySelector("#textarea");
const confirmTermsInput = document.querySelectorAll('input[type= checkbox]');

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const firstNameValue = firstNameInput.value;
    const lastNameValue = lastNameInput.value;
    const emailValue = emailInput.value;
    const textareaValue = textareaInput.value;


    // Verificar se o primeiro nome está vazio
    if (firstNameValue === "" ){
        alert("Por favor preencha seu nome");
        return;
    }

    if (lastNameValue === "" ){
        alert("Por favor preencha seu sobrenome");
        return;
    }

    // Verificar se o email está vazio
    if(emailValue === "" || !validarEmail(emailInput.value)){
        alert("Por favor preencha com dados corretos seu email");
        return;
    }

    // Verificar se algum opção foi selecionada

    let selecionado = false;
    queryInput.forEach(radio =>{
        if(radio.checked){
            selecionado = true;
        }
    });

    if (!selecionado){
        alert("Por favor, selecione uma opção")
        return;
    }

    // Verificar se a mensagem foi preenchida
    if(textareaValue === ""){
        alert("Preencha com alguma mensagem");
        return;
    }

    // Verificar se os termos foram aceitos
    
    for (var i=0;i<confirmTermsInput.length;i++){ 
        if (confirmTermsInput[i].checked == true){
        }else{
            alert("Por favor confirme os termos")
            return;
        }}
    
    //Se todas as informações forem preenchidas
    form.submit()

    //Validar se o email é verdadeiro
    function validarEmail (email) {
    var emailregex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    ) 
    if(emailregex.test(email)){
        return true
    }
    return false;
}
    alert("Seu formulario foi enviado com sucesso!")    
});