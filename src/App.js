import React,{useState, useEffect} from 'react'
import Nav from './components/Nav'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import Home from './components/Home'
import { Routes,Route} from 'react-router-dom'
// import Form from './components/form';
function App() {
  const [login, setLogin] = useState("")
  
  // useEffect(()=>{
  //   setLogin(JSON.parse(window.sessionStorage.getItem("auth_token"))) 
  // },[])

  // useEffect(()=>{
  //   window.sessionStorage.setItem("auth_token",login)
  // },[login])

  function getToken(token){
    setLogin(token)
  }
  // console.log(login)
  return (
     
    <div className="App">
        
        <Nav logged={login} setlogged={getToken} />
        
        <Routes>
          <Route path="/" element={<Home  logged={login}/>} exact/>
          <Route path="/signup"  element={<SignUp />}/>
          <Route path="/signin" element={<SignIn login={getToken}/>}/>  
          {/* <Route path="/logout" /> */}
        </Routes>
        
      
    </div>    
  );
}

export default App;
