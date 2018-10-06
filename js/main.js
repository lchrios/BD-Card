function access(){
  console.log(document.getElementById("password").value)
  if(document.getElementById("password").value=="ti"){
    document.getElementById("noPass").style.display = "none";
    document.getElementById("yPass").style.display = "block";
  } else {
    document.getElementById("noPass").style.display = "block";
    document.getElementById("yPass").style.display = "none";
  }
}
