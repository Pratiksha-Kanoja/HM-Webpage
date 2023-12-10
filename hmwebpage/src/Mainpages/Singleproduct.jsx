import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Singleproduct.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { BsHeart, BsInfoCircle, BsStarHalf, BsStarFill, BsChevronDown } from "react-icons/bs";
import { TfiRulerAlt } from "react-icons/tfi";
import { HiOutlineShoppingBag, HiOutlineBuildingStorefront } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import api from '../Helpers/AxiosConfig';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const Practice = () => {
    const { id } = useParams();
    const [singleproduct, setSingleProduct] = useState([]);
    const router = useNavigate();

    const { state } = useContext(AuthContext);

    async function Cart(id) {
        if (state.user.id && id) {
            try {
                const response = await api.post("/user/add-cart", { userId: state.user.id, productId: id })
                //console.log("This is  user id which taken from authcontext =" ,state.user.id);
                if (response.data.success) {
                    toast.success(response.data.message)
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            toast.error("Please login to add product to cart.")
        }
    }

    useEffect(() => {
        async function getSingleproduct() {
            try {
                if (id) {
                    const { data } = await api.get(`/products/get-single-product?id=${id}`)
                    if (data.success) {
                        setSingleProduct(data.product)
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        if (id) {
            getSingleproduct()
        }
    }, [id])

    console.log(singleproduct);

    return (
        <div className='Singleproduct-container'>
            <Header />
            <div id='Singleproduct_body'>
                <div id='Singleproduct_link'>
                    <button onClick={() => router('/')}>HM.com <span style={{ marginRight: "5px" }}>/</span></button>
                    <button onClick={() => router('/Men')}>Men <span style={{ marginRight: "5px" }}>/</span></button>
                    <button>T-shirts & Tops <span style={{ marginRight: "5px" }}>/</span></button>
                    <button>Long Sleeve <span style={{ marginRight: "5px" }}>/</span></button>
                    <button> Relaxed Fit Jersey top</button>
                </div>
                {singleproduct?._id ?
                    <div id='Sp-product'>
                        <div id='Sp_product-left' >
                            {singleproduct.image.map((img, index) => (
                                <div key={index}>
                                    <img src={img} alt="1" />
                                </div>
                            ))}
                        </div>

                        <div id='Sp_product-right'>
                            {/* 1st */}
                            <div>
                                <h4>{singleproduct.name}</h4>
                                <BsHeart style={{ fontSize: "25px", marginRight: "10px" }} />
                            </div>
                            {/* 2nd */}
                            <div>
                                <p style={{ fontSize: "20px", fontWeight: "500" }}>Rs. 1,499.00</p>
                            </div>
                            {/* 3rd */}
                            <h5>Colors</h5>
                            {/* 4th */}
                            <div id='t-shirt_color'>
                                {singleproduct.color.map((color, index) => (
                                    <button key={index}>
                                        <img src={color} alt="1" />
                                    </button>
                                ))}
                            </div>
                            {/* 5th */}
                            <div>
                                <p>Sizes</p>
                                <div >
                                    {singleproduct.Sizes.map((size, index) => (
                                        <button key={index}>{size}</button>
                                    ))}
                                </div>

                            </div>
                            <div>
                                <p> <TfiRulerAlt style={{ fontSize: "15px", marginLeft: "10px" }} /> Size Guide</p>
                                <button onClick={() => Cart(singleproduct._id)}> <HiOutlineShoppingBag style={{ fontSize: "15px" }} /> Add</button>
                            </div>
                            <div>
                                <p><HiOutlineBuildingStorefront style={{ fontSize: "20px" }} />Find in store</p>
                                <p><BsInfoCircle style={{ fontSize: "20px" }} />Standard delivery in 2-7 days</p>
                                <h4>Delivery and Payment</h4>
                            </div>
                            <div>
                                <span><BsStarFill /></span>
                                <span><BsStarFill /></span>
                                <span><BsStarFill /></span>
                                <span><BsStarFill /></span>
                                <span><BsStarHalf /></span>
                                <span>(214 reviews)</span>
                            </div>
                            <div>
                                <div>
                                    <p>Description & fit</p>
                                    <BsChevronDown />
                                </div>
                                <div>
                                    <p>Material & Suppliers</p>
                                    <BsChevronDown />
                                </div>
                                <div>
                                    <p>Care guide</p>
                                    <BsChevronDown />
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div>Loading......</div>}
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

export default Practice
