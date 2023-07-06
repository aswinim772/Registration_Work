import React from 'react';
import './ResetForm.css';
import Header from '../Header/HeaderFile';
import { Link } from 'react-router-dom';

const ResetForm =()=>{
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
          <span className='no_account_reset'>Don't have an account? <Link to='/signup' className='no_account_reset_li'><b>Sign up</b></Link></span>
          
      </div>
    </div>
    



 );
};

export default ResetForm;