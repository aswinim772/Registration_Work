import React from 'react';
import logoss from './fanglogoo.jpg';
import './ResetForm.css';

const ResetForm =()=>{
 return(
   <div className="layout_reset">
    
        <img src={logoss} alt="fang logo" className="fang_logo_reset" />
        <ul className='other_options_reset'>
          <li className="home_reset">Home</li>
          <li className="about_reset">About</li>
          <li className="contact_reset">Contact</li>
          <li className="signin_reset">Sign in</li>
           <span className='rectangle_reset'>
            <li className="sign_up_reset" style={{color:'white'}}>Sign up</li>
          </span>
        </ul>
        <div className="form_page_reset">
          <span className='resetpassword_text'><b>Reset Password</b></span>
          <span className='addition_text_reset'>Please set a strong password by
          </span>
          <span className='addition_text_two_reset'>entring below.</span>
          <form>
          <div className='new_password'>
          <input
          type="password"
          id="password"
          name="password"
          placeholder="     Create new password"
          />
          </div>
          <div className='re_newpassword'>
          <input
          type="password"
          id="password"
          name="password"
          placeholder="     Re-enter new password"
          />
          </div>
            <button type="submit" className="submit_button_reset">Login</button>
          </form>
          <span className='no_account_reset'>Don't have an account? <li><b>Sign up</b></li></span>
      
      </div>
    </div>
    



 );
};

export default ResetForm;