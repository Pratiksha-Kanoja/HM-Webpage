import './Men.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Imgbox from '../Components/Imgbox';
import Images from '../Img/Img';
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
function Men() {
    const router= useNavigate()

    function BackToHomepage(){
        router('/');
    }
    function routerToMen() {
        router("/Men")
    }
    function routerToNewarrival(){
        router("/products")
    }
    return (
        <div id='Container'>
            <Header />
            <div id='link'>
                <button onClick={BackToHomepage}>HM.com <span style={{marginRight:"5px"}}>/</span></button>
                <button onClick={routerToMen}> Men</button>
            </div>
            <div id='Main-body'>
                <div id='mb-left'>
                    <div>
                        <p>Member Exclusive Prices</p>
                        <p>Shop Now</p>
                    </div>
                    <div>
                        <p>New Arrivals</p>
                        <p>View All</p>
                        <p onClick={routerToNewarrival}>Clothes</p>
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

                <div id='mb-right'>
                    <div id='second_img'>
                        <div>
                            <p>A/W2023</p>
                            <button>Shop now</button>
                        </div>
                        <Imgbox img={Images.second} />
                        <div>
                            <p>Rs.5,999.00</p>
                            <p>Relaxed Fit Double-b.. <MdKeyboardArrowRight /> </p>
                        </div>
                    </div>
                    <div id='special-treat'>
                        <p>Special treat: Member exclusive prices</p>
                        <p>Explore to enjoy exclusive styles for less!</p>
                        <div>
                            <AiOutlineInfoCircle />
                        </div>
                    </div>
                    <div id="fashion">
                        <p>Affordable fashion, unlimited styles!</p>
                        <p>Everything under ₹1999</p>
                        <div>
                            <button>Shop now</button>
                        </div>
                    </div>

                    <div id='fifth_img'>
                        <Imgbox img={Images.fifth} />
                        <div>
                            <p>Wear the attitude, own the street</p>
                            <p>Explore our new arrivals</p>
                            <button>Shop now</button>
                        </div>
                    </div>

                    <div id='six_img'>
                        <Imgbox img={Images.six} />
                        <div>
                            <p>New collection featuring StormMove.Your complete outdoor support.</p>
                            <button>Shop now</button>
                        </div>
                    </div>
                    

                    <div id='men-clothing'>
                        <p>Men's Clothing</p>
                        <p>Check out all the freshest styles your closet needs in our men's clothing range. You'll find a roundup of everyday essentials, including tops and T-Shirts, as well as comfy lounge sets and underwear. Formal event coming up? Scroll no further than our men's blazers and suits for the sharpest looks and nail the dress code. When it comes to men's pants, there's chinos, joggers and cargo styles in all the staple colors. dreaming of denim? our men's jeans offer a range </p>
                        <p>Read more</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Men;