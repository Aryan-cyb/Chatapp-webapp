
// Your web app's Firebase configuration
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBt65jRaNiKQuPBqkjDK__dq56g2a5FW9s",
      authDomain: "practice-96-f2f33.firebaseapp.com",
      databaseURL: "https://practice-96-f2f33-default-rtdb.firebaseio.com",
      projectId: "practice-96-f2f33",
      storageBucket: "practice-96-f2f33.appspot.com",
      messagingSenderId: "489426693362",
      appId: "1:489426693362:web:1186a8f89f6065263d746b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);
    
      window.location = "kwitter_page.html";
    }
    
    function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }
    
    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
    }