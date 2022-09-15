const inputElement = document.getElementById('form')
inputElement.onclick = (e) => {
	e.preventDefault()
}

function login(){

  let error = document.getElementById('error');

  if(document.getElementById("uname").value == "" || document.getElementById("uname").value == " " || document.getElementById("paz").value == "" || document.getElementById("paz").value == " "){
    
    error.innerHTML = "Please fill all the inputs";
    error.style.backgroundColor = "#80000078";
    error.style.display = "grid";
  }
  else{
    error.innerHTML = "Login Succesfull !";
    error.style.backgroundColor = "#0080007a";
    error.style.display = "grid";
  }

  
}