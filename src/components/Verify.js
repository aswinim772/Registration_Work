import React from 'react';
import logg from './fanglogoo.jpg';
import './Verify.css';

const Verify =()=>{
 return(
   <div className="layout_verify">
    
        <img src={logg} alt="fang logo" className="fang_logo_verify" />
        <ul className='other_options_verify'>
          <li className="home_verify">Home</li>
          <li className="about_verify">About</li>
          <li className="contact_verify">Contact</li>
          <li className="signin_verify">Sign in</li>
           <span className='rectangle_verify'>
            <li className="sign_up_verify" style={{color:'white'}}>Sign up</li>
          </span>
        </ul>
        <div className="form_page_verify">
          <h1 className='verifycode'>Verify Code</h1>
          <p className='verifycode_text'>Code send to <b>aswinimalli@gmail.com</b></p>
          
          <form>
          <div className="input-field">
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          </div>
          <button type="submit" className="submit_button_verify">Verify</button>
          </form>
          <span className='no_account_verify'>Don't have an account? <li>Sign up</li></span>
      
      </div>
    </div>
    



 );
};

export default Verify;