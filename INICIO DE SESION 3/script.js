document.addEventListener("DOMContentLoaded", function () {
    //const signupLink = document.querySelector(".tab-group .tab:nth-child(1) a");
    //const loginLink = document.querySelector(".tab-group .tab:nth-child(2) a");
    const signupLink = document.querySelector("#login .link-signup a");
    const loginLink = document.querySelector("#signup .link-login a");
    const forgotLink = document.querySelector("#login .forgot a");
    const backLoginLink = document.querySelector("#forgot-pass .back-login a");
    
    const signupForm = document.getElementById("signup");
    const loginForm = document.getElementById("login");
    const forgotFrom = document.getElementById("forgot-pass");

    // Mostrar el formulario de inicio de sesión al cargar la página
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    forgotFrom.style.display = "none";

    signupLink.addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.style.display = "block";
        loginForm.style.display = "none";
        forgotFrom.style.display = "none";
    });

    loginLink.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        forgotFrom.style.display = "none";
    });

    forgotLink.addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.style.display = "none";
        loginForm.style.display = "none";
        forgotFrom.style.display = "block";
    });

    backLoginLink.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        forgotFrom.style.display = "none";
    });
});

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector(".passIc");

togglePassword.addEventListener("click", function () {
    // toggle tipo de atributo
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // icono del toggle
    this.classList.toggle("fa-eye");
});