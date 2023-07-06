import './Activation.css';
import Header from '../Header/HeaderFile';
import Vtr from '../../Assets/vector.jpg';
const Activation=()=>{
    return(
        <div className='layout_active'>
        <Header />
        <img src={Vtr} className='vector_logo' alt='vector' />
        <span className='active_text'>Activation Complete!</span>
        <p className='add_text'><span className='hidden'>Activation Complete!</span>Your Account has been successfully activated. </p>
        <p className='addd_text'>You can now log in using the username and password <span className='breakk'>you chose during the registration.</span></p>
        </div>
    );
}
export default Activation;