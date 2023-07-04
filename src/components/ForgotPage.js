import React from 'react';
import logoooo from './fanglogoo.jpg';
import './ForgotPage.css';

const ForgotPage =()=>{
 return(
   <div className="layout_forgot">

        <img src={logoooo}  alt="fang logo" className="fang_logo_forgot" />
        <ul className='other_options_forgot'>
          <li className="home_forgot">Home</li>
          <li className="about_forogt">About</li>
          <li className="contact_forgot">Contact</li>
          <li className="signin_forgot">Sign in</li>
           <rect className='rectangle_forgot'>
            <li className="sign_up_forgot" style={{color:'white'}}>Sign up</li>
          </rect>
        </ul>
        <div className="form_page_forgot">
          <text className='forgotpassword_text'><b>Forgot Password</b></text>
          <text className='addition_text'>We will send a code to your registered 
          </text>
          <text className='addition_text_two'>email/mobile number</text>
          <form>
            <div className='email_address'>
            <input
            type="text"
            id="emailOrMobile"
            name="emailOrMobile"
            placeholder="  Enter email or Mobile number"
            />
            </div>
            <button type="submit" className="submit_button_forgot">Login</button>
          </form>
          <text className='no_account_forgot'>Don't have an account? <li><b>Sign up</b></li></text>
      
      </div>
    </div>
    



 );
};

export default ForgotPage;