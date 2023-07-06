import React from 'react';
import './Verify.css';
import Header from '../Header/HeaderFile';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Verify =()=>{
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const validateOTPForm = () => {
    
      if (!otp1 || !otp2 || !otp3 || !otp4) {
        alert('Please enter the complete OTP');
      }
    };
    
 return(
   <div className="layout_verify">
        <Header />
        <div className="form_page_verify">
          <h1 className='verifycode'><b>Verify Code</b></h1>
          <p className='verifycode_text'>Code send to <b>aswinimalli@gmail.com</b></p>
          
          <form>
          <div className="input-field">
          <input type="number" 
          value={otp1}
          onChange={(e) => setOtp1(e.target.value)}
          />
          <input type="number" 
          value={otp2}
          onChange={(e) => setOtp2(e.target.value)}
          />
          <input type="number" 
          value={otp3}
          onChange={(e) => setOtp3(e.target.value)}
          />
          <input type="number"
          value={otp4}
          onChange={(e) => setOtp4(e.target.value)}
          />
          </div>
          <button type="submit" className="submit_button_verify" onClick={validateOTPForm}>Verify</button>
          </form>
          <span className='no_account_verify'>Don't have an account? <Link to='/signup' className='no_account_verify_li'><b>Sign up</b></Link></span>
      
      </div>
    </div>
    



 );
};

export default Verify;