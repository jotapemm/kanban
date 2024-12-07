import apisRequest from './api.js';

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;

    try {
      const response = await fetch(
        `https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard/GetPersonByEmail?Email=${email}`
      );
      
      if (!response.ok) {
        throw new Error("Failed to authenticate. Check your email.");
      }

      const userData = await response.json();
      localStorage.setItem("user", JSON.stringify(userData));

      // tentativa de mostrar mensagem de boas vindas
      alert(`Welcome, ${userData.Name}!`);
      window.location.href = "board.html";
    } catch (error) {
      alert(error.message);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  themeToggle.textContent = savedTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    themeToggle.textContent = newTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
  });
});