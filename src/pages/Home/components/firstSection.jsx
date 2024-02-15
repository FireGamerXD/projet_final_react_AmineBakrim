
import './firstSection.sass'
import { Carousel } from 'flowbite-react';
import userlogo from '../../../imgs/usericon.png'
import carousel1 from '../../../imgs/banner1_carousel.png'
import { useEffect, useState } from 'react';
import wheyprotein from '../../../imgs/wheyprotein-removebg-preview.png'
import bandwrist from '../../../imgs/products/wristband.png'
import { hover } from '@testing-library/user-event/dist/hover';


export const FirstSection = () => {


    const [products, setProducts] = useState([

  {
    productname: "Whey Protein",
    productprice: "50$",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 2",
    productprice: "50$",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 3",
    productprice: "50$",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 4",
    productprice: "50$",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 5",
    productprice: "50$",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  }

])





    return (
        <>
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

<div className="cards5_6 xl:block flex flex-col items-center">

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


<div class="mb-4 mt-8 dark:border-gray-700 flex justify-center">
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
        {/* <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
      <h1>ezifnzjrnoinrg</h1> */}
    </div>
    <div class="hidden p-4 rounded-lg bg-white dark:bg-gray-800" id="dashboard" role="Dashboard" aria-labelledby="dashboard-tab">
        {/* <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    <h1>hhhhhhhhhhhh</h1> */}
    </div>
    <div class="hidden p-4 rounded-lg bg-white dark:bg-gray-800" id="settings" role="Settings" aria-labelledby="settings-tab">
        {/* <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p> */}
    </div>
    <div class="hidden p-4 rounded-lg bg-white dark:bg-gray-800" id="contacts" role="Contacts" aria-labelledby="contacts-tab">
        {/* <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p> */}
    </div>
</div>


</div>



{/* random Sec */}





{
  products.map((element, index) =>
  <>
  <div className="mt-44 bg-gray-100 w-[100%] h-[90vh] flex items-center justify-evenly">
  <div className=" bg-red-400 w-[35%] h-[75%] flex justify-around">
          <div className="textall h-[100%] pt-64">
      <h1 className='text-5xl text-white font-bold flex justify-center items-center p-4'>Be aesthetic</h1>
      <p className='text-2xl font-thin text-white text-center cursor-pointer hover:underline transition'>View Our Collection</p></div>
  </div>

    <div className="whitebg  bg-white w-[35%] h-[75%] flex flex-col justify-center items-center">
        <div className=" w-[55%] h-[60%] mb-2 hover:scale-105 transition">
        <img src={element.productimg} alt="" className='' />
        </div>
        <h1 className='text-2xl'>{element.productname}</h1>
        <p className='text-xl font-extralight'>{element.productprice}</p>
        <div className="boxs flex flex-row gap-4 mt-4">
            <div className="bg-white border w-[5vw] h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg font-serif'>112</p>
              <p className='font-thin'>days</p>
            </div>
            <div className="bg-white border w-[5vw] h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg font-serif'>10</p>
              <p className='font-thin'>Hrs</p>
            </div>
            <div className="bg-white border w-[5vw] h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg font-serif'>55</p>
              <p className='font-thin'>mins</p>
            </div>
            <div className="bg-white border w-[5vw] h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg font-serif'>48</p>
              <p className='font-thin'>secs</p>
            </div>
        </div>
    </div>


</div>
  </>
  )
}






        </>
    );
}
