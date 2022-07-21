const togglePassword = document.querySelector('.togglePassword');
const password = document.querySelector('.id_password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});
const togglePassword1 = document.querySelector('.togglePassword1');
const password1 = document.querySelector('.id_password1');

togglePassword1.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
  password1.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});
// const togglePassword11 = document.querySelector('.togglePassword11');
// const password11 = document.querySelector('.id_password11');

// togglePassword11.addEventListener('click', function (e) {
//   // toggle the type attribute
//   const type = password11.getAttribute('type') === 'password' ? 'text' : 'password';
//   password11.setAttribute('type', type);
//   // toggle the eye slash icon
//   this.classList.toggle('fa-eye-slash');
// });
// var btn =document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//   e.preventDefault()
// })


var main_img =document.querySelector(".main-img");
var step_log_in =document.querySelector(".step-log-in");
var step_sign_in =document.querySelector(".step-sign-in");
var login =document.querySelector(".login");
var login1 =document.querySelector(".login1");
var signup =document.querySelector(".signup");
var signup1 =document.querySelector(".signup1");
login.addEventListener("click",function (e) {
  e.preventDefault();
  step_log_in.classList.remove("step-log-in-1");
  main_img.classList.add("d-none");
});
signup.addEventListener("click",function (e) {
  e.preventDefault();
  step_log_in.classList.add("step-log-in-1");
  main_img.classList.add("d-none");
  step_sign_in.classList.remove("step-sign-in-1");
});
login1.addEventListener("click",function (e) {
  e.preventDefault();
  main_img.classList.add("d-none");
  step_log_in.classList.remove("step-log-in-1");
  step_sign_in.classList.add("step-sign-in-1");
});
signup1.addEventListener("click",function (e) {
  e.preventDefault();
  main_img.classList.add("d-none");
  step_log_in.classList.add("step-log-in-1");
  step_sign_in.classList.remove("step-sign-in-1");
})