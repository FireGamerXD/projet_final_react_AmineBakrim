import React from 'react';
import './components/contactsass.sass'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import userlogo from '../../imgs/usericon.png'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    const navigate = useNavigate()

    return (

        <>

<div>
            <Navbar fluid rounded className='h-[10vh] shadow-md'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white px-6 ">Pro<span className=' text-secondary-color'>Cr.</span></span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={userlogo} className='px-2' rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">UserName</span>
                            <span className="block truncate text-sm font-medium">username@gmail.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item onClick={() => navigate('/')}>Log Out</Dropdown.Item>
                        {/* <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item> */}
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='mt-2'>
                    <Navbar.Link href="#"  className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/home')}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/about')}>About</Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/shop')}>Shop</Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/contact')}>Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>


        <div>
                                   <div className="banner h-[50vh] thebanner mt-7">
                    <h1 className='text-white text-6xl font-thin w-full h-[100%] flex justify-center items-center'>CONTACT</h1>
            </div>

            <div className="container mt-12">
                    <div className="map mt-12 flex lg:flex-row flex-col justify-evenly">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0584384950894!2d-7.531276775369663!3d33.60378817332902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sar!2sma!4v1707918643127!5m2!1sar!2sma" className='xl:w-[40vw]' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
                    <form action="" className='border-l px-5 shadow-lg bg-white mt-16 h-[50vh] flex flex-col justify-between justify-around'>
                    <input type="text" placeholder='Name'  className=' border xl:w-[20vw] rounded-full'/>
                    <input type="text" placeholder='Email'  className='border xl:w-[20vw] rounded-full'/>
                    <input type="text" placeholder='Name'  className='border xl:w-[20vw] rounded-full'/>
                    <label htmlFor="" className=''>Message</label>
                    <textarea rows="3" class="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
                        <div className="buttonsubmit flex justify-center">
                    <button className=' bg-secondary-color font-thin text-lg text-white px-5 py-2 rounded-full xl:w-[15vw] '>Send</button>
</div>


                    </form>
                    
                    </div>

            </div>
        </div>
        </>
    );
};
