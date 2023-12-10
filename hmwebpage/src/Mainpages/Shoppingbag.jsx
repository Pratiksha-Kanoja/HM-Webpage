import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import api from '../Helpers/AxiosConfig';
import Header from '../Components/Header';
import './Shoppingbag.css'
import Footer from '../Components/Footer';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsChevronDown, BsBox } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Heart_icon from '../Components/Heart_Icon';

const Shoppingbag = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const { state } = useContext(AuthContext);
    const router = useNavigate();

    async function getYourCartProductsid() {
        // assignment - complete this bloack
        const id = state.user.id;
        console.log("this is your id...........", id);
        try {
            const { data } = await api.get(`/user/your-cart?id=${id}`)
            if (data.success) {
                setCartProducts(data.usecart)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteProduct(productId) {
        try {
            const response = await api.post('/user/delete-cart', { productId, userId: state?.user?.id })
            if (response.data.success) {
                toast.success(response.data.message)
                setCartProducts(response.data.products)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (state?.user && state?.user?.id === undefined) {
            toast.error("Please login to access your cart products, redirecting yout login page in 3 sec.")
            setTimeout(() => {
                router("/login")
            }, 3000)
        } else {
            if (state?.user?.id) {
                getYourCartProductsid();
            }

        }
    }, [state])

    console.log(cartProducts)

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const { data } = await api.get('/products/get-all-products')
                if (data.success) {
                    setProduct(data.product)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getAllProducts();
    }, [])

    return (
        <div id='Shoppingbag'>
            <Header />
            <div id='Shoppingbag-body'>
                <div id='Shoppingbag_link'>
                    <button onClick={()=>router('/')}>HM.com <span style={{ marginRight: "5px" }}>/</span></button>
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
                        {cartProducts.map((pro) => (
                            <div>
                                <div>
                                    <img src={pro.image[0]} alt="" />
                                </div>
                                <div id='product_details'>
                                    <div>
                                        <h4>{pro.name}</h4>
                                        <RiDeleteBin5Line style={{ fontSize: "24px" }} onClick={() => deleteProduct(pro._id)} />
                                    </div>
                                    <p>{pro.price}</p>
                                    <p></p>
                                    <div>
                                        <div>
                                            <div>
                                                <p>Size:</p>
                                                <p>XXL</p>
                                            </div>
                                            <div>
                                                <p>Total:</p>
                                                <p>{pro.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <p>Art.no.</p>
                                                <p>{pro._id}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='select_item-heart'>
                                            <Heart_icon />
                                        </div>
                                        <div>
                                            <p>1</p>
                                            <BsChevronDown />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                            <div><BsBox /></div>
                            <div>Delivery and return options</div>
                            <div><MdArrowForwardIos /></div>
                        </div>
                    </div>
                </div>

                <div id="shopbag_suggest">
                    <h3>You may also like</h3>
                    <div>
                        {product.slice(0,5).map((pro) => (
                            <div onClick={()=>(router(`/singleproduct/${pro._id}`))}>
                                <img src={pro.image[0]} alt="" />
                                <div className='select_item-heart'>
                                    <Heart_icon />
                                </div>
                                <p>4-pack bracelets</p>
                                <p>{pro.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default Shoppingbag