import './Regunsuccess.css';
import Header from '../Header/HeaderFile';
import Vtru from '../../Assets/errorvector.jpg';
const Regunsuccess=()=>{
    return(
        <div className='layout_regunsuccess'>
        <Header />
        <div>
        <img src={Vtru} className='vector_logo_regunsuccess' alt='vector' />
        <header className='ex_symbol_reg'>!</header>
        </div>
        <p className='regunsuccess_message'>Registration Unsuccessful!</p>
        <p className='regmes_descrip'>User already exists.Please check once</p>
        </div>
    );
}
export default Regunsuccess;