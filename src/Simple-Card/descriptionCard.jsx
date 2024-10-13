import React from 'react';
import './description.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Description() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
  return (
    <>
    <div className = 'w-3/4 m-auto'>
    <div className = "mt-20">
        <Slider {...settings}>
        {data.map((d) => {
            return (
            <div className="bg-white h-[450px] text-black rounded-xl ">
                <div className = "h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img src={d.img} alt={d.name} className = "h-44 w-44 rounded-full"/>
                </div>

                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className = "text-xl font-semibold">{d.name}</p>
                    <p>{d.review}</p>
                    <button className = "bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
                  </div>
            </div>  
            ); 
        })}
         </Slider>
    </div>
    </div>
    </>
  );
}

const data = [
{
    name: `John Morgon`,
    img: `/people/johnMorgon.jpg`,
    review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate officiis ipsa, esse dicta magni, cum fugit vitae dolores consectetur qui cupiditate quibusdam odio cumque illo. Architecto, nihil error.`,
},
{
    name: `Ellie Anderson`,
    img: `/people/ellieAnderson.jpg`,
    review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate officiis ipsa, esse dicta magni, cum fugit vitae dolores consectetur qui cupiditate quibusdam odio cumque illo. Architecto, nihil error.`,
},
{
    name: `Nia Adebayo`,
    img: `/people/niaAdebayo.jpg`,
    review:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate officiis ipsa, esse dicta magni, cum fugit vitae dolores consectetur qui cupiditate quibusdam odio cumque illo. Architecto, nihil error.`,
},
];

