
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.querySelector('#login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('loggedIn', 'true');
  setTimeout(()=>{
  window.location.href = 'index.html';},3600000);
});

document.querySelector('#signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('loggedIn', 'true');
  setTimeout(()=>{
  window.location.href = 'index.html';},3600000);
});

document.querySelector('#logout-btn').addEventListener('click', () => {
  localStorage.removeItem('loggedIn');
  setTimeout(()=>{
  window.location.href = 'log.html';},3600000);
});
