
import './firstSection.sass'
import { Carousel } from 'flowbite-react';
import userlogo from '../../../imgs/usericon.png'
import carousel1 from '../../../imgs/banner1_carousel.png'
import { useEffect, useState } from 'react';
import wheyprotein from '../../../imgs/wheyprotein-removebg-preview.png'
import bandwrist from '../../../imgs/products/wristband.png'
import { hover } from '@testing-library/user-event/dist/hover';


export const FirstSection = () => {



  const [productname, setProductname] = useState([
    {
      productname: "product 1"
    },
    {
      productname: "product 2"
    },
    {
      productname: "product 3"
    },
    {
      productname: "product 4"
    },
    {
      productname: "product 5"
    },
  ])

    const [products, setProducts] = useState([

  {
    productname: "Whey Protein",
    productprice: "50$",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 2",
    productprice: "40$",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 3",
    productprice: "60$",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 4",
    productprice: "80$",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 5",
    productprice: "20$",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  }

])

// const test = () =>{
//   const randomElement = products[Math.floor(Math.random() * products.length)];
//   const testtt = document.getElementById('tes').innerHTML = randomElement
// }

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
  <div className="mt-44 mb-44 bg-gray-100 xl:w-[100%] xl:h-[90vh]  h-[140vh] flex xl:flex-row flex-col items-center xl:justify-evenly xl:gap-0 gap-8">
  <div className=" bg-red-400 xl:mt-0 mt-8  xl:w-[35%] xl:h-[75%] w-[90vw]  flex justify-around">
          <div className="textall h-[100%] pt-64">
      <h1 className='text-5xl text-white font-bold flex justify-center items-center p-4'>Be aesthetic</h1>
      <p className='text-2xl font-thin text-white text-center cursor-pointer hover:underline transition'>View Our Collection</p></div>
  </div>

    <div className="whitebg  bg-white xl:w-[35%] xl:h-[75%] w-[90vw] h-[70%] xl:mb-0 mb-8 flex flex-col justify-center items-center">
        <div className=" w-[55%] h-[60%] mb-2 hover:scale-105 transition">
        <img src={wheyprotein} alt="" className='' />
        </div>
        <h1 className='text-2xl'>Whey Protein</h1>
        <p className='text-xl font-extralight'>50£</p>
        <div className="boxs flex flex-row gap-4 mt-4">
            <div className="bg-white border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg font-serif'>112</p>
              <p className='font-thin'>days</p>
            </div>
            <div className="bg-white border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg font-serif'>10</p>
              <p className='font-thin'>Hrs</p>
            </div>
            <div className="bg-white border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg font-serif'>55</p>
              <p className='font-thin'>mins</p>
            </div>
            <div className="bg-white border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
              <p className='text-lg font-serif'>48</p>
              <p className='font-thin'>secs</p>
            </div>
        </div>
    </div>


</div>



{/* Blog Sec */}

<div className="allcontainerblog xl:h-[120vh] w-[100%]">
<p className='font-semibold text-4xl text-center xl:mb-16'>OUR <span className='text-white bg-secondary-color rounded-lg p-2 xl:hover:bg-red-400 transition'>BLOG</span> </p>

<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 xl:w-[75%] ml-0 xl:ml-44">
    <div class="rounded overflow-hidden shadow-lg h-[100%] xl:hover:scale-105 xl:transition">
      <img class="w-[50%] ml-24" src={wheyprotein} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Whey Protein</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Gym</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Strong</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Protein</span>
      </div>
    </div>
    <div class="rounded overflow-hidden shadow-lg h-[100%] xl:hover:scale-105 xl:transition">
      <img class="w-[50%] ml-24 flex justify-center" src={wheyprotein} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Creatine</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Creatine</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#strenght</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#power</span>
      </div>
    </div>

    <div class="rounded overflow-hidden shadow-lg h-[100%] xl:hover:scale-105 xl:transition">
      <img class="w-[50%] ml-24 flex justify-center" src={wheyprotein} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">PreWorkOut</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PreWorkOut</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Energy</span>
        <span class="inline-block bg-red-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#time</span>
      </div>
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
