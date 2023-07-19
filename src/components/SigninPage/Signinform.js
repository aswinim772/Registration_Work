import React from 'react';
import './Signinform.css';
import Google from '../../Assets/googlee.png';
import FB from '../../Assets/facebook_logoo.jpg';
import Apple from '../../Assets/apple_logooo.png';
import Header from '../Header/HeaderFile';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Signinform =()=>{
  const [email,setEmail]=useState('');
  const [pword,setPword]=useState('');

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log("form is submitted");
       axios.post('http://localhost:8000/login',
        {
        email: email,
        password: pword
      })
      .then((response)=>{
        console.log(response.data)
        alert("succesfully LoggedIn")
        window.location.href='/loginsuccess';
      })
      .catch((err)=>{
        console.log(err.message)
        alert('User doesnot exist')
        window.location.href='/loginunsuccess';
      })  
    
  };
  
 return(
   <div className="layout">
    
        <Header />
        <div className="form_page">
        <div className="inner_form">
        <span className='signin_textt'><b>Sign in</b></span>
        <form onSubmit={handleSubmit}>
        <div className='form_inputtt'>
        <input
          type="text"
          id="emailOrMobile"
          name="emailOrMobile"
          placeholder="  Enter email or Mobile number"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div className='form_inputt'>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="  Password"
          onChange={(e) => setPword(e.target.value)}
          required
          
        />
        
         <Link to='forgot' className='forgot_link'>Forgot password ?</Link>
        </div>
      <button type="submit" className="submit_button" >Login</button>
      </form>
      <span className='continue_with'>or continue with</span>
      <span className='no_account'>Don't have an account? <Link to='signup' className='no_accountli' ><b>Sign up</b></Link></span>
      </div>
      <img className='apple_logo' src={Apple} alt="" />
      <img className='fb_logo'   src={FB}   alt="" />
      <img className='google'  src={Google} alt="" />

      </div>
    </div>
    



 );
}
 

export default Signinform;