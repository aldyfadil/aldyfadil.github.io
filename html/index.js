
      pwShowHide = document.querySelectorAll(".fa-eye-slash");

pwShowHide.forEach(faEye => {
    faEye.addEventListener("click", () => {
        let ojo = faEye.parentElement.parentElement.querySelectorAll(".password");
        
        
        ojo.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                faEye.classList.replace("fa-eye", "fa-eye-slash");
                return;
            }
            password.type = "password";
            faEye.classList.replace("fa-eye-slash", "fa-eye");
        })
        
    })
})      