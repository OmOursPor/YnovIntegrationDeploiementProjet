let isValid = true; 
let message = "";

const checkString = (name, label, target) => {
    const regex = /^[a-zA-Z'àâäéèêëîïôöùûüç'-]+$/;
    isValid = true
    message = ""

    if (!name) {
        message = `Veuillez renseigner un ${label}`;
        isValid = false;
    } else if (!regex.test(name)) {
        message = `Le ${label} ne doit pas contenir de chiffre ou de caractère spécial`;
        isValid = false;
    }
    return {isValid: isValid , message: {target: target, value: message}  } 
}

const checkEmail = (email) => {
    const regex = /@/
    isValid = true
    message = ""

    if(!email) {
        message = `Veuillez renseigner un email`
        isValid = false
    }else if (!regex.test(email)){
        message = "Le format de l'email n'est pas valide, il manque un arobase"
        isValid = false
    }
    return {isValid: isValid , message: {target: "email", value: message}  } 
}

const checkBirthDate = (birthDate) => {
    isValid = true
    message = ""

    if(!birthDate) {
        isValid = false
        message = "Veuillez renseigner une date de naissance"
    }
    
    const formatBirthDate = new Date(birthDate)
    if (!(formatBirthDate instanceof Date)) {
        isValid = false
        message = "Le format de date est invalide"
    }

    let dateDiff = new Date(Date.now() - formatBirthDate.getTime());
    let age = Math.abs(dateDiff.getUTCFullYear() - 1970);

    if (age < 18) {
        isValid = false
        message = "Vous êtes trop jeune"
    }
    
    return {isValid: isValid , message: {target: "birthDate", value: message}  } 
}

const checkZip = (zip) => {
    isValid = true
    message = ""

    if(!zip) {
        isValid = false
        message = "Veuillez renseinger un code postal"
    }
    
    if(isNaN(zip)) {
        isValid = false
        message = "Veuillez rentrer un nombre"
    }
    
    if (!isNaN(zip) && zip.length != 5) {
        isValid = false
        message = "Veuillez rentrer un code postal à 5 chiffre"
    } 

    return {isValid: isValid , message: {target: "zip", value: message}  } 
}

export {checkString, checkEmail, checkBirthDate, checkZip}