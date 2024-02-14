
import './firstSection.sass'
import { Carousel } from 'flowbite-react';
import userlogo from '../../../imgs/usericon.png'
import carousel1 from '../../../imgs/banner1_carousel.png'



export const FirstSection = () => {
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
        </>
    );
}
