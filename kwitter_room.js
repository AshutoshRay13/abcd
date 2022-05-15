var firebaseConfig = {
      apiKey: "AIzaSyCFrBWQBLelBiUm3mKPQ-OzDYWutWy-OCw",
      authDomain: "kwitter-d3783.firebaseapp.com",
      databaseURL: "https://kwitter-d3783-default-rtdb.firebaseio.com",
      projectId: "kwitter-d3783",
      storageBucket: "kwitter-d3783.appspot.com",
      messagingSenderId: "469276678585",
      appId: "1:469276678585:web:36385da2fc389e8008fe68",
      measurementId: "G-04Q026Y2HN"
    };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
 }

 function logout(){
      
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
 }