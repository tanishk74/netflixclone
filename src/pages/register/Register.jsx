import React, { useState,useRef } from 'react'
import './register.scss'

export default function Register() {

    const [email,setEmail] =useState("")

    const emailRef = useRef()

    const [password,setPassword] =useState("")

    const passwordRef = useRef()

    const handleStart =()=>{
        setEmail(emailRef.current.value)
    }

    const handleFinish =()=>{
        setPassword(passwordRef.current.value)
    }

  return (
    <div className='register'>
        <div className='top'>
            <div className="wrapper">
                <img 
                className='logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'></img>
                <button className='loginButton'>Sign In</button>
            </div>       
        </div>
        <div className="container">
            <h1>Unlimited Movies,TV Shows and More</h1>
            <h2>Watch Anywhere. Cancel Anytime</h2>
            <p>
                Ready to watch ? Enter Your email to create or restart your membership.
            </p>{
                !email ? (
                    <div className="input">
                      <input type="email" placeholder='email address' ref={emailRef}></input>
                      <button className="registerButton" onClick={handleStart}>Get Started </button>
                    </div>
                ):(
                    <form className="input">
                      <input type="password" placeholder='password' ref={passwordRef}></input>
                      <button className="registerButton" onClick={handleFinish}>Start Membership</button>
                    </form>
                )
            }
            
        </div>
    </div>
  )
}
