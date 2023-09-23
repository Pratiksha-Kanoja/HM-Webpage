import './Header.css'
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { TfiUser } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
function Header() {
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
                    <div>
                        <div className='nvaright-icon'>
                            <TfiUser />
                        </div>
                        <p>Sign in</p>
                    </div>
                    <div>
                        <div className='nvaright-icon'>
                            <AiOutlineHeart />
                        </div>

                        <p>Favourites</p>
                    </div>
                    <div>
                        <div className='nvaright-icon'>
                            <BsHandbag />
                        </div>

                        <p>Shopping bag (0)</p>
                    </div>
                </div>
            </div>
            <div id='bottom-nav'>
                <div id='bottomnav-left'>
                    <p>Ladies</p>
                    <p>Men</p>
                    <p>Divided</p>
                    <p>Baby</p>
                    <p>Kids</p>
                    <p>H&M Home</p>
                    <p>Sport</p>
                    <p>Sustainability</p>
                    <p>Sale</p>
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

