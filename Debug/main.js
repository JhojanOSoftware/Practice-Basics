
const comunes = ["","123456", "password", "admin", "12345", "12345678", "qwerty","abc123", "letmein", "welcome", "monkey", "1234567","iloveyou", "123123", "sunshine", "trustno1", "123456789", "qwertyuiop", "1234567890", "12345678", "1234567890", "password1", "1234567a", "qwerty123", "1q2w3e4r5t", "123456abc", "qwertyuiop123", "letmein123", "welcome1", "monkey123", "iloveyou123"];
const usuarios = [
  { usuario: "juan", contraseña: "123456" },
  { usuario: "maria", contraseña: "Segura2024!" },
  { usuario: "admin", contraseña: "admin" }
];
function FindweakPass (password) {
    const mayus = /[A-Z]/.test(password);
    const nunm   = /[0-9]/.test(password);
    const Simbl = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (

        password === "" ||
        password.length < 8 ||  
        comunes.includes(password) ||
        !mayus || !nunm ||!Simbl
     

    );
}
const report = usuarios.map(user =>{
    return {
        usuario : user.usuario,
        contraseña: user.contraseña,
        Estado: FindweakPass(user.contraseña ) ? "Insegura" : "Segura"
    };
})
const debiles  = report.filter(r => r.Estado === "Insegura");
const fuertes= report.filter(r => r.Estado === "Segura");



console.table(report);
