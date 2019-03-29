import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'

import config from 'react-global-configuration';
require('./config.js')
firebase.initializeApp(config.get('firebase'));

require("firebase/firestore");
export const auth = firebase.auth();
export const db = firebase.firestore();
export const projects = db.collection("projects");
