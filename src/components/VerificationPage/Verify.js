import React from 'react';
import './Verify.css';
import Header from '../Header/HeaderFile';
import { Link } from 'react-router-dom';

const Verify =()=>{
 return(
   <div className="layout_verify">
        <Header />
        <div className="form_page_verify">
          <h1 className='verifycode'><b>Verify Code</b></h1>
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
          <span className='no_account_verify'>Don't have an account? <Link to='/signup' className='no_account_verify_li'><b>Sign up</b></Link></span>
      
      </div>
    </div>
    



 );
};

export default Verify;