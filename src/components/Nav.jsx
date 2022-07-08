import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
function Nav(props){
  let navigate = useNavigate() 
  const logout = async() =>{
    
    const response = await fetch("/api/logout",{headers:{
        'Authorization':'Bearer ' + props.logged.authentication.token
        },
   })
       
    if(response.status === 200){
      props.setlogged("")
      navigate("/signin")
    }else{
      console.log(response)
    }
    
}

    let nav
    if(props.logged !== ""){
  console.log(props.logged.authentication.token)

      nav = (
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
       
        <li className="nav-item align-left">
          <Link onClick={logout} to="" className="nav-link" >Logout</Link>
        </li>
      </ul>
      )
    }else{
      nav = (<ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          
          <li className="nav-item align-left">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item align-left">
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>
        </ul>
      )
    }
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <Link className="navbar-brand" to="/">Dataleak</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        {nav}
      </div>
    </nav>
    )
}

export default Nav