import React from 'react';
import banner from '../../imgs/banner1_carousel.png'
import './components/aboutsass.sass'
import mengym from '../../imgs/menpng-removebg-preview.png'
import whey from '../../imgs/wheyprotein.png'

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import userlogo from '../../imgs/usericon.png'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const About = () => {
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

            <div className="thebanner h-[40vh] mt-8">
                <p className='text-white text-6xl w-full h-[100%] flex justify-center items-center'>About Us</p>
            </div>

            <div className="mt-16 containerbellow flex flex-col xl:flex-row justify-center">

                <div className="image hover:scale-105 transition">
                    <img src={whey} alt="" />
                </div>

                <div className="alltext text-md flex flex-col justify-center items-center">

                    <div className="heading pb-4 text-4xl">
                        <h1 className=''>Our Story</h1>
                    </div>

                    <div className="para1 xl:w-[30vw] w-[70vw] pb-4">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorum animi. Id perferendis necessitatibus dignissimos reiciendis veniam repellendus quasi unde deleniti quam itaque ex assumenda architecto cum atque blanditiis consequuntur dolorem iusto accusamus ratione voluptatibus, quo numquam fuga adipisci hic! Quidem vel cupiditate possimus nesciunt, corrupti blanditiis neque? Perspiciatis, quis?</p>
                    </div>

                    <div className="para2 xl:w-[30vw] w-[70vw] px-8 border-l-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus quisquam iusto cumque? Sapiente, deleniti. Harum facere aspernatur corrupti qui sequi error eaque, ut asperiores!</p>
                    </div>


                </div>

            </div>

        </div>
        
        </>
    );
};
