import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import api from '../Helpers/AxiosConfig';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoSquareOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";


const Product = () => {
    const [product, setProduct] = useState([]);
    const router = useNavigate();

    function BackToHomepage() {
        router('/');
    }
    function routerToMen() {
        router("/Men")
    }
    function routerToNewarrival(){
        router("/products")
    }

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
    console.log(product);
    return (
        <div className='product_container'>
            <Header />
            <div className='procontainer_route'>
                <button onClick={BackToHomepage}>HM.com <span style={{ marginRight: "5px" }}>/</span></button>
                <button onClick={routerToMen}> Men <span style={{ marginRight: "5px" }}>/</span></button>
                <button onClick={routerToNewarrival}> New Arrival Clothes</button>
            </div>
            <div className='product_container-body'>
                <div className='pb-left'>
                    <div>
                        <p>Member Exclusive Prices</p>
                        <p>Shop Now</p>
                    </div>
                    <div>
                        <p>New Arrivals</p>
                        <p>View All</p>
                        <p>Clothes</p>
                        <p>Shoes & Accessories</p>
                    </div>
                    <div>
                        <p>Trending now</p>
                        <p>Trending now</p>
                    </div>
                    <div>
                        <p>Shop by Product</p>
                        <p>View All</p>
                        <p>T-shirts & Tops</p>
                        <p>Shirts</p>
                        <p>Trousers</p>
                        <p>Shoes</p>
                        <p>Hoodies & Sweatshirts</p>
                        <p>Knitwear</p>
                        <p>Jeans</p>
                        <p>Bascis</p>
                        <p>Shorts</p>
                        <p>Cardigans & Jumpers</p>
                        <p>Jackets & Coats</p>
                        <p>Suits & Blazers</p>
                        <p>Underwear & Innerwear</p>
                        <p>Swimwear</p>
                        <p>Socks</p>
                        <p>Accessories</p>
                        <p>Sportswear</p>
                        <p>Care products</p>
                        <p>Sleepwear & Loungewear</p>
                        <p>Premium Selection</p>
                        <p>Sales</p>
                    </div>
                    <div>
                        <p>Sustainability</p>
                        <p>H&M Take Care</p>
                        <p>Learn More</p>
                    </div>
                </div>

                <div className='pb-right'>
                    <div className="pbright_holiday">
                        <p>HOLIDAY</p>
                        <p>Spread the holiday cheer!</p>
                        <div>
                            <button>Ladies</button>
                            <button>Men</button>
                            <button>Divided</button>
                            <button>Kids</button>
                            <button>Baby</button>
                            <button>Home</button>
                        </div>
                    </div>
                    <div className='pbright-secondbox'>
                        <p>NEW ARRIVALS MEN'S CLOTHES</p>
                        <p>Stay up to date with the latest fashion trends and find your favourites among our stylish selection of new arrivals.</p>
                        <div>
                            <div>
                                <div>
                                    <p>SORT BY</p>
                                    <FaChevronDown style={{ fontSize: "13px", marginLeft: "10px" }} />
                                </div>
                                <div>
                                    <p>SIZE</p>
                                    <FaChevronDown style={{ fontSize: "13px", marginLeft: "10px" }} />
                                </div>
                                <div>
                                    <p>COLOUR</p>
                                    <FaChevronDown style={{ fontSize: "13px", marginLeft: "10px" }} />
                                </div>
                                <div>
                                    <p>PATTERN</p>
                                    <FaChevronDown style={{ fontSize: "13px", marginLeft: "10px" }} />
                                </div>
                                <div>
                                    <p>PRODUCT TYPE</p>
                                    <FaChevronDown style={{ fontSize: "13px", marginLeft: "10px" }} />
                                </div>
                                <div>
                                    <HiOutlineAdjustmentsHorizontal style={{ fontSize: "25px", marginRight: "10px" }} />
                                    <p>ALL FILTERS</p>
                                </div>
                            </div>
                            <div>
                                <p>12 items</p>
                                <p>Model</p>
                                <p>Product</p>
                                <IoSquareOutline style={{ fontSize: "25px" }} />
                                <HiOutlineSquares2X2 style={{ fontSize: "25px", color: "red" }} />
                            </div>
                        </div>
                    </div>


                    <div>
                    {product?.length ?
                        <div className='pbright-productbox'>
                            {product.map((pro) => (
                                // this is single producuct box
                                <div onClick={()=>(router(`/singleproduct/${pro._id}`))}>
                                    {pro.image?.length ? 
                                    <div>
                                        {pro.image.slice(0,1).map((img) => (
                                            <img src={img} alt="" className='images'/>
                                        ))}
                                    </div>
                                        :
                                    <div>Loading.......</div>}
                                    <p>{pro.name}</p>
                                    <p>{pro.price}</p>

                                    {pro.image?.length ? 
                                    <div>      
                                        {pro.image.slice(0,1).map((img) => (
                                            <img src={img} alt="" className='images'/>
                                        ))}
                                    </div>
                                        :
                                    <div>Loading.......</div>}
                                </div>

                            ))}
                        </div>
                        :
                        <div>Loading.....</div>}
                        </div>
                </div>


            </div>
            <Footer/>

        </div>
    )
}

export default Product
