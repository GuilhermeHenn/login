function togglePassword() {
   document.querySelectorAll(".eye").forEach(
      function (eye) {
         eye.classList.toggle("hide")
      }
   )  
   const type = password.getAttribute("type") == "password" ? "text" : "password" 
   password.setAttribute("type", type)
}