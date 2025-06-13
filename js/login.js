document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  // Recuperar usuario y clave guardados en localStorage
  const usuarioGuardado = localStorage.getItem("usuarioRegistrado");
  const claveGuardada = localStorage.getItem("claveRegistrada");

  // Validar
  if (user === usuarioGuardado && pass === claveGuardada) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", JSON.stringify({ nombre: user }));
    window.location.href = "dashboard.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});


