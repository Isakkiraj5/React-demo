// import Loginform from './homepage/homepage';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Statecolor from './colorchange';
// import Mountmethod from './useeffect';
// import Update from './updateMethod';
// import Todo from './Todo/todo';
// import Reducer from './reducer/reducer';
// import Userfunction from './reducerform/reducerfile';
import Navbar from './navbar';

import Colordata from './colorcontext';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/colorpalete' element={<Colordata/> } />
        <Route path='/statecolor' element={<Statecolor/> } />
   {/* */}
   {/* <Form/> */}
   {/* {<Todo/>} */}
   {
    // <Reducer/>
   }
   {/* {
    <Userfunction/>
   } */}
   {/* {
    <Statecolor/>
   } */}
   {/* {
    <Mountmethod/>
   }
   {
    <Update/>
   } */}
   {/* {
    <Mountmethodapi/>
   } */}
   {/* {
    <Colordata />
   } */}
   </Routes>
    </div>
    
  );
}

export default App;
