 const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".fa-eye-slash"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(faEye => {
    faEye.addEventListener("click", () => {
        let pwFields = faEye.parentElement.parentElement.querySelectorAll(".password");
        
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                faEye.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }
            password.type = "password";
            faEye.classList.replace("fa-eye", "fa-eye-slash");
        })
        
    })
})      