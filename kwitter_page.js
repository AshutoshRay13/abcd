//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
Like=message_data['Like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class-'message_h4'>"+message+"</h4>";
Like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+Like+" onclick= 'updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like-"+Like+"</span></button><hr>";
row=name_with_tag+message_with_tag+Like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function send() {
      var msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            Like:0
      });
      document.getElementById("msg").value ="";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}
function updateLike (message_id){
 console.log("clickonLikebutton"+message_id);
 button_id=message_id;
 Likes=document.getElementById(button_id).value;
 updated_Likes=Number(Likes)+1;
 console.log(updated_Likes);
 firebase.database().ref(room_name).child(message_id).update({
       Like:updated_Likes
        });
}
      

