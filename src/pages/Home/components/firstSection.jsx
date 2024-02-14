
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
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 2",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 3",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 4",
    productdesc: "this is the best whey protein that u can buy in the world but it now",
    productimg: wheyprotein,
  },


  {
    productname: "Whey Protein 5",
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

<div className="allcards w-[100%] mt-24 flex xl:flex-row flex-col justify-evenly">
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
        </>
    );
}
