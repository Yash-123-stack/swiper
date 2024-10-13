import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Card() {
  return (
   <>
   <div class="container">
    <div class="card-wrapper">
        <ul class="card-list">
            <li class="card-item">
                <a href="" className="card-link">
                    <img src="/assets/developer.jpg" alt="Card Image" className="card image" />
                    <p class="badge">Developer</p>
                    <h2 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate officiis ipsa, esse dicta magni, cum fugit vitae dolores consectetur qui cupiditate quibusdam odio cumque illo. Architecto, nihil error.</h2>
                    <button class="card-button 
                    material-symbols-rounded">arrow_forward</button>
                </a>
            </li>
        </ul>
    </div>
   </div>
   </>
  )
}
