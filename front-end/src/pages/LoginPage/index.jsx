import React from 'react';
import ReactDOM from 'react-dom';
// import firebase from "firebase/app";
// import 'firebase/auth'; 

import { Img } from 'components'

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyAlCJNk6VZDQ8V7EYs4uDyxldm1vpIbLRE", 
//   authDomain: "tfchack.firebaseapp.com",
//   databaseURL: "https://tfchack-default-rtdb.firebaseio.com",
//   projectID: "tfchack",
//   storageBucket: "tfchack.appspot.com",
//   messagingSenderId: "711590738335",
//   appID: "1:711590738335:web:33863b807484b167ac65aa",
//   meansurementId: "G-K3B1S90534"
// };
// firebase.initizialApp(firebaseConfig);



const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const history = useHistory();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await firebase.auth().signInWithEmailAndPassword(email, password);
  //     // Redirect to another page upon successful login
  //     history.push('/dashboard');
  //   } catch (error) {
  //     console.error('Login Error:', error.message);
  //   }
  // };

  return (
    <div>Hello world!</div>
    // <div>
    //   <h2>Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
};

export default Login;
