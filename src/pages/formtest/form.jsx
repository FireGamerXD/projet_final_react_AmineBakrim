import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../imgs/ProCR.png'


export const Formtest = (props) => {
    
    const [username, setUserName] = useState("");
    const [useremail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const navigate = useNavigate();

    const loginn = (e) => {
        navigate("/about")
    }
    const register = (e) => {
        //* to prevent refresh  
        e.preventDefault()
        //* temp array
        let newTab = [...props.profile]
        

        //* check if ther is a  user  with the same userName

        let userExist = newTab.findIndex(element => element.userName == username)  // if the user already exist  method return the  index of the user / ila l9a lia l user  kayn  kayrje3 l index dyalo  else si non ila la  kayraje3 - 1

        if (username && useremail && password && confirmPassword && confirmPassword == password) {
            if (userExist == -1) {

                let user = {
                    userName: username,
                    userEmail: useremail,
                    password: password,
                    image: image, // Include the image in the user object
                }

                newTab.push(user)
                console.log(newTab);
                props.setProfile(newTab)


                setUserName("")
                setUserEmail("")
                setPassword("")
                setConfirmPassword("")
                console.log(newTab);
                // navigate("/")
                    navigate("/home")
            } else {
                alert("User already exist ")
                navigate("/")
            }
        } else {
            alert("All Inputs should be filed")
        }

    }

    const checkConfirm = (e) => {
        setConfirmPassword(e.target.value);
        console.log(confirmed);
        if (e.target.value == password) {
            setConfirmed(!confirmed)
        } else {
            setConfirmed(!confirmed)
        }
    }

    return (
        <>

<div className="mt-10">
            <p className='text-5xl font-semibold text-center'>ProCr <span className='text-white bg-secondary-color p-1 rounded-lg'>Sign Up</span></p>
        </div>
            <div class="bg-gray-100 flex justify-center items-center h-[screen] mt-16 mb-16">
<div class="w-1/2 h-screen hidden lg:block bg-red-500 py-10">
<img src={logo} alt=""  className='px-12'/>
</div>
<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 class="text-2xl font-semibold mb-4">SignUp</h1>
  <form action="#" method="POST">
  <div class="mb-4">
      <label for="username" class="block text-gray-600">Username</label>
      <input value={username} onChange={(e) => { setUserName(e.target.value) }} required type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Email</label>
      <input value={useremail} onChange={(e) => { setUserEmail(e.target.value) }} required type="email" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input value={password} onChange={(e) => { setPassword(e.target.value) }} required type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
    <div class="mb-4">
      <label for="confirmpass" class="block text-gray-600">ConfirmPassword</label>
      <input value={confirmPassword} onChange={(e) => { checkConfirm(e) }} required type="password" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
    <div class="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" class="text-secondary-color"/>
      <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
    </div>
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline text-secondary-color">Forgot Password?</a>
    </div>  
    <button onClick={(e) => { register(e) }} class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-secondary-color shadow-lg shadow-red-500/50 text-white">SignUp</button>
  </form>
  <div class="mt-6 text-blue-500 text-center">
    <a href="#" class="hover:underline text-secondary-color" onClick={loginn}>Sign up Here</a>
  </div>
</div>
</div>
                


        </>
    );
};

