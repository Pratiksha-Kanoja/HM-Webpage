import './Header.css'
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { TfiUser } from "react-icons/tfi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Login from './Login';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { IoMdMenu } from "react-icons/io";

function Header() {
    const router = useNavigate();
    function routerToMen() {
        router("/Men")
    }
    function routerToShopbag() {
        router("/cart")
    }
    const [active, setActive] = useState(false)
    function openItem() {
        setActive(true);
    }

    const { state, Logout } = useContext(AuthContext)

    return (
        <div id='top'>
            {/* show */}
            <div>
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
                        {state?.user ?
                            <div>
                                <div id='sign_out' >
                                    <div style={{ display: "flex" }}>
                                        <div className='nvaright-icon'>
                                            <TfiUser />
                                        </div>
                                        <p onClick={Logout} style={{ marginTop: "35px" }}>Signout</p>
                                    </div>
                                    <div>
                                        <p>{state?.user?.email[0]}</p>
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                <div id='sign_in'>
                                    <div style={{ display: "flex" }}>
                                        <div className='nvaright-icon'>
                                            <TfiUser />
                                        </div>
                                        <p style={{ marginTop: "35px" }}>Sign in</p>
                                    </div>
                                </div>
                                <div id='sign_in_hide'>
                                    <button onClick={openItem}>Sign in</button>
                                    {active && <div><Login active={active} setActive={setActive} /></div>}
                                    <p style={{ marginTop: "20px", fontSize: "13px", fontWeight: "500" }}>My account</p>
                                    <p style={{ marginTop: "10px", fontSize: "13px", fontWeight: "500" }}>Membership info</p>
                                    <p style={{ marginTop: "10px", fontSize: "10px", fontWeight: "500", color: "gray" }}>Not a member yet? Join here!</p>
                                </div>
                            </div>
                        }
                        <div id='fav'>
                            <div className='nvaright-icon'>
                                <AiOutlineHeart />
                            </div>

                            <p>Favourites</p>
                        </div>

                        <button id='shop-bag' onClick={routerToShopbag}>
                            <div>
                                <BsHandbag />
                            </div>
                            <p>Shopping bag (0)</p>
                        </button>

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


            {/* Hide */}

            <div className='top-hide'>
                <div>
                    <div style={{fontSize:"30px"}}><IoMdMenu /></div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="1" />
                    </div>
                </div>
                <div>
                    <div style={{fontSize:"30px"}}><TfiUser /></div>
                    <div style={{fontSize:"30px"}}><FiSearch /></div>
                    <div style={{fontSize:"30px"}}><AiOutlineHeart /></div>
                    <div style={{fontSize:"30px"}}><BsHandbag /></div>
                        
                </div>
            </div>
        </div>
    )
}
export default Header;

