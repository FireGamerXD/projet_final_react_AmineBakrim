import React, { useState } from "react";
import wheyprotein from '../../imgs/wheyprotein-removebg-preview.png'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import userlogo from '../../imgs/usericon.png'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './cart.scss'


const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
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
      
        <div className="productParent h-[80vh] flex flex-col justify-center ml-64">
            <h2 className="text-center font-thin mr-64 text-6xl">Cart</h2>
            <br />
            <div className=" ms-4 table-header">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Add</p>
            </div>
            <div className=" ms-4 favorie-section">
                <div className="productParent">
                    <div className="favorie">
                        <img className="tshirt" src={wheyprotein} alt="" />
                        <p>ProductExample</p>
                        <p>$36</p>
                        <div className="quantity-control">
                            <button onClick={handleDecrease} className="text-secondary-color">-</button>
                            <h3>{quantity}</h3>
                            <button onClick={handleIncrease} className="text-green-500">+</button>
                        </div>
                        <p className="text-green-500">${36 * quantity}</p>
                        <button className="bg-secondary-color text-white p-3 px-6 rounded-full">Add</button>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        </>
    );
};

export default Cart;
