import Signinform from "./components/Signinform";
import Activation from "./components/Activation";
import Verify from "./components/Verify";
import ForgotPage from "./components/ForgotPage";
import ResetForm from "./components/ResetForm";
import SignupForm from "./components/SignupForm";
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
