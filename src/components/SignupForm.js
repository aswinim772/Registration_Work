import React from 'react';
import logoo from './fanglogoo.jpg';
import './SignupForm.css';
import Googlee from './googlee.png';
import FBOOK from './facebook_logoo.jpg';
import Applee from './apple_logooo.png';
const SignupForm =()=>{
 return(
   <div className="layout_signup">
        <img src={logoo} alt="fang logo" className="fang_logo_signup" />
        <ul className='other_options_signup'>
          <li className="home_signup">Home</li>
          <li className="about_signup">About</li>
          <li className="contact_signup">Contact</li>
          <li className="signin_signup">Sign in</li>
           <span className='rectangle_signup'>
            <li className="sign_up_signup" style={{color:'white'}}>Sign up</li>
          </span>
        </ul>
        <div className="form_page_signup">
        <div className="inner_form_signup">
        <span className='signup_text'>Sign up</span>
        <form>
        <div className='form_inputtt_signup'>
        <input
          type="text"
          id="emailOrMobile"
          name="emailOrMobile"
          placeholder="    Enter email or Mobile number"
        />
        </div>
        <div className='form_inputt_signup'>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="     Create Password"
        />
        </div>
        <div className='form_inputttt_signup'>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="     Re-enter Password"
        />
        </div>
      <button type="submit" className="submit_button_signup">Create Account</button>
      </form>
      <span className='continue_with_signup'>or continue with</span>
      <span className='no_account_signup'>Already have an account?<li>Sign in</li></span>
      </div>
      <img className='apple_logoo' src={Applee} alt="" />
      <img className='fb_logoo'   src={FBOOK}   alt="" />
      <img className='google_logoo'  src={Googlee} alt="" />

      </div>
    </div>
    



 );
};

export default SignupForm;