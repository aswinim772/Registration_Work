import React from 'react';
import './SignupForm.css';
import Googlee from '../../Assets/googlee.png';
import FBOOK from '../../Assets/facebook_logoo.jpg';
import Applee from '../../Assets/apple_logooo.png';
import Header from '../Header/HeaderFile';
import { Link } from 'react-router-dom';
const SignupForm =()=>{
 return(
   <div className="layout_signup">
       <Header />
        <div className="form_page_signup">
        <div className="inner_form_signup">
        <span className='signup_text'><b>Sign up</b></span>
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