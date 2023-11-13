var firebaseConfig = {
	apiKey: "AIzaSyBq8jIriOY-KCaBDfDsW3d5_tROti7YiEE",
	authDomain: "universalchat-9159e.firebaseapp.com",
	databaseURL: "https://universalchat-9159e-default-rtdb.firebaseio.com",
	projectId: "universalchat-9159e",
	storageBucket: "universalchat-9159e.appspot.com",
	messagingSenderId: "349151669612",
	appId: "1:349151669612:web:083854a09159caf93c1749"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+ user_name;

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
