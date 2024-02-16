import React from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import userlogo from '../../imgs/usericon.png'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const Profile = ({ profile }) => {
    const { id } = useParams();


    const onlineUser = profile.find(element => element.userName === id);
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
                <Navbar.Collapse>
                    <Navbar.Link href="#"  className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => navigate('/home')}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shop</Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>



        <div className="h-screen w-100 bgHero">
            <div className="absolute w-100 h-100 bg-[#00000038] flex items-center justify-center">
                <div className="w-50 h-[70%] flex flex-col items-center bg-[#000000a6]">
                    {/* Display onlineUser information */}
                    {onlineUser ? (
                        <>
                            <img src={URL.createObjectURL(onlineUser.image)} alt="" />
                            <h1 className='text-white'>{onlineUser.userName}</h1>
                            {/* Add more profile information as needed */}
                        </>
                    ) : (
                        <p className="text-6xl">User not found</p>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};
