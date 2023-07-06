import React from 'react';
import './ResetForm.css';
import Header from '../Header/HeaderFile';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const ResetForm =()=>{
  const [passwrd, setPasswrd] = useState('');
  const [reenterPasswrd, setReenterPasswrd] = useState('');

  const validateResetForm = () => {
    if (!passwrd) {
      alert('Password is required');
    } else if (passwrd.length < 8) {
      alert('Password must be at least 8 characters long');
    }
     else if (!/(?=.*[a-z])/.test(passwrd)) {
      alert('Password must contain a lowercase letter');
     } 
    else if (!/(?=.*[A-Z])/.test(passwrd)) {
      alert('Password must contain an uppercase letter');
    }
     else if (!/(?=.*\d)/.test(passwrd)) {
      alert('Password must contain a digit');
     } 
     else if (!/(?=.*[!@#$%^&*])/.test(passwrd)) {
       alert('Password must contain a special character');
     }

     if (!reenterPasswrd) {
      alert('Please reenter your password');
    } else if (passwrd !== reenterPasswrd) {
     alert('Passwords do not match');
    }
  };

 return(
   <div className="layout_reset">
    
        <Header />
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
          value={passwrd}
          onChange={(e)=>{setPasswrd(e.target.value)}}
          />
          </div>
          <div className='re_newpassword'>
          <input
          type="password"
          id="password"
          name="password"
          placeholder="     Re-enter new password"
          value={reenterPasswrd}
          onChange={(e)=>{setReenterPasswrd(e.target.value)}}
          />
          </div>  
            <button type="submit" className="submit_button_reset" onClick={validateResetForm}>Login</button>
          </form>
          <span className='no_account_reset'>Don't have an account? <Link to='/signup' className='no_account_reset_li'><b>Sign up</b></Link></span>
          
      </div>
    </div>
 );
};

export default ResetForm;