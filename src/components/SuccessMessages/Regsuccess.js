import './Regsuccess.css';
import Header from '../Header/HeaderFile';
import Vtrs from '../../Assets/vector.jpg';
const Regsuccess=()=>{
    return(
        <div className='layout_regsuccess'>
        <Header />
        <div>
        <img src={Vtrs} className='vector_logo_regsuccess' alt='vector' />
        </div>
        <p className='regsuccess_message'>Registration Successful!</p>
        </div>
    );
}
export default Regsuccess;