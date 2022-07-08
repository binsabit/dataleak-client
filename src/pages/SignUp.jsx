import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
function SignUp(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    async function submit(){
        let user = {
            "email":email,
            "password":password
        }
        const response = await fetch("/api/signup",{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            // 'Access-Control-Allow-Origin':'http://localhost:4000',
            },
        body: JSON.stringify(user)
       })
       const content = await response.json()
       console.log(content)
       if(content.hasOwnProperty('error')){
         console.log(content.error)
       }else{
        navigate('/signin')
       }

    }
    return(
    
        <div className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Please Sign Up</h1>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus
                onChange={(e)=>{setEmail(e.target.value)}}
            />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
                onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button className="btn btn-lg btn-primary btn-block" onClick={submit}>Sign Up</button>
        </div>
    
    )
}

export default SignUp