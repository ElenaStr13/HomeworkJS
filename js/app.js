function validateEmail(email) {
    if (email == '') { return false }
    if (typeof email !== 'string') { return false }
    if (+email == 0) { return false }
    if (email.length > 5) { return false }//email не повинен мати більше 5 символів, інкаше false
    if (/'\@+'/.email) { return false }
    if (!email.split('').includes('@') || email.split('')[0] == '@') { return false }
    if (email.includes('.') < 2) { return false }
    if (email.includes(".@")) { return false }
    else {
        return true
    }
}

//console.log(validateEmail('e.mail@gmail.com'))
