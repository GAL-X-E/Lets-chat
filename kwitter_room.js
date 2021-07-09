var firebaseConfig = {
      apiKey: "AIzaSyCdX6r8DnjGu5NaJMDZV7D_nkjV8SdXJ3k",
      authDomain: "let-s-chat-48e25.firebaseapp.com",
      databaseURL: "https://let-s-chat-48e25-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-48e25",
      storageBucket: "let-s-chat-48e25.appspot.com",
      messagingSenderId: "879226919204",
      appId: "1:879226919204:web:4f905629fc6e4ecc327bb1",
      measurementId: "G-FZ36VYG7CK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addroom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }
    
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML +=row;
          //End code
          });});}
    getData();
    
    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "kwitter.html";
    }
    
     function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location = "kwitter_page.html";
     }
