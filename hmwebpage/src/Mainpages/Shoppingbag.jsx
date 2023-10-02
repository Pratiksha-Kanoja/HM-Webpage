import './Shoppingbag.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsHeart, BsChevronDown,BsBox } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function Shoppingbag() {
    const router = useNavigate();
    function GoToSingleproduct(){
        router("/cart/Productpage.1021953016")
    }
    function backToHomepage(){
        router('/')
    }
    return (
        <div id='Shoppingbag'>
            <Header />
            <div id='Shoppingbag-body'>
                <div id='Shoppingbag_link'>
                    <button onClick={backToHomepage}>HM.com <span style={{ marginRight: "5px" }}>/</span></button>
                    <button>Shopping bag</button>
                </div>
                <div id="extra-info">
                    <p>Members get free shipping above Rs.1999</p>
                    <p>Free & flexible 15 days return</p>
                    <p>Download the H&M App</p>
                </div>
                <h1>Shopping bag</h1>
                <div id='Shopbag_product'>
                    <div id='Shopbag_product-left' >
                        <div>
                            <div>
                                <img src="https://lp2.hm.com/hmgoepprod?set=source[/46/a3/46a3eea2d9c78e05cb3370b745182e9f576e2bc0.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]" alt="" />
                            </div>
                            <div id='product_details'>
                                <div>
                                    <h4>Relaxed Fit Jersey top</h4>
                                    <RiDeleteBin5Line style={{ fontSize: "24px" }} />
                                </div>
                                <p>Rs. 1,499.00</p>
                                <p>Member Price Rs. 1,279.00</p>
                                <div>
                                    <div>
                                        <div>
                                            <p>Art.no.</p>
                                            <p>1021953016</p>
                                        </div>
                                        <div>
                                            <p>Colour:</p>
                                            <p>Brown/Cream striped</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Size:</p>
                                            <p>XXL</p>
                                        </div>
                                        <div>
                                            <p>Total:</p>
                                            <p>Rs.1,499.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <BsHeart style={{ fontSize: "20px", color: "gray" }} />
                                    </div>
                                    <div>
                                        <p>1</p>
                                        <BsChevronDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://lp2.hm.com/hmgoepprod?set=source[/6b/73/6b73497480377f7a1929dbff62a1b38ea62351df.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]" alt="" />
                            </div>
                            <div id='product_details'>
                                <div>
                                    <h4>Bangle</h4>
                                    <RiDeleteBin5Line style={{ fontSize: "24px" }} />
                                </div>
                                <p>Rs.799.00</p>
                                <p></p>
                                <div>
                                    <div>
                                        <div>
                                            <p>Art.no.</p>
                                            <p>1196050001</p>
                                        </div>
                                        <div>
                                            <p>Colour:</p>
                                            <p>Silver-coloured</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Size:</p>
                                            <p>NOSIZE</p>
                                        </div>
                                        <div>
                                            <p>Total:</p>
                                            <p>Rs.799.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <BsHeart style={{ fontSize: "20px", color: "gray" }} />
                                    </div>
                                    <div>
                                        <p>1</p>
                                        <BsChevronDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://lp2.hm.com/hmgoepprod?set=source[/de/6a/de6af2fa322c2305e4224c63a2fb59014ca45890.jpg],origin[dam],category[men_accessories_jewellery],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]" alt="" />
                            </div>
                            <div id='product_details'>
                                <div>
                                    <h4>4-pack bracelets</h4>
                                    <RiDeleteBin5Line style={{ fontSize: "24px" }} />
                                </div>
                                <p>Rs.699.00</p>
                                <p></p>
                                <div>
                                    <div>
                                        <div>
                                            <p>Art.no.</p>
                                            <p>1157724004</p>
                                        </div>
                                        <div>
                                            <p>Colour:</p>
                                            <p>Silver-coloured</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Size:</p>
                                            <p>NOSIZE</p>
                                        </div>
                                        <div>
                                            <p>Total:</p>
                                            <p>Rs.699.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <BsHeart style={{ fontSize: "20px", color: "gray" }} />
                                    </div>
                                    <div>
                                        <p>1</p>
                                        <BsChevronDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://lp2.hm.com/hmgoepprod?set=source[/dd/0b/dd0bb743845796d99689a4c3a804434437e06c7f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]" alt="" />
                            </div>
                            <div id='product_details'>
                                <div>
                                    <h4>Signet ring</h4>
                                    <RiDeleteBin5Line style={{ fontSize: "24px" }} />
                                </div>
                                <p>Rs. 799.00</p>
                                <p></p>
                                <div>
                                    <div>
                                        <div>
                                            <p>Art.no.</p>
                                            <p>1195227001</p>
                                        </div>
                                        <div>
                                            <p>Colour:</p>
                                            <p>Brown/Cream striped</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Size:</p>
                                            <p>L</p>
                                        </div>
                                        <div>
                                            <p>Total:</p>
                                            <p>Rs.799.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <BsHeart style={{ fontSize: "20px", color: "gray" }} />
                                    </div>
                                    <div>
                                        <p>1</p>
                                        <BsChevronDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://lp2.hm.com/hmgoepprod?set=source[/3b/f7/3bf7ccb570540ba78d37cd215fa97853c91a9a0f.jpg],origin[dam],category[men_accessories_jewellery_bracelets],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]" alt="" />
                            </div>
                            <div id='product_details'>
                                <div>
                                    <h4>3-pack bracelets</h4>
                                    <RiDeleteBin5Line style={{ fontSize: "24px" }} />
                                </div>
                                <p>Rs.799.00</p>
                                <p>Member Price Rs. 1,279.00</p>
                                <div>
                                    <div>
                                        <div>
                                            <p>Art.no.</p>
                                            <p>0999884011</p>
                                        </div>
                                        <div>
                                            <p>Colour:</p>
                                            <p>Black/Silver-coloured</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Size:</p>
                                            <p>NOSIZE</p>
                                        </div>
                                        <div>
                                            <p>Total:</p>
                                            <p>Rs.799.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <BsHeart style={{ fontSize: "20px", color: "gray" }} />
                                    </div>
                                    <div>
                                        <p>1</p>
                                        <BsChevronDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id='Shopbag_product-right'>
                        <div>
                            <div>
                                <p style={{ color: "gray", fontSize: "15px" }}>Discounts</p>
                                <p style={{ fontSize: "15px", textDecoration: "underline" }}>Apply discount</p>
                            </div>
                            <p>Log in to use your personal offers!</p>
                            <button>Log in</button>
                            <div>
                                <div>
                                    <p style={{ color: "gray" }}>Order value</p>
                                    <p>Rs.4,595.00</p>
                                </div>
                                <div>
                                    <p style={{ color: "gray" }}>Delivery</p>
                                    <p>FREE</p>
                                </div>
                                <hr />
                                <div>
                                    <p>Total</p>
                                    <p>Rs.4,595.00</p>
                                </div>
                            </div>
                            <button style={{ backgroundColor: "black", color: "white", marginTop: "40px" }}>Continue to checkout</button>
                        </div>
                        <div>
                            <h2>MEMBER BENEFITS</h2>
                            <p>Become a member to receive fantastic offers!</p>
                            <p>You can apply discount codes in the checkout process</p>
                            <p>There are many membership benefits.</p>
                            <p>You will get prompted to become a member if you're not already a member and you have a member priced item in your shopping bag</p>
                        </div>
                        <div>
                            <div><BsBox/></div>
                            <div>Delivery and return options</div>
                            <div><MdArrowForwardIos/></div>
                        </div>
                    </div>
                </div>

                <div id="shopbag_suggest">
                    <h3>You may also like</h3>
                    <div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/01/bb/01bbaf835957666cffee162d6ef257b6913f77ce.jpg],origin[dam],category[men_accessories_jewellery],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]" alt="1" />
                            <p>4-pack bracelets</p>
                            <p>Rs.699.00</p>
                            <p style={{marginTop:"10px"}}>Member price Rs.599.00</p>
                        </div>
                        <button onClick={GoToSingleproduct}>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/b2/9d/b29dea35185ac2a9caae0915dc60286fe6a8cfa9.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]" alt="2" />
                            <p>Relaxed Fit Jersey top</p>
                            <p>Rs.1,499.00</p>
                        </button>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/f4/66/f4665deecea65f2c98e507f8442d2f530d703b90.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]" alt="3" />
                            <p>Relaxed Fit Jersey top</p>
                            <p>Rs.1,499.00</p>
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/6e/34/6e34b68ebc85708bee5f71444f237b7b52b9dbd6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]" alt="4" />
                            <p>2-pack necklaces</p>
                            <p>Rs.799.00</p>
                            <p style={{marginTop:"10px"}}>Member price Rs.679.00</p>
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/aa/8c/aa8c5f39248251a29e9965075e04670746e8a598.jpg],origin[dam],category[men_accessories_jewellery],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]" alt="5" />
                            <p>4-pack bracelets</p>
                            <p>Rs.699.00</p>
                            <p style={{marginTop:"10px",fontSize:"10px"}}>New Arrival</p>
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/ba/75/ba75709f8b00ed2fb7990d1eac67f7fd977bb07d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]" alt="6" />
                            <p>Loose Fit T-shirt</p>
                            <p>Rs.799.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Shoppingbag;