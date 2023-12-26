import './Footer.css'
import { BsArrowRight } from "react-icons/bs";
import { AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
function Footer(){
    return(
        <div id='footer'>
            <div>
                <div id='foot-top'>
                        <div>
                            <div>SHOP</div>
                            <p>Ladies</p>
                            <p>Men</p>
                            <p>Baby</p>
                            <p>Kids</p>
                            <p>H&M HOME</p>
                            <p>Sport</p>
                        </div>
                        <div>
                            <div>CORPORATE INFO</div>
                            <p>Career at H&M</p>
                            <p>About H&M group</p>
                            <p>Sustainability H&M Group</p>
                            <p>Press</p>
                            <p>Investor relations</p>
                            <p>Corporate governance</p>
                        </div>
                        <div>
                            <div>HELP</div>
                            <p>Customer Service</p>
                            <p>My H&M</p>
                            <p>Find a store</p>
                            <p>Legal & Privacy</p>
                            <p>Contact</p>
                            <p>Report a scam</p>
                            <p>Cookie Notice</p>
                            <p style={{ fontSize: "15px" , fontWeight:"400"}}>Cookie Settings</p>
                        </div>
                        <div>
                            <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
                            <button>Read more 
                                <div style={{marginLeft:"20px",fontSize:"20px"}}><BsArrowRight/></div>
                            </button>
                        </div>
                </div>

                <div id='foot-icons'>
                    <div><AiFillFacebook/></div>
                    <div><AiOutlineTwitter/></div>
                    <div><AiOutlineInstagram/></div>
                    <div><AiFillYoutube/></div>
                    <div><BsPinterest/></div>
                </div>

                <p>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p>

                <div>
                    <img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/hm_logo_icon_181277.png" alt="" style={{width:"100%",height:"100%"}}/>
                </div>
                <p>INDIA | Rs.</p>
            </div>
        </div>
    )
}
export default Footer;