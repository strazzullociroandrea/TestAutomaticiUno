import { generaPassword } from "./fetch.js";
const genera = document.getElementById("genera");
const password = document.getElementById("password");
const lPass = document.getElementById("lPass");

genera.onclick = async () => {
  if(parseInt(lPass.value) > 3){
    try {
      password.innerText = await generaPassword(parseInt(lPass.value));
      if (lPass.classList.contains("border-danger")) {
        lPass.classList.remove("border-danger");
      }
      lPass.value = "";
    } catch (error) {
      lPass.classList.add("border-danger");
    }
  }else{
     lPass.classList.add("border-danger");
  }
};
