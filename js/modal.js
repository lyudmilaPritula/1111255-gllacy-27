var link= document.querySelector(".login-link");
    var popup= document.querySelector(".login");

    link.addEventListener("click", function (evt) {

      evt.preventDefanlt();
      console.log("Клик по ссылке вход");  
    });