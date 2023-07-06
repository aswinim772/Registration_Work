import React from 'react';
import './ForgotPage.css';
import Header from '../Header/HeaderFile';
import { Link } from 'react-router-dom';

const ForgotPage =()=>{
 return(
   <div className="layout_forgot">

        <Header />
        <div className="form_page_forgot">
          <header className='forgotpassword_text'><b>Forgot Password</b></header>
          <p className='addition_text'>We will send a code to your registered 
          </p>
          <p className='addition_text_two'>email/mobile number</p>
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
          <p className='no_account_forgot'>Don't have an account? <Link to='/signup' className='no_account_forgot_li'><b>Sign up</b></Link></p>
      
      </div>
    </div>
    



 );
};

export default ForgotPage;