import React, { useLayoutEffect } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import userlogo from '../imgs/usericon.png'
import { FaShoppingCart } from "react-icons/fa";


export const Header = () => {
    return (
        <div>
            <Navbar fluid rounded>
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
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#"  className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Navbar.Link>
                    <Navbar.Link href="#" className="text-lg block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary-color md:dark:hover:text-secondary-color dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>








    );
};
