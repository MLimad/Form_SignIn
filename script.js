
    var eye = document.getElementById("icon");


      eye.addEventListener("click", function() {

      if (eye.classList.contains("fa-eye-slash")) {
        document.getElementById("password").setAttribute('type', 'text')
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
      }else {
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        document.getElementById("password").setAttribute('type', 'password')
      }


    });
