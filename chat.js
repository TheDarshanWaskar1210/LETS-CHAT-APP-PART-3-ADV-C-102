// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDM37CtUn3eqzPRP1u8WELjmvQFiIxKMMM",
    authDomain: "letschatappbase.firebaseapp.com",
    databaseURL: "https://letschatappbase-default-rtdb.firebaseio.com",
    projectId: "letschatappbase",
    storageBucket: "letschatappbase.appspot.com",
    messagingSenderId: "41917450611",
    appId: "1:41917450611:web:402343f63648546072dd06"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}
function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}


