import Signinform from "./components/SigninPage/Signinform";
import Activation from "./components/ActivationPage/Activation";
import Verify from "./components/VerificationPage/Verify";
import ForgotPage from "./components/ForgotPage/ForgotPage";
import ResetForm from "./components/ResetPage/ResetForm";
import SignupForm from "./components/SignupPage/SignupForm";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
const routerr=createBrowserRouter([
  {path:'/' , element:<Signinform />},
  {path:'/activation' , element:<Activation />},
  {path:'/verify' , element: <Verify />},
  {path:'/forgot' , element:<ForgotPage/>},
  {path:'/reset' , element:<ResetForm />},
  {path:'/signup' , element:<SignupForm />}
]) 
function App() {
  return (
    <RouterProvider router={routerr}/> 
    
  );
}

export default App;
