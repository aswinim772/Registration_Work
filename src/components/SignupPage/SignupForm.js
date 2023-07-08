import React from 'react';
import './SignupForm.css';
import Googlee from '../../Assets/googlee.png';
import FBOOK from '../../Assets/facebook_logoo.jpg';
import Applee from '../../Assets/apple_logooo.png';
import Header from '../Header/HeaderFile';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const SignupForm =()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const handleSubmitt = (e) => {
    e.preventDefault();
    if(password!==reenterPassword){
    alert("Invalid entry")
    }
    else{
      alert('form is submitted')
      const data = {
      email: email,
      password: password,
      reenterPassword: reenterPassword,
    };

    axios.post('http://localhost:8000/signup', data)
    .then((response) => {
      console.log(response.data); 
      alert("registration successful");
      setEmail('');
      setPassword('');
      setReenterPassword('');
    })
  
    .catch((error) => {
      console.error(error);
      alert("error while sending HTTP reuest");
    });
  }
  };
 return(
   <div className="layout_signup">
       <Header />
        <div className="form_page_signup">
        <div className="inner_form_signup">
        <span className='signup_text'><b>Sign up</b></span>
        <form onSubmit={handleSubmitt}>
        <div className='form_inputtt_signup'>
        <input
          type="text"
          id="emailOrMobile"
          name="emailOrMobile"
          placeholder="    Enter email or Mobile number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='form_inputt_signup'>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="     Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className='form_inputttt_signup'>
        <input
          type="password"
          id="repassword"
          name="password"
          placeholder="     Re-enter Password"
          value={reenterPassword}
          onChange={(e) => setReenterPassword(e.target.value)}
        />
        </div>
      <button type="submit" className="submit_button_signup" >Create Account</button>
      </form>
      <span className='continue_with_signup'>or continue with</span>
      <span className='no_account_signup'>Already have an account?<Link to='/' className='no_account_signup_li'><b>Sign in</b></Link></span>
      </div>
      <img className='apple_logoo' src={Applee} alt="" />
      <img className='fb_logoo'   src={FBOOK}   alt="" />
      <img className='google_logoo'  src={Googlee} alt="" />

      </div>
    </div>
    



 );
};

export default SignupForm;