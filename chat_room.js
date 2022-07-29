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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
