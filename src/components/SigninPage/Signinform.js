import React from 'react';
import './Signinform.css';
import Google from '../../Assets/googlee.png';
import FB from '../../Assets/facebook_logoo.jpg';
import Apple from '../../Assets/apple_logooo.png';
import Header from '../Header/HeaderFile';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Signinform =()=>{
  const [email,setEmail]=useState('');
  const [pword,setPword]=useState('');
  function validateFormm() {
    if (email.length === 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }
    if (pword.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }
    let countUpperCase = 0
    let countLowerCase = 0
    let countDigit = 0
    let countSpecialCharacters = 0

    for (let i = 0; i < pword.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
      ]

      if (specialChars.includes(pword[i])) {
        countSpecialCharacters++
      } else if (!isNaN(pword[i] * 1)) {
        countDigit++
      } else {
        if (pword[i] === pword[i].toUpperCase()) {
          countUpperCase++
        }
        if (pword[i] === pword[i].toLowerCase()) {
          countLowerCase++
        }
      }
    }

    if (countLowerCase === 0) {
      alert('Invalid Form, 0 lower case characters in password')
      return
    }
    if (countUpperCase === 0) {
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

    if (countDigit === 0) {
      alert('Invalid Form, 0 digit characters in password')
      return
    }

    if (countSpecialCharacters === 0) {
      alert('Invalid Form, 0 special characters in password')
      return
    }
      alert('Form is valid')
  }

  
 return(
   <div className="layout">
    
        <Header />
        <div className="form_page">
        <div className="inner_form">
        <span className='signin_textt'><b>Sign in</b></span>
        <form>
        <div className='form_inputtt'>
        <input
          type="text"
          id="emailOrMobile"
          name="emailOrMobile"
          placeholder="  Enter email or Mobile number"
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='form_inputt'>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="  Password"
          onChange={(e) => setPword(e.target.value)}
          
        />
        
         <Link to='forgot' className='forgot_link'>Forgot password ?</Link>
        </div>
      <button type="submit" className="submit_button" onClick={validateFormm}>Login</button>
      </form>
      <span className='continue_with'>or continue with</span>
      <span className='no_account'>Don't have an account? <Link to='signup' className='no_accountli' ><b>Sign up</b></Link></span>
      </div>
      <img className='apple_logo' src={Apple} alt="" />
      <img className='fb_logo'   src={FB}   alt="" />
      <img className='google'  src={Google} alt="" />

      </div>
    </div>
    



 );
 }

export default Signinform;