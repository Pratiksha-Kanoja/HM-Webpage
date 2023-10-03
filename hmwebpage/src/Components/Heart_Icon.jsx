import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import './Heart_Icon.css';
import { useState } from "react";

function Heart_icon() {
    
    const[activeHeart, setActiveHeart] =useState(false);
    function heartchange(){
        setActiveHeart(!activeHeart)
    }
    return (
        <div>
            {activeHeart ? <div onClick={heartchange} id="heart-fill"> <AiFillHeart /></div> :<div onClick={heartchange} id="heart-empty"><AiOutlineHeart /></div>
            }
        </div>
    )
}
export default Heart_icon