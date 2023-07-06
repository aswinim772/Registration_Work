import logo from '../../Assets/fanglogoo.jpg';
import { Link } from 'react-router-dom';
import './HeaderFile.css';
const Header =()=>{
    return(
      <div className="layout">
       
            <img src={logo} alt="fang logo" className="fang_logo" />
            <ul className='other_options'>
             <li className="home">Home</li>
             <li className="about">About</li>
             <li className="contact">Contact</li>
             <Link to='/' className='signin_word'>Sign in</Link>
             <Link to='/signup' className='sign_up'>Sign up</Link> </ul>
        </div>
    
    )
}
export default Header;