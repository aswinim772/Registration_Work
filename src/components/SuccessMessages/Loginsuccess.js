import './Loginsuccess.css';
import Header from '../Header/HeaderFile';
import Vtrs from '../../Assets/vector.jpg';
const Loginsuccess=()=>{
    return(
        <div className='layout_success'>
        <Header />
        <div>
        <img src={Vtrs} className='vector_logo_success' alt='vector' />
        <header className='ex_symbol_success'>!</header>
        </div>
        <p className='loginsuccess_message'>Login Successful!</p>
        </div>
    );
}
export default Loginsuccess;