const form = document.querySelector("#form");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const queryTypeOne = document.querySelector("#query-option-one");
const queryTypeTwo = document.querySelector("#query-option-two");
const textareaInput = document.querySelector("#textarea");
const confirmTermsInput = document.querySelector("#confirm-term");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const firstNameValue = firstNameInput.value;
    const lastNameValue = lastNameInput.value;
    const emailValue = emailInput.value;
    const queryTypeOneValue = queryTypeOne.value;
    const queryTypeTwoValue = queryTypeTwo.value;
    const textareaValue = textareaInput.value;
    const confirmTermsValue = confirmTermsInput.value;


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
    if(emailValue === ""){
        alert("Por favor preencha com seu email");
        return;
    }

    // Verificar se algum opção foi selecionada

    if(queryTypeOneValue && queryTypeTwoValue === ""){
        alert("Selecione uma das opções");
        return;
    }

    // Verificar se a mensagem foi preenchida
    if(textareaValue === ""){
        alert("Preencha com alguma mensagem");
        return;
    }

    // Verificar se os termos foram aceitos
    if(confirmTermsValue === false){
        alert("Confirme os termos");
        return;
    }


    //Se todas as informações forem preenchidas
    form.submit()
});