import React, {useContext, useState} from 'react'
import {LoginContext} from "./LoginContext"

const LoginForm = () => {
  const [inputData, setInputData] = useState({username: "", password: ""})
  const [login, setLogin] = useContext(LoginContext);
  console.log(login)
  
  const handleChange = (event) =>{
    let typeOfInput = event.target.name
    switch (typeOfInput){
      case "username":{
        setInputData({...inputData, username: event.target.value});
        break
      }
      case "password":{
        setInputData({...inputData, password: event.target.value});
        break
      }
      default:{
        break;
      }
    }
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    let username = inputData.username
    let password = inputData.password
    setLogin(true)
    setInputData({username: "", password: ""})

}
  
  return(
    <>
      <h1>Login Form</h1>
      <div style={{width: "50%", margin: "0 auto", display: "block"}}>
        <div style={{border: "1px solid #aaa", padding: "20px"}}>
          <form onSubmit={handleSubmit}>
            <label style={{float: "left"}}>Username:</label>
            <input style={{float: "right"}} type="text" name="username" value={inputData.username} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>Password:</label>
            <input type="password" style={{float: "right"}} name="password" value={inputData.password} onChange={handleChange}/>
            <br/>
            <br/>
            <div style={{width: "100%", paddingBottom: "20px"}}>
              <button style={{ float: "right"}}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginForm
