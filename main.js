function login() {
  var u = document.getElementById("user").value;
  var p = document.getElementById("pass").value;

  if (u === "admin" && p === "123") {
    document.getElementById("msg").innerHTML = "Login Successful";
  } else {
    document.getElementById("msg").innerHTML = "Invalid Login";
  }
}
