"use strict";
var config = { apiKey: "AIzaSyBJfURPy0NaUJcwGDJjCK7yqCSGgbfgQAA", authDomain: "lecp-bae62.firebaseapp.com", databaseURL: "https://lecp-bae62.firebaseio.com", projectId: "lecp-bae62", storageBucket: "lecp-bae62.appspot.com", messagingSenderId: "520933562441" };
firebase.initializeApp(config);
var rootRef = firebase.database().ref(),
    commentsRef = rootRef.child("comments");

function showpastcomments() { var e = document.getElementById("pastcomments");
    firebase.database().ref("comments/").orderByChild("frompage").equalTo(location.pathname).once("value", function(a) { a.forEach(function(a) { var t = a.val(),
                n = t.comment,
                o = t.name,
                m = new Date(t.when).toLocaleDateString("en-US");
            e.innerHTML += "<li>" + n + "<span> -- " + o + " (" + m + ")</span></li>" }) }) }
document.getElementById("btnSubmitComment").addEventListener("click", function() { var e = document.getElementById("txComment").value.replace(/\n/g, "<br>");
    commentsRef.push().set({ name: document.getElementById("tbName").value.trim(), comment: e.trim(), frompage: location.pathname, when: firebase.database.ServerValue.TIMESTAMP }) }), showpastcomments();