// Validation for Email-Registration
// Checked values
const valid = (name, email, password, cf_password) => {
    if(!name ||!email || !password) return "Bitte füllen Sie alle Felder aus!"
    if(!validateEmail(email)) return "Ungültige Email-Adresse"
    if(password.length < 8) return "Passwort zu kurz (Empfohlene Passwordlänge mind. 8 Zeichen)"
    if(cf_password !== password) return "Das Bestätigungs Passwort stimmt nicht überein"
}
// external function 'validateEmail' to validate the form of an email-address
// Source 
function validateEmail(email) {
    // Using regex to check for certain symbols in an address
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid