// react routing  And  custom hooks
 import { BrowserRouter,Outlet ,Routes, Route, Link } from 'react-router-dom';
 import Home from './Home';
 import { Signup } from './Signup';

function Always () {
  return <div >

    <div>
      <Outlet />
      this is always visibile 
   
    </div>
      

  </div>
}

function  Wrong () {
  return <div>
    this is wrong path 
  </div>
  
}

function App() {
  return  <div >
      <BrowserRouter>
      <Routes>
        <Route path="*"  element={<Wrong/>}></Route>
        <Route element={<Always/>}>
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Signup />} />
         </Route>

      </Routes>
      
      
      
      </BrowserRouter>
  </div>

 

 
}

export default App
