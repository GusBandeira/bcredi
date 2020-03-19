

export const validateEmail = email => {
    if (!email) {
        return 'O campo e-mail é obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'E-mail inválido';
    }
}

export const validateCPF = (cpf) => {
    let i = 0;

    if (!cpf) {
        return "O campo é obrigatório";
    }

    let cpfAux = cpf.replace(/[.-]/g, "");
    if ((cpfAux.length !== 11) || (/(\d)(\1){10}/.test(cpfAux))){
        return "CPF inválido";
    } 

    let sum = 0;
    for (i = 0; i < 9; i++) {
        sum += parseInt(cpfAux.charAt(i)) * (10 - i);
    }

    let rest = 11 - (sum % 11);
    if (rest === 10 || rest === 11) {
        rest = 0;
    }
    if (rest !== parseInt(cpfAux.charAt(9))) {
        return "CPF inválido";
    }

    sum = 0;
    for (i = 0; i < 10; i ++) {
        sum += parseInt(cpfAux.charAt(i)) * (11 - i);
    }

    rest = 11 - (sum % 11);
    if (rest === 10 || rest === 11) { 
        rest = 0;
    }
    if (rest !== parseInt(cpfAux.charAt(10))) {
        return "CPF inválido";
    }

    return ""
}

export const validateDate = date => {

    // Sim, é uma puta (baita) de uma regex. No entanto, ela é capaz de validar o formato correto das datas 
    // e ainda exclui possíveis incompatibilidades como por exemplo 30/02 ou 29/02/2019

    if (!date) {
        return 'O campo é obrigatório';
    } 
    else if (!/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/i.test(date)) {
        return 'Data inválida';
    }

    
}

export const validatePassword = password => {
    if(!password){
        return 'O campo senha é obrigatório'
    }
}