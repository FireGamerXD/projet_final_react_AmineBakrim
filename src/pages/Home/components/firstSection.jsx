
import './firstSection.sass'
import { Carousel, Tabs } from 'flowbite-react';
import userlogo from '../../../imgs/usericon.png'
import carousel1 from '../../../imgs/banner1_carousel.png'
import { useEffect, useState } from 'react';
import wheyprotein from '../../../imgs/wheyprotein-removebg-preview.png'
import bandwrist from '../../../imgs/products/wristband.png'
import { hover } from '@testing-library/user-event/dist/hover';
import BCAA from '../../../imgs/products/BCAA.png';
import Creatine from '../../../imgs/products/Creatine.png';
import MassTech from '../../../imgs/products/MassTech.png';
import Omega3 from '../../../imgs/products/Omega3.png';
import PreWorkOut from '../../../imgs/products/PreWorkOut.png';
import collpic from '../../../imgs/others/mencollection.png';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';




export const FirstSection = () => {
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

            <div className="h-56 sm:h-64 xl:h-[80vh] 2xl:h-96">
      <Carousel slide={false}>
        <span>
        <h1 className='text-xl font-thin text-white'>New Protein Collection</h1>
        <img src={carousel1} alt="" />
        </span>
        <img src={carousel1} alt="" />
        <img src={carousel1} alt="" />
        <img src={carousel1} alt="" />
        <img src={carousel1} alt="" />
      </Carousel>
    </div>

<div className="allcards w-[100%] mt-24  flex xl:flex-row flex-col justify-evenly">
    <div className="card1and2 xl:block flex flex-col items-center">

{/* card1 */}

    <div className="card1 bg-gray-200 xl:w-[25vw] h-[60vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

          <img src={wheyprotein} alt="" className='xl:w-[20vw] w-[75%] hover:scale-105 transition'/>
          <button
  class="mt-4 overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
  Buy Now!
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >10% OFF!</span>
</button></div>


{/* card2 */}

<div className="card2 mt-8 bg-gray-200 xl:w-[25vw] h-[40vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

<img src={bandwrist} alt="" className='xl:w-[12vw] w-[50%] hover:scale-105 transition'/>
<button
class="mt-4 overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
Buy Now!
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
></span>
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
></span>
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
></span>
<span
class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
>10% OFF!</span>
</button></div>

</div>

{/* cards part 2 */}

<div className="card3_4 xl:block flex flex-col items-center" >


<div className="card2 mt-8 bg-gray-200 xl:w-[25vw] h-[40vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

<img src={bandwrist} alt="" className='xl:w-[12vw] w-[50%] hover:scale-105 transition'/>
<button
class="mt-4 overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
Buy Now!
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
></span>
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
></span>
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
></span>
<span
class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
>10% OFF!</span>
</button></div>


<div className="card1 mt-8 bg-gray-200 xl:w-[25vw] h-[60vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

<img src={wheyprotein} alt="" className='xl:w-[20vw] w-[75%] hover:scale-105 transition'/>
<button
class="mt-4 overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
Buy Now!
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
></span>
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
></span>
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
></span>
<span
class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
>10% OFF!</span>
</button></div>


</div>


{/* cards part 3 */}

<div className="xl:mt-0 mt-8 cards5_6 xl:block flex flex-col items-center">

<div className="card1 bg-gray-200 xl:w-[25vw] h-[60vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

<img src={wheyprotein} alt="" className='xl:w-[20vw] w-[75%] hover:scale-105 transition'/>
<button
class="mt-4 overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
Buy Now!
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
></span>
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
></span>
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
></span>
<span
class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
>10% OFF!</span>
</button></div>


{/* card2 */}

<div className="card2 mt-8 bg-gray-200 xl:w-[25vw] h-[40vh] w-[75%] flex flex-col justify-center items-center rounded-lg hover:bg-slate-500 transition">

<img src={bandwrist} alt="" className='xl:w-[12vw] w-[50%] hover:scale-105 transition'/>
<button
class="mt-4 overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
Buy Now!
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
></span>
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
></span>
<span
class="absolute w-36 h-32 -top-8 -left-2 bg-secondary-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
></span>
<span
class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
>10% OFF!</span>
</button></div>


</div>


</div>



{/* Selector products */}

<div className=" mt-20 h-[80vh] w-[100%] flex flex-col">

<div className="text text-center w-[100%] mt-6">
<p className='font-semibold text-4xl'>FEATURED <span className='text-white bg-secondary-color rounded-lg p-2'>PRODUCTS</span> </p>
</div>


{/* <div class="mb-4 mt-8 dark:border-gray-700 flex justify-center">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-secondary-color hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-tab-content">
    <div class="block p-4 rounded-lg bg-white h-[70vh] dark:bg-gray-800" id="profile" role="profile" aria-labelledby="profile-tab" >

    </div>
    <div class="hidden p-4 rounded-lg bg-white dark:bg-gray-800" id="dashboard" role="Dashboard" aria-labelledby="dashboard-tab">

    </div>
    <div class="hidden p-4 rounded-lg bg-white dark:bg-gray-800" id="settings" role="Settings" aria-labelledby="settings-tab">
    </div>
    <div class="hidden p-4 rounded-lg bg-white dark:bg-gray-800" id="contacts" role="Contacts" aria-labelledby="contacts-tab">
    </div>
</div> */}

<div className="flex justify-around items-center gap-5 p-5 mt-16">
     <div className="flex flex-wrap justify-center  gap-2  w-[90%]  " >
          <Tabs aria-label="Pills" className="pills  flex justify-center">
            <Tabs.Item active className="text-center" title="NEW">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <div className="flex gap-5 flex-wrap  overflow-hidden">
                    <div>
                        <img  src={wheyprotein} width={300} className='hover:scale-105 transition' alt="" />
                        <div className="p-3">
                        <p className='text-center text-xl'>Whey Protein</p>
                        <h3 className='text-center text-lg text-secondary-color'>$80.00</h3>
                        </div>
                    </div>
                    <div>
                        <img  src={Creatine} width={300} className='hover:scale-105 transition' alt="" />
                        <div className="p-3">
                        <p className='text-center text-xl'>Creatine</p>
                        <h3 className='text-center text-lg text-secondary-color'>$40.00</h3>
                        </div>
                    </div>
                    <div>
                        <img  src={MassTech} width={260} className='hover:scale-105 transition' alt="" />
                        <div className="p-3">
                        <p className='text-center text-xl'>MassTeach</p>
                        <h3 className='text-center text-lg text-secondary-color'>$50.00</h3>
                        </div>
                    </div>
                    <div>
                        <img  src={PreWorkOut} width={300} className='hover:scale-105 transition' alt="" />
                        <div className="p-3">
                        <p className='text-center text-xl'>Pre Work Out</p>
                        <h3 className='text-center text-lg text-secondary-color'>$35.00</h3>
                        </div>
                    </div>
                    
                    
                    
                </div>
              </p>
            </Tabs.Item>

            <Tabs.Item active className="text-center" title="OLD">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <div className="flex gap-5 flex-wrap  overflow-hidden">
                <div>
                        <img  src={BCAA} width={220} className='hover:scale-105 transition' alt="" />
                        <div className="p-3">
                        <p className='text-center text-xl'>BCAA</p>
                        <h3 className='text-center text-lg text-secondary-color'>$25.00</h3>
                        </div>
                    </div>
                    <div>
                        <img  src={Omega3} width={300} className='hover:scale-105 transition' alt="" />
                        <div className="p-3">
                        <p className='text-center text-xl'>OMEGA 3</p>
                        <h3 className='text-center text-lg text-secondary-color'>$33.00</h3>
                        </div>
                    </div>
                    <div>
                        <img  src={BCAA} width={220} className='hover:scale-105 transition' alt="" />
                        <div className="p-3">
                        <p className='text-center text-xl'>Test1</p>
                        <h3 className='text-center text-lg text-secondary-color'>$55.00</h3>
                        </div>
                    </div>
                    <div>
                        <img  src={PreWorkOut} width={300} className='hover:scale-105 transition' alt="" />
                        <div className="p-3">
                        <p className='text-center text-xl'>Test2</p>
                        <h3 className='text-center text-lg text-secondary-color'>$22.00</h3>
                        </div>
                    </div>
                    
                </div>
              </p>
            </Tabs.Item>
          </Tabs>
        </div>
</div>

</div>



{/* random Sec */}
  <div className="mt-44 mb-44 bg-gray-100 xl:w-[100%] xl:h-[90vh]  h-[140vh] flex xl:flex-row flex-col items-center xl:justify-evenly xl:gap-0 gap-8">
  <div className="testtest bg-gray-300 rounded-md xl:mt-0 mt-8  xl:w-[35%] xl:h-[75%] w-[90vw]  flex justify-around">
          <div className="textall h-[100%] pt-64">
      <h1 className='text-5xl text-white font-bold flex justify-center items-center p-4'>Be aesthetic</h1>
      <p className='text-2xl font-thin text-white text-center cursor-pointer hover:underline transition'>View Our Collection →</p></div>
  </div>

    <div className="whitebg rounded-md  bg-red-500 xl:w-[35%] xl:h-[75%] w-[90vw] h-[70%] xl:mb-0 mb-8 flex flex-col justify-center items-center">
        <div className=" w-[55%] h-[60%] mb-2 hover:scale-105 transition">
        <img src={wheyprotein} alt="" className='' />
        </div>
        <h1 className='text-2xl text-white font-semibold'>Whey Protein</h1>
        <p className='text-xl font-semibold text-white underline hover:scale-110 hover:no-underline transition'>50$</p>
        <div className="boxs flex flex-row gap-4 mt-4">
            <div className="bg-white border rounded-lg w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg'>112</p>
              <p className='font-thin'>days</p>
            </div>
            <div className="bg-white border rounded-lg w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg'>10</p>
              <p className='font-thin'>Hrs</p>
            </div>
            <div className="bg-white border rounded-lg w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg'>55</p>
              <p className='font-thin'>mins</p>
            </div>
            <div className="bg-white border rounded-lg w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg'>48</p>
              <p className='font-thin'>secs</p>
            </div>
        </div>
    </div>


</div>



{/* Blog Sec */}

<div className="allcontainerblog xl:h-[120vh] w-[100%]">
<p className='font-semibold text-4xl text-center xl:mb-16'>OUR <span className='text-white bg-secondary-color rounded-lg p-2 xl:hover:bg-red-400 transition'>BLOG</span> </p>

<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 xl:w-[75%] ml-0 xl:ml-44">
    <div class="rounded bg-gray-200  overflow-hidden shadow-lg h-[110%] xl:hover:scale-105 xl:transition">
      <img class="w-[50%] ml-24 mt-4" src={wheyprotein} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 w-[100vw] px-[30%]">Whey Protein</div>
        <p class="text-gray-700 text-base text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Gym</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Strong</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Protein</span>
      </div> */}
    </div>
    <div class="rounded bg-gray-200 overflow-hidden shadow-lg h-[110%] xl:hover:scale-105 xl:transition">
      <img class="w-[50%] mt-4 ml-24 flex justify-center" src={Creatine} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 px-28">Creatine</div>
        <p class="text-gray-700 text-base text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Creatine</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#strenght</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#power</span>
      </div> */}
    </div>

    <div class="rounded bg-gray-200 overflow-hidden shadow-lg h-[110%] xl:hover:scale-105 xl:transition">
      <img class="w-[50%] mt-4 ml-24 flex justify-center" src={PreWorkOut} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 px-24">PreWorkOut</div>
        <p class="text-gray-700 text-base text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PreWorkOut</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Energy</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#time</span>
      </div> */}
    </div>
  </div>
</div>


{/* Follow Us Sec */}

<div className="follow xl:h-[50vh] h-[100vh] xl:block flex flex-col justify-evenly">

<p className='text-4xl font-bold text-center pt-4'>@ FIND US ON INSTAGRAM !</p>

<div className="all_last flex xl:flex-row flex-col justify-evenly items-center xl:h-[100%] xl:gap-0 gap-16">

<div className="first xl:w-[20%] border-r-2">
  <p className='text-2xl font-thin text-center'>Free Delivery WorldWide</p>
  <p className='text-md font-thin text-center'>For the next 10Days ONLY !!</p>
</div>

<div className="second xl:w-[20%] border-r-2">
  <p className='text-2xl font-thin text-center'>Free Delivery WorldWide</p>
  <p className='text-md font-thin text-center'>For the next 10Days ONLY !!</p>
</div>

<div className="third xl:w-[20%] ">
  <p className='text-2xl font-thin text-center'>Free Delivery WorldWide</p>
  <p className='text-md font-thin text-center'>For the next 10Days ONLY !!</p>
</div>

</div>

</div>



        </>
    );
}
