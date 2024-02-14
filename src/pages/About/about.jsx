import React from 'react';
import banner from '../../imgs/banner1_carousel.png'
import './components/aboutsass.sass'
import mengym from '../../imgs/menpng-removebg-preview.png'
import whey from '../../imgs/wheyprotein.png'

export const About = () => {
    return (
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
    );
};
