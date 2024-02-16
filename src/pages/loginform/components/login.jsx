import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../imgs/ProCR.png'
export const FirstSectionComponent = (props) => {
    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState("")

    const [myCode, setMyCode] = useState(0)
    const showNotif = (e) => {
        let code = Math.round(Math.random() * 9999)
        setMyCode(code)
        e.preventDefault()

        if (Notification.permission == "granted") {
            const body = "test"
            new Notification("2FA Code", {
                body: code,
            })

        } else {
            Notification.requestPermission().then(permission => {
                if (permission == "granted") {
                    new Notification("2FA Code")
                }
            })
        }


    }

    const signup = (e) =>{
        navigate('/register')
    }

    const login = (e) => {
        e.preventDefault()
        let newTab = [...props.profile]




        if (userName && password) {
            let connectedUser = newTab.findIndex((element => element.userName == userName && element.password == password))
            if (connectedUser != -1 && auth == myCode) {
                navigate(`/home`)
                console.log(newTab[connectedUser]);
                setUserName("")
                setPassword("")

                
            } else {
                alert("User does not exist in database")
            }


        }



    }


    return (
        <>
        <div className="mt-10">
            <p className='text-5xl font-semibold text-center'>ProCr <span className='text-white bg-secondary-color p-1 rounded-lg'>LOGIN</span></p>
        </div>
            <div class="bg-gray-100 flex justify-center items-center h-[screen] mt-16 mb-16">
<div class="w-1/2 h-screen hidden lg:block bg-red-500 py-10">
<img src={logo} alt=""  className='px-12'/>
</div>
<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 class="text-2xl font-semibold mb-4">Login</h1>
  <form action="#" method="POST">
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Username</label>
      <input onChange={(e) => { setUserName(e.target.value) }} value={userName} required type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
    <div class="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" class="text-secondary-color"/>
      <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
    </div>
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline text-secondary-color">Forgot Password?</a>
    </div>
    <button onClick={(e) => { login(e) }} type="submit" class="bg-secondary-color hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  <div class="mt-6 text-blue-500 text-center">
    <a href="#" class="hover:underline text-secondary-color" onClick={signup}>Sign up Here</a>
  </div>
</div>
</div>


        </>
    );
};

