import './Loginunsuccess.css';
import Header from '../Header/HeaderFile';
import Vtru from '../../Assets/errorvector.jpg';
const Loginunsuccess=()=>{
    return(
        <div className='layout_unsuccess'>
        <Header />
        <div>
        <img src={Vtru} className='vector_logo_unsuccess' alt='vector' />
        <header className='ex_symbol'>!</header>
        </div>
        <p className='loginunsuccess_message'>Login Unsuccessful!</p>
        <p className='loginmes_descrip'>User doesn't exist.Please check your Email and Password</p>
        </div>
    );
}
export default Loginunsuccess;