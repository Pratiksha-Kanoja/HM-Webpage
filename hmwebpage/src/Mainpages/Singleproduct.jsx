import './Singleproduct.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { BsHeart,BsInfoCircle,BsStarHalf,BsStarFill,BsChevronDown } from "react-icons/bs";
import { TfiRulerAlt } from "react-icons/tfi";
import { HiOutlineShoppingBag, HiOutlineBuildingStorefront } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Singleproduct() {
    const router = useNavigate()
    function backToHomepage(){
        router('/')
    }
    function backToMen(){
        router('/Men')
    }
    return (
        <div id='Singleproduct_Container'>
            <Header />
            <div id='Singleproduct_body'>
                <div id='Singleproduct_link'>
                    <button onClick={backToHomepage}>HM.com <span style={{ marginRight: "5px" }}>/</span></button>
                    <button onClick={backToMen}>Men <span style={{ marginRight: "5px" }}>/</span></button>
                    <button>T-shirts & Tops <span style={{ marginRight: "5px" }}>/</span></button>
                    <button>Long Sleeve <span style={{ marginRight: "5px" }}>/</span></button>
                    <button> Relaxed Fit Jersey top</button>
                </div>

                <div id='Sp-product'>
                    <div id='Sp_product-left' >
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff7%2Fff%2Ff7ffa69b8bc23c689c2009a103786045452a75bf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="1" />
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc8%2F96%2Fc8966c87f0bc2c46bb8497b91d7e4e8af4843d8d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="2" />
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2F67%2F7f678188dea6dd5c313816fedd4bdd9dc2669b21.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="3" />
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe5%2F1d%2Fe51dab73cffb263f82bd5a92ff248c4e54d3e56b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="4" />
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F31%2F94%2F31940cd590d044a9a6311d3f0a32ea2fa84239d0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="5" />
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F46%2Fa3%2F46a3eea2d9c78e05cb3370b745182e9f576e2bc0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt="6" />
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F23%2F1f%2F231f17c1d96931800c3796cfbc7e6738da5f2a31.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt="7" />
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2F65%2F49652a2c77ad819cba31d2d7aeec866e39cbbdfb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt="8" />
                        </div>
                    </div>
                    <div id='Sp_product-right'>
                        <div>
                            <h4>Relaxed Fit Jersey top</h4>
                            <BsHeart style={{ fontSize: "25px", marginRight: "10px" }} />
                        </div>
                        <div>
                            <p style={{ fontSize: "20px", fontWeight: "500" }}>Rs. 1,499.00</p>
                            <p style={{ backgroundColor: "rgb(247, 242, 234)" }}>Member price Rs. 1,279.00</p>
                        </div>
                        <h5>Brown/Cream striped</h5>
                        <div id='t-shirt_color'>
                            <button>
                                <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff4%2F66%2Ff4665deecea65f2c98e507f8442d2f530d703b90.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt="1" />
                            </button>
                            <button>
                                <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F46%2Fa3%2F46a3eea2d9c78e05cb3370b745182e9f576e2bc0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt="2" />
                            </button>
                            <button>
                                <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb2%2F9d%2Fb29dea35185ac2a9caae0915dc60286fe6a8cfa9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt="3" />
                            </button>
                        </div>
                        <div>

                            <div>
                                <button>XS</button>
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                                <button>XXL</button>
                            </div>
                        </div>
                        <div>
                            <p> <TfiRulerAlt style={{ fontSize: "15px", marginLeft: "10px" }} /> Size Guide</p>
                            <button> <HiOutlineShoppingBag style={{ fontSize: "15px" }} /> Add</button>
                        </div>
                        <div>
                            <p><HiOutlineBuildingStorefront style={{fontSize:"20px"}}/>Find in store</p>
                            <p><BsInfoCircle style={{fontSize:"20px"}}/>Standard delivery in 2-7 days</p>
                            <h4>Delivery and Payment</h4>
                        </div>
                        <div>
                            <span><BsStarFill/></span>
                            <span><BsStarFill/></span>
                            <span><BsStarFill/></span>
                            <span><BsStarFill/></span>
                            <span><BsStarHalf/></span>
                            <span>(214 reviews)</span>
                        </div>
                        <div>
                            <div>
                                <p>Description & fit</p>
                                <BsChevronDown/>
                            </div>
                            <div>
                                <p>Material & Suppliers</p>
                                <BsChevronDown/>
                            </div>
                            <div> 
                                <p>Care guide</p>
                                <BsChevronDown/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='style_with'>
                    <h3>Style with</h3>
                    <div id='Stylewith_img'>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/46/a3/46a3eea2d9c78e05cb3370b745182e9f576e2bc0.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" alt="" />
                            <p>Relaxed Fit Jersey top</p>
                            <p>Rs.1,499.00</p>
                            <p style={{marginTop:"10px"}}>Member price Rs.1,279.00</p>
                            <p style={{fontSize:"11px",fontWeight:"400"}}>New Arrival</p>
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/85/6e/856e860e09296f2c91e2eff973397280287d855f.jpg],origin[dam],category[men_jeans_relaxed],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" alt="2" />
                            <p>Relaxed Jeans</p>
                            <p>Rs.2,699.00</p>
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/85/53/85532b1d55ead83298dcf1a05c255ced10990b8b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" alt="3" />
                            <p>Canvas trainers</p>
                            <p>Rs.2,299.00</p>
                        </div>
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/ea/b8/eab833782c7ef4aeed033bb86f86d9eb2e658294.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" alt="4" />
                            <p>3-pack Regular Fit Jersey tops</p>
                            <p>Rs.2,299.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Singleproduct