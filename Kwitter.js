function addUser(){
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
window.location = "kwitter_room.html";
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwLEgGa9xk5BqqSpexUO_ikAQpU65IsVc",
  authDomain: "project94-2ef56.firebaseapp.com",
  databaseURL: "https://project94-2ef56-default-rtdb.firebaseio.com",
  projectId: "project94-2ef56",
  storageBucket: "project94-2ef56.appspot.com",
  messagingSenderId: "408684629177",
  appId: "1:408684629177:web:43e30e992cc26a4dfadf68"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function AddUser(){
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose :"adding user"
});
}