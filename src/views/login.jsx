// import React, {useState} from 'react'
// import { Link, useHistory } from 'react-router-dom'

// import { Helmet } from 'react-helmet'
// import authClient from '../api-client/auth-client'
// import './login.css'
// import {useUser} from '../user-context/user-context'
// const Login = (props) => {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();
//   const { updateUser } = useUser();

//   const handleLogin = async (event) => {
//     event.preventDefault()
//     try {
//       const data = await authClient.login({ mobileNumber, password });
//       console.log('Login successful', data.result.user);
//       updateUser(data.result.user);
//       localStorage.setItem('usertoken', data.result.token);
//       history.push('/home');
//       // Handle successful registration (e.g., update state, redirect, etc.)
//     } catch (error) {
//       console.error('Login failed:', error.message);
//       // Handle registration failure (e.g., display an error message)
//     }
//   };
//   return (
//     <div className="login-container">
//       <Helmet>
//         <title>Login - Anguished Loving Salmon</title>
//         <meta property="og:title" content="Login - Anguished Loving Salmon" />
//       </Helmet>
//       <div className="login-container1">
//         <div className="login-container2">
//           <span className="login-text">Login</span>
//           <svg viewBox="0 0 1024 1024" className="login-icon">
//             <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
//           </svg>
//         </div>
//         <span className="login-text1">
//           <span className="login-text2">Login</span>
//           <br></br>
//         </span>
//         <div className="login-container3">
//           <div className="login-container4">
//             <form className="login-form" onSubmit={handleLogin}>
//               <ul className="login-ul list">
//                 <li className="list-item"></li>
//                 <li className="list-item">
//                   <input
//                     type="text"
//                     placeholder="Mobile Number"
//                     className="login-textinput input"
//                     value={mobileNumber}
//                     onChange={(e) => setMobileNumber(e.target.value)}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Password"
//                     className="login-textinput1 input"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </li>
//                 <li className="login-li1 list-item">
//                   <button type="submit" className="login-button button">
//                     Login
//                   </button>
//                 </li>
//                 <li className="login-li2 list-item">
//                   <button type="button" className="login-button1 button">
//                     Forgot Password
//                   </button>
//                   <Link to="/create-account" className="login-navlink button">
//                     <span>
//                       <span>Create Account</span>
//                       <br></br>
//                     </span>
//                   </Link>
//                 </li>
//               </ul>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Tab from '../components/tab';
import NavbarTab from '../components/navbarTab';
import { MdEmojiEvents, MdCheck } from 'react-icons/md';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white p-3 fixed-top w-100">
        <div className="row">
          <div className="col">
            <FaSignInAlt size={25} className="mr- align-self-center" />
            <span className='ml-2 text-dark mt-2' style={{ fontSize: "20px", fontWeight: "bold" }}>Login</span>
          </div>
        </div>
      </header>
      <main className="flex-grow-1 p-3 overflow-auto" style={{marginTop: "60px"}}>
        <div className="game-logo mb-5 text-center mt-5">
          <h1><b><i>Digvijay</i></b></h1>
        </div>
        <form action="" className="mt-5">
          <div className="form-group">
            <input type="phone" className='form-control p-4' placeholder='Phone Number' style={{ outline: 'none', fontWeight:"bold"}} />
          </div>
          <div className="form-group">
            <input type="password" className='form-control p-4' placeholder='Password' style={{ outline: 'none', fontWeight:"bold" }} />
          </div>
          <div className="form-group text-center">
            <button type="submit" className='btn btn-primary form-control'>Login</button>
          </div>
        </form>
        <div className="row text-center">
          <div className="col">
            <Link to={"/create-account"}><button className='btn btn-outline-success form-control'><b>Create account</b></button></Link>
          </div>
          <div className="col">
            <button className='btn btn-dark'><b>Forgot Password</b></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
