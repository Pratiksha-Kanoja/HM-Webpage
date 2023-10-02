import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Imgbox from '../Components/Imgbox';
import Images from '../Img/Img';
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import './Homepage.css'
function Homepage() {
    return (
        <div id="Container">
            <Header/> {/*this is header Component which we access here */}



            <div id="extra-info">
                <p>Members get free shipping above Rs.1999</p>
                <p>Free & flexible 15 days return</p>
                <p>Download the H&M App</p>
            </div>

            <div id='first_img'>
                <div>
                    <p>Rs.4,999.00</p>
                    <p>Oversized blazer <MdKeyboardArrowRight /> </p>
                </div>
                <Imgbox img={Images.first} />
                <div>
                    <p>The blazer:A trans-seasonal hero</p>
                    <button>Shop now</button>
                </div>
            </div>
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

            <div id="wins">
                <p>A/W23 WARDROBE WINS</p>
                <p>Key staples for the season ahead!</p>
                <div>
                    <button>Ladies</button>
                    <button>Men</button>
                    <button>Divided</button>
                    <button>Kids & Baby</button>
                </div>
            </div>
            <div id="popular_categories">
                <div>
                    <h3>Popular categories</h3>
                    <div id="pc-main">
                        <div>
                            <div>
                                <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124" alt="1" />
                                <p>Ladies Tops & T-shirts</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10201.png?imwidth=124" alt="2" />
                                <p>Ladies Trousers</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10231.png?imwidth=124" alt="3" />
                                <p>Men Hoodies & Sweatshirts</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ borderRadius: "50%" }}>
                                <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10244.png?imwidth=124" alt="4" />
                                <p>Ladies Clothes</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124" alt="5" />
                                <p>Men T-shirts & Tops</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10220.png?imwidth=124" alt="6" />
                                <p>Ladies Accessories</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10208.png?imwidth=124" alt="7" />
                                <p>Ladies Shirts & Blouses</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png?imwidth=124" alt="8" />
                                <p>Ladies Cardigans & Sweaters</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <BsArrowRight />
                </div>

            </div>

            <div id='third_img'>
                <div>
                    <p>Rs.999.00</p>
                    <p>Cotton corduroy shirt <MdKeyboardArrowRight /> </p>
                </div>
                <Imgbox img={Images.third} />
                <div>
                    <p>Baby autumn fashion</p>
                    <p>Stunning autumn styles for sweet babies.</p>
                    <button>Shop now</button>
                </div>
            </div>

            <div id="Studio">
                <p>H&M STUDIO</p>
                <p>The A/W 2023 collection launches 28 September.</p>
                <div>
                    <button>GET INSPIRED</button>
                </div>
            </div>

            <div id="new_arrivals">
                <h3>New Arrivals</h3>
                <div>
                    <button style={{backgroundColor:"#e50111",border:"none",color:"white"}}>Ladies</button>
                    <button>Men</button>
                    <button>Divided</button>
                    <button>Baby</button>
                    <button>Kids</button>
                    <button>H&M Home</button>
                    <button>Sport</button>
                </div>
                <div>
                    <div className="na-img">
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/24/6a/246a4d20fdeb95a2530eab9c7ae54030fe445600.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="" />
                        </div>
                        <p>Crinkel button-front top</p>
                        <p>Rs.1,299,00</p>
                    </div>
                    <div className="na-img">
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/50/5f/505fd9cdda7ec9286fdcb29a3ebbc26a70f39d50.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="" />
                        </div>
                        <p>Knitted jumper</p>
                        <p>Rs.1,499.00</p>
                    </div>
                    <div className="na-img">
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/0e/77/0e77d181a703925c11123f14f219d62cb4832755.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="" />
                        </div>
                        <p>Cropped jumper</p>
                        <p>Rs.2,299.00</p>
                    </div>
                    <div className="na-img">
                        <div>
                            <img src="https://lp2.hm.com/hmgoepprod?set=source[/33/32/333299abcae6f4ff8b3109d64d43d8310bfaa8f6.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="" />
                        </div>
                        <p>Draped jersey dress</p>
                        <p>Rs.2,299.00</p>
                    </div>
                </div>
            </div>

            <div id='forth_img'>
                <div>
                    <p>Rs.2,299.00</p>
                    <p>Frill-trimmed pointell... <MdKeyboardArrowRight /> </p>
                </div>
                <Imgbox img={Images.forth} />
                <div>
                    <p>Season for knits</p>
                    <p>Hello bows,frills, and puffers!</p>
                    <button>Shop now</button>
                </div>
            </div>

            <div id="magzine">
                    <p>MAGAZINE</p>
                    <p>A WORLD OF INSPIRATION</p>
                    <p>READ H&M MAGAZINE</p>
                <div>
                    <div>
                        <div>
                            <img src="https://image.hm.com/content/dam/hm-magazine-2023/july_2023/branding-campaign/Top_Teaser%20image_7408_Magazine_1688x1126.jpg?imwidth=657" alt="" />
                        </div>
                        <div>
                        <p>INSIDE H&M</p>
                        <p>Zlatan Ibrahimović, Nadia Nadim & JaQuel Knight HIIT the Zone</p>
                        </div>
                        
                        <button>Read The Story <BsArrowRight /></button>
                    </div>
                    <div>
                        <div>
                            <img src="https://image.hm.com/content/dam/hm-magazine-2023/august_2023/lookbook-3088/3088-3x2-top-image.jpg?imwidth=657" alt="" />
                        </div>
                        <div>
                        <p>INSIDE H&M</p>
                        <p>AUTUMN ’23 MENSWEAR TRENDS</p>
                        </div>
                        
                        <button>Read The Story <BsArrowRight /></button>
                    </div>
                    <div>
                        <div>
                            <img src="https://image.hm.com/content/dam/hm-magazine-2023/august_2023/studio-2018/2018-STUDIO-3x2-1688x1126-Top.jpg?imwidth=657" alt="" />
                        </div>
                        <div>
                        <p>INSIDE H&M</p>
                        <p>Designed to thrill</p>
                        </div>
                        
                        <button>Read The Story <BsArrowRight /></button>
                    </div>
                </div>
            </div>






            <Footer />
        </div>
    )
}
export default Homepage;