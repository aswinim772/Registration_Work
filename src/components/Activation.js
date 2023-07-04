import './Activation.css';
import Flogo from './fanglogoo.jpg';
import Vtr from './vector.jpg';
const Activation=()=>{
    return(
        <div className='layout_active'>
         <img src={Flogo} alt="fang logo" className="fang_logo_active" />
        <ul className='other_options_active'>
            <li className="home_active">Home</li>
          <li className="about_active">About</li>
          <li className="contact_active">Contact</li>
          <li className="signin_active">Sign in</li>
           <span className='rectangle_active'>
            <li className="sign_up_active" style={{color:'white'}}>Sign up</li>
          </span>
        </ul>
        <img src={Vtr} className='vector_logo' alt='vector' />
        <span className='active_text'>Activation Complete!</span>
        <p className='add_text'><span className='hidden'>Activation Complete!</span>Your Account has been successfully activated. </p>
        <p className='addd_text'>You can now log in using the username and password <span className='breakk'>you chose during the registration.</span></p>
        </div>
    );
}
export default Activation;