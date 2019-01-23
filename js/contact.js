var config = { apiKey: "AIzaSyDVGapQYLbM7tPwRgHsNQSpqXl-v8WjVgQ", authDomain: "form-44b12.firebaseapp.com", databaseURL: "https://form-44b12.firebaseio.com", projectId: "form-44b12", storageBucket: "", messagingSenderId: "690086753182" };
firebase.initializeApp(config);
var messagesRef = firebase.database().ref("messages");

function submitForm(e) { e.preventDefault(), saveMessage(getInputVal("name"), getInputVal("company"), getInputVal("email"), getInputVal("phone"), getInputVal("message")), document.querySelector(".alert").style.display = "block", setTimeout(function() { document.querySelector(".alert").style.display = "none" }, 3e3), document.getElementById("contactForm").reset() }

function getInputVal(e) { return document.getElementById(e).value }

function saveMessage(e, t, a, n, s) { messagesRef.push().set({ name: e, company: t, email: a, phone: n, message: s }) }
document.getElementById("contactForm").addEventListener("submit", submitForm);