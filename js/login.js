document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  // Validación simple: usuario fijo
  if (user === "admin" && pass === "1234") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", JSON.stringify({ nombre: user }));
    window.location.href = "dashboard.html"; // aún no creado
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});
