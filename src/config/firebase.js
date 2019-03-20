import * as firebase from "firebase";

const config = {
	apiKey: "AIzaSyBBAw343eyf2rQ9jjFsdx26-AudroC5mM4",
	authDomain: "react-plans-app.firebaseapp.com",
	databaseURL: "https://react-plans-app.firebaseio.com",
	projectId: "react-plans-app",
	storageBucket: "react-plans-app.appspot.com",
	messagingSenderId: "816541555615"
};

firebase.initializeApp(config);
require("firebase/firestore");

export const db = firebase.firestore();
export const projects = db.collection("projects");
