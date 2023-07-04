import React from 'react';
import logo from './fanglogoo.jpg';
import './Signinform.css';
import Google from './googlee.png';
import FB from './facebook_logoo.jpg';
import Apple from './apple_logooo.png';
import { Link } from 'react-router-dom';
const Signinform =()=>{
 return(
   <div className="layout">
    
        <img src={logo} alt="fang logo" className="fang_logo" />
        <ul className='other_options'>
          <li className="home">Home</li>
          <li className="about">About</li>
          <li className="contact">Contact</li>
          <li className="signin">Sign in</li>
           <span className='rectangle'>
            <Link to='/signup' className='sign_up'>Sign up</Link>
          </span>
        </ul>
        <div className="form_page">
        <div className="inner_form">
        <span className='signin_text'><b>Sign in</b></span>
        <form>
        <div className='form_inputtt'>
        <input
          type="text"
          id="emailOrMobile"
          name="emailOrMobile"
          placeholder="  Enter email or Mobile number"
        />
        </div>
        <div className='form_inputt'>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="  Password"
        />
        
         <li>Forgot password ?</li>
        </div>
      <button type="submit" className="submit_button">Login</button>
      </form>
      <span className='continue_with'>or continue with</span>
      <span className='no_account'>Don't have an account? <li><b>Sign up</b></li></span>
      </div>
      <img className='apple_logo' src={Apple} alt="" />
      <img className='fb_logo'   src={FB}   alt="" />
      <img className='google'  src={Google} alt="" />

      </div>
    </div>
    



 );
};

export default Signinform;