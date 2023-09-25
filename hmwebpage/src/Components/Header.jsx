import './Header.css'
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { TfiUser } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
function Header() {
    const router = useNavigate();
    function routerToMen() {
        router("/Men")
    }
    return (
        <div id='top'>
            <div id='top-nav'>
                <div id='topnav-left'>
                    <p>Customer Service</p>
                    <p>Newsletter</p>
                    <p>Find a store</p>
                    <div>
                        <PiDotsThreeOutlineDuotone />
                    </div>

                </div>
                <div id='topnav-mid'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="1" />
                </div>
                <div id='topnav-right'>
                    
                   <div className='sign_in_hide'>
                        <button>Sign in</button>
                        <p style={{marginTop:"20px",fontSize:"13px",fontWeight:"500"}}>My account</p>
                        <p style={{marginTop:"10px",fontSize:"13px",fontWeight:"500"}}>Membership info</p>
                        <p style={{marginTop:"10px",fontSize:"10px",fontWeight:"500",color:"gray"}}>Not a member yet? Join here!</p>
                   </div>

                    <div id='sign_in'>
                        <div className='nvaright-icon'>
                            <TfiUser />
                        </div>
                        <p>Sign in</p>
                    </div>
                    
                   
                    <div id='fav'>
                        <div className='nvaright-icon'>
                            <AiOutlineHeart />
                        </div>

                        <p>Favourites</p>
                    </div>
                    
                    <div id='shop-bag'>
                        <div className='nvaright-icon'>
                            <BsHandbag />
                        </div>

                        <p>Shopping bag (0)</p>
                    </div>
                </div>
            </div>
            <div id='bottom-nav'>
                <div id='bottomnav-left'>
                    <button>Ladies</button>
                    <button onClick={routerToMen}>Men</button>
                    <button>Divided</button>
                    <button>Baby</button>
                    <button>Kids</button>
                    <button>H&M Home</button>
                    <button>Sport</button>
                    <button>Sustainability</button>
                    <button>Sale</button>
                </div>
                <div id='bottomnav-right'>
                    <div>
                        <FiSearch />
                    </div>
                    <input type="text" placeholder='Search products' />
                </div>
            </div>
        </div>
    )
}
export default Header;

