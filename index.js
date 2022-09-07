const inputElement = document.getElementById('form')
inputElement.onclick = (e) => {
	e.preventDefault()
}

function login(){
  let error = document.getElementById('error');
  error.style.display = "grid";
}