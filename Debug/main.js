
const comunes = ["","123456", "password", "admin", "12345", "12345678", "qwerty","abc123", "letmein", "welcome", "monkey", "1234567","iloveyou", "123123", "sunshine", "trustno1", "123456789", "qwertyuiop", "1234567890", "12345678", "1234567890", "password1", "1234567a", "qwerty123", "1q2w3e4r5t", "123456abc", "qwertyuiop123", "letmein123", "welcome1", "monkey123", "iloveyou123"];
const usuarios = [
  { usuario: "juan", contraseña: "123456" },
  { usuario: "maria", contraseña: "Segura2024!" },
  { usuario: "admin", contraseña: "adminI@123" }   // Array with user objects
];
function FindweakPass (password) {
    const mayus = /[A-Z]/.test(password);  // test  Finds patterns in a string
    const nunm   = /[0-9]/.test(password);
    const Simbl = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (

        password === "" ||   // Remember to use  "||"   for a logical OR 
        password.length < 8 ||  
        comunes.includes(password) ||
        !mayus || !nunm ||!Simbl   // logical Not operator "!" checks if the password does not contain uppercase letters, numbers, or symbols
     

    );
}
const report = usuarios.map(user =>{   // Created array called report using map
    return {
        User : user.usuario,
        Password: user.contraseña,
        Status: FindweakPass(user.contraseña ) ? "Unsecure" : "Secure"
    };
})



console.table(report);
