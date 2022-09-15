for (let i = 0; i < document.querySelectorAll(".btn1").length; i++) {
  document.querySelectorAll(".btn1")[i].addEventListener("click", ()=>{
    console.log(document.querySelectorAll(".btn1")[i].closest(".content").getElementsByTagName('h2')[0].innerHTML)
    alert(`You Booked the ${document.querySelectorAll(".btn1")[i].closest(".content").getElementsByTagName('h2')[0].innerHTML} Hotel`)
  });
}

document.getElementById('form').onsubmit = (e) => {
	e.preventDefault();
  alert("Successfully Submitted")
}

