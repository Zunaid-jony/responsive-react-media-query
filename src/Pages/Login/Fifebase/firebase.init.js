import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initialaizeAuthentication =() =>{
    initializeApp(firebaseConfig);
}
export default initialaizeAuthentication;