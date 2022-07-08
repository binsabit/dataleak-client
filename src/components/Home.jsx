import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'
function Home(props){
    const navigate = useNavigate()
    let message = ""
    useEffect(()=>{
        if(props.logged === ""){
            message = "Please sign in to use th Search, You will be redirected to Sign in page in 5 sec"
            setTimeout(()=>{},50000)
            navigate('/signin')
        }
    })

    const [isLogged, setIsLogged] = useState(false)
    const [searchItem,setSearchItem] = useState()
    const [resData, setResData] = useState()
       
    const searchReq = async() =>{
             
            let search = {
                "search_item":searchItem
            }
            const response = await fetch("/api/data",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + props.logged.authentication.token
                },
            body:JSON.stringify(search)
           })
                  
            let data = await response.json()
            // setResData(data.arr)
            console.log(data.data.arr)
            if (data.data.arr == null){
                setResData(<li>No record found</li>)
            }
            else{
            setResData(data.data.arr.map(item => {
                return <li>{item.firstname + ' ' + item.lastname + ' '+  item.gender}</li>
           }))}
        }

   
    if (props.logged === ''){
            return <p>Please Sign in</p>
        }else{
            
     
        return (
            <div>
            {message}
            <input type='text' onChange={(e)=>{setSearchItem(e.target.value)}}/>    
                <button onClick={searchReq}>Search</button>
                <ul>
                    {resData}
                </ul>     

        </div>)
        }
}

export default Home