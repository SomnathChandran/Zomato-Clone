import React from 'react'
import "./Global.css"
import {AiOutlineStar} from "react-icons/ai"
import {HiLocationMarker} from "react-icons/hi"
import {AiOutlineCaretDown} from "react-icons/ai"
import {CiSearch} from "react-icons/ci"

import {IoIosArrowForward} from "react-icons/io"
import {IoIosArrowDown} from "react-icons/io"
// --
import {ImLinkedin} from "react-icons/im"
import {FaInstagramSquare} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {IoLogoYoutube} from "react-icons/io"
import {FaFacebookSquare} from "react-icons/fa"
import {AiOutlineGlobal} from "react-icons/ai"
import {AiOutlineDown} from "react-icons/ai"

// import {RxSlash} from "react-icons/rx"
import {SiZomato} from "react-icons/si"
import bikepic from "./img/bike_picture.avif"
import dining from "./img/dining.png"
import nitlife from "./img/nitlife-dark.webp"
import briyani from "./img/briyani.avif"
import burger from "./img/burger.avif"
import cake from "./img/cake.avif"
import chicken from "./img/chicken.webp"
import sandwich from "./img/sandwich.avif"
import pizza from './img/pizza'
import meghana from "./img/meghana.avif"
import empire from "./img/empire.avif"
import burgerking from "./img/burgerKing.avif"
import truffies from "./img/truffies.avif"
import kfc from "./img/kfc.avif"
import mcdonald from "./img/mcdonald.avif"

// import india from "./cardimg/india_files"

import follow from "./cardimg/follow.webp"
import kfc1 from "./cardimg/kfc.avif"
import empire1 from "./cardimg/empire.avif"
import meghana1 from "./cardimg/meghana.avif"
import pizzahut from "./cardimg/Pizzahut.avif"
import Burgerking from "./cardimg/Burgerking.avif"
import sriudupipark from "./cardimg/sriudupipark.avif"
import coffee from "./cardimg/coffee.avif"
import kadambaveg from "./cardimg/kadambaVeg.avif"
import bennedosa from "./cardimg/BenneDasa.avif"
import vishnu from "./cardimg/vishnu.avif"
import hotcoffee from "./cardimg/hotcoffee.avif"
import kapoorcofe from "./cardimg/kapoorcofe.avif"

// footer
import footer1 from "./cardimg/footer1.webp"
import footer2 from "./cardimg/footer2.webp"
import india from "./cardimg/india.png"

const App = () => {
  return (<>
  <div className='container'>
    <section className='section-nav'>
        <div className='navbar'>
            <h2><a href="#"><SiZomato id='zomato'/></a></h2>
            <div className='search'>
               <HiLocationMarker className='loc'>
               </HiLocationMarker>
               <input type="text"  placeholder='Bengalure' />
               <AiOutlineCaretDown/>
               <div id='br-line'></div>
               <CiSearch id='cisearch'/>
               <input type="text" placeholder='Search for restaurant,cuisine or a dish'id='place-search'/>
            </div>
            <div className='login-name'>
                <ul>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </div>
        </div>
    </section>
    

    {/* //! bread crums start */}
    {/* <section className='bread-crums'>
        <div className='crums-div'>
            <p><a href="">Home</a> <RxSlash/>
            <a href="">India</a><RxSlash/>Salem Restaurant</p>
        </div>
    </section> */}

{/* ============================================= Mode =============================  */}
    <section id='mode'>
        <div className='mode-div1'>
          
            <a href="#">
                <div className='del-m'>
                    <div id='del-img'>
                        <img src={bikepic} alt={bikepic} /> 
                    </div>
                    <h2>Delivery</h2> 
                </div>
            </a>
            <a href="#">
                <div>
                <div id='del-img1'>
                        <img src={dining} alt={dining} />
                    </div>
                    <h2>Dining Out</h2>
                </div>
            </a>
            <a href="#">
                <div>
                <div id='del-img2'>
                        <img src={nitlife} alt={nitlife} />
                    </div>
                    <h2>Nightlife</h2>
                </div>
            </a>
        </div>
    </section> 
{/* ============================================================ */}

<div className='filterMenu'>
    <button type="text">Filters</button>
    <button type="text">Rating:4.0+</button>
    <button type="text">Pure Veg</button>
    <button type="text">Cuisines
    <AiOutlineCaretDown/></button>
</div>

{/* ---------------------first order ----------------------------- */}
<div className='firstorder'>
    <h1>Inspiration for your first order</h1>
</div>    
    <div className='firstOrderItem'>
        <ul>
            <li>
                <img src={briyani} alt={briyani} />
                <h3>Briyani</h3>
            </li>
            <li>
            <img src={burger} alt={burger} />
                <h3>Burger</h3>
            </li>
            <li>
            <img src={cake} alt={cake} />
                <h3>Cake</h3>
            </li>
            <li>
            <img src={chicken} alt={chicken} />
                <h3>Chicken</h3>
            </li>
            <li>
            <img src={sandwich} alt={sandwich} />
                <h3>Sandwich</h3>
            </li>
            <li>
            <img src={pizza} alt={pizza} />
                <h3>Pizza</h3>
            </li>
        </ul>
    </div>

{/* ---------------------Top brand----------------------------- */}
<div className='topBrand'>
    <h1>Top brands for you</h1>
</div>    
    <div className='topBrandItem'>
        <ul>
            <li>
                <img src={meghana} alt={meghana} />
                <h3>Meghana Foods</h3>
                <h6>20 min</h6>
            </li>
            <li>
            <img src={empire} alt={empire} />
                <h3>Empire Restaurant</h3>
                <h6>27 min</h6>
            </li>
            <li>
            <img src={burgerking} alt={burgerking} />
                <h3>Burger King</h3>
                <h6>30 min</h6>
            </li>
            <li>
            <img src={truffies} alt={truffies} />
                <h3>Truffies</h3>
                <h6>21 min</h6>
            </li>
            <li>
            <img src={kfc} alt={kfc} />
                <h3>KFC</h3>
                <h6>12 min</h6>
            </li>
            <li>
            <img src={mcdonald} alt={mcdonald} />
                <h3>McDonald</h3>
                <h6>22 min</h6>
            </li>
        </ul>
    </div>

    {/* ---------------------best food----------------------------- */}
<div className='bestfood'>
    <h1>Best Food in Bengaluru</h1>
</div> 
{/*   ===========================card-1----------------------------- */}

<div className='cardmain'>
    <div className='card'>

        <div className='cardsec1'>

            <div className='card2'>
                <img src={kfc1} alt={kfc1} />
                <div className='cardstar'>
                    <h4>KFC</h4>
                    <button type='text'>4.0<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>Fast Food, Burger, Biryani..</h4>
                    <h4>₹100 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>33min</h4>
                </div>
            </div>

            <div className='card1'>
                <img src={empire1} alt={empire1} />
                <div className='cardstar'>
                    <h4>Empire Restaurant</h4>
                    <button type='text'>4.1<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>North Indian, Biryani, Keba...</h4>
                    <h4>₹100 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>47min</h4>
                </div>
                 <div className='space'><hr /></div>
                 <div className='follow'>
                    <img src={follow} alt={follow} />
                    <h6>Follows all Max Safety measures to ensure your food is safe</h6>
                 </div>
            </div>

            <div className='card1'>
             <img src={meghana1} alt={meghana1} />
                <div className='cardstar'>
                    <h4>Meghana Foods</h4>
                    <button type='text'>4.4<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>Biryani, Andhra, North Indian..</h4>
                    <h4>₹100 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>59min</h4>
                </div>
                 <div className='space'><hr /></div>
                 <div className='follow'>
                    <img src={follow} alt={follow} />
                    <h6>Follows all Max Safety measures to ensure your food is safe</h6>
                 </div>
            </div>
        </div>
        {/* ----------------------------2---------- */}
        <div className='cardsec1'>

            <div className='card1'>
                <img src={pizzahut} alt={pizzahut} />
                <div className='cardstar'>
                    <h4>Pizza Hut</h4>
                    <button type='text'>3.6<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>Pizza, Pasta, Sandwich, Fa...</h4>
                    <h4>₹200 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>64min</h4>
                </div>
                 <div className='space'><hr /></div>
                 <div className='follow'>
                    <img src={follow} alt={follow} />
                    <h6>Follows all Max Safety measures to ensure your food is safe</h6>
                 </div>
            </div>

            <div className='card1'>
             <img src={Burgerking} alt={Burgerking} />
                <div className='cardstar'>
                    <h4>Burger King</h4>
                    <button type='text'>4.1<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>Burger, Fast Food, Desser..</h4>
                    <h4>₹150 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>32min</h4>
                </div>
                 <div className='space'><hr /></div>
                 <div className='follow'>
                    <img src={follow} alt={follow} />
                    <h6>Follows all Max Safety measures to ensure your food is safe</h6>
                 </div>
            </div>

            <div className='card2'>
                <img src={sriudupipark} alt={sriudupipark} />
                <div className='cardstar'>
                    <h4>Sri Udupi Park</h4>
                    <button type='text'>4.3<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>South Indian, Chinese...</h4>
                    <h4>₹100 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>54min</h4>
                </div>
            </div>
        </div>
        {/* ----------------------3-------------------- */}
        <div className='cardsec1'>

            
        <div className='card2'>
                <img src={coffee} alt={coffee} />
                <div className='cardstar'>
                    <h4>Sendhoor Coffee</h4>
                    <button type='text'>4.1<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>South Indian, Beverages..</h4>
                    <h4>₹200 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>39min</h4>
                </div>
            </div>

            <div className='card1'>
                <img src={kadambaveg} alt={kadambaveg} />
                <div className='cardstar'>
                    <h4>Hotel Kadamba Veg</h4>
                    <button type='text'>4.2<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>South Indian, North Indian,...</h4>
                    <h4>₹200 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>41min</h4>
                </div>
                 <div className='space'><hr /></div>
                 <div className='follow'>
                    <img src={follow} alt={follow} />
                    <h6>Follows all Max Safety measures to ensure your food is safe</h6>
                 </div>
            </div>


            <div className='card1'>
             <img src={bennedosa} alt={bennedosa} />
                <div className='cardstar'>
                    <h4>Davanagere Benne Dose</h4>
                    <button type='text'>4.0<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>South india</h4>
                    <h4>₹200 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>46min</h4>
                </div>
                 <div className='space'><hr /></div>
                 <div className='follow'>
                    <img src={follow} alt={follow} />
                    <h6>Follows all Max Safety measures to ensure your food is safe</h6>
                 </div>
            </div>
        </div>
        {/* ------------------------------------4---------------- */}
        <div className='cardsec1'>

            <div className='card1'>
                <img src={vishnu} alt={vishnu} />
                <div className='cardstar'>
                    <h4>Vishnu Garden</h4>
                    <button type='text'>4.3<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>South Indian, North Indian...</h4>
                    <h4>₹100 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>23min</h4>
                </div>
                 <div className='space'><hr /></div>
                 <div className='follow'>
                    <img src={follow} alt={follow} />
                    <h6>Follows all Max Safety measures to ensure your food is safe</h6>
                 </div>
            </div>

            <div className='card2'>
                <img src={hotcoffee} alt={hotcoffee} />
                <div className='cardstar'>
                    <h4>Hot Coffee</h4>
                    <button type='text'>4.5<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>South Indian, Beverages..</h4>
                    <h4>₹100 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>37min</h4>
                </div>
            </div>

            <div className='card1'>
             <img src={kapoorcofe} alt={kapoorcofe} />
                <div className='cardstar'>
                    <h4>Kapoor's Cafe</h4>
                    <button type='text'>4.1<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>North Indian, Fast Food, St..</h4>
                    <h4>₹100 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>56min</h4>
                </div>
                 <div className='space'><hr /></div>
                 <div className='follow'>
                    <img src={follow} alt={follow} />
                    <h6>Follows all Max Safety measures to ensure your food is safe</h6>
                 </div>
            </div>
        </div>
        {/* --------------------------------------------5------------ */}
        <div className='cardsec1'>

            <div className='card1'>
             <img src={meghana1} alt={meghana1} />
                <div className='cardstar'>
                    <h4>Meghana Foods</h4>
                    <button type='text'>4.4<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>Biryani, Andhra, North Indian..</h4>
                    <h4>₹100 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>59min</h4>
                </div>
                 <div className='space'><hr /></div>
                 <div className='follow'>
                    <img src={follow} alt={follow} />
                    <h6>Follows all Max Safety measures to ensure your food is safe</h6>
                 </div>
            </div>

            
            <div className='card1'>
                <img src={empire1} alt={empire1} />
                <div className='cardstar'>
                    <h4>Empire Restaurant</h4>
                    <button type='text'>4.1<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>North Indian, Biryani, Keba...</h4>
                    <h4>₹100 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>47min</h4>
                </div>
                 <div className='space'><hr /></div>
                 <div className='follow'>
                    <img src={follow} alt={follow} />
                    <h6>Follows all Max Safety measures to ensure your food is safe</h6>
                 </div>
            </div>

            
            <div className='card2'>
                <img src={kfc1} alt={kfc1} />
                <div className='cardstar'>
                    <h4>KFC</h4>
                    <button type='text'>4.0<AiOutlineStar/></button>
                </div>
                <div className='cardstarplace'>
                    <h4>Fast Food, Burger, Biryani..</h4>
                    <h4>₹100 for one</h4>
                </div>
                <div className='cardstartime'>
                    <h4>33min</h4>
                </div>
            </div>

        </div>
        {/* ===================== card end ============================== */}


    </div>

</div>

{/* ---------------------------------  popular location ---------------- */}

{/* <div className='topBrand'>
    <h1>Popular localities in and around Bengaluru</h1>
</div>   */}
<section id='cities'>
        <div className='city-div'>
            <h4>Popular localities in and around Bengaluru</h4>
            <div className='cities-div'>
                
                <ul>
                    <li>
                        <div>
                            <h2>Koramangala</h2>
                            <p>323 places</p>
                        </div>
                        <div>
                        <IoIosArrowForward/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Bank Colony</h2>
                            <p>837 places</p>
                        </div>
                        <div>
                        <IoIosArrowForward/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Electronic City</h2>
                            <p>764 places</p>
                        </div>
                        <div>
                        <IoIosArrowForward/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Jaya Nagar</h2>
                            <p>344 places</p>
                        </div>
                        <div>
                        <IoIosArrowForward/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Whitefield</h2>
                            <p>712 places</p>
                        </div>
                        <div>
                        <IoIosArrowForward/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>Madiwala</h2>
                            <p>474 places</p>
                        </div>
                        <div>
                        <IoIosArrowForward/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>HSR Layout</h2>
                            <p>674 places</p>
                        </div>
                        <div>
                        <IoIosArrowForward/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>JP Nagar Nagar</h2>
                            <p>524 places</p>
                        </div>
                        <div>
                        <IoIosArrowForward/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2>More</h2>    
                        </div>
                        <div>
                        <IoIosArrowDown/>
                        </div>
                    </li>
                </ul>
    </div>
        </div>
    </section>

    {/* Explore options near me starts */}

    <section id='explore'>
        <div className='explore'>
            <ul>
                <a href="">
                <li>
                    <p>Popular cuisines near me</p>
                    <p><IoIosArrowDown/></p>
                </li>
                </a>
                <a href="">
                <li>
                    <p>Popular restaurant types near me</p>
                    <p><IoIosArrowDown/></p>
                </li>
                </a><a href="">
                <li>
                    <p>Top Restaurant Chains</p>
                    <p><IoIosArrowDown/></p>
                </li>
                </a>
                <a href="">
                <li>
                    <p>Cities We Deliver To</p>
                    <p><IoIosArrowDown/></p>
                </li>
                </a>
                
            </ul>
        </div>
    </section>



  {/* -------------------------footer----------------- */}

  <div className='footer'>
    <div className='footer1'>
        <div className='footersub1'>
         <div className='logo'>
             <div>
                  <h2><a href="#"><SiZomato id='zomato'/></a></h2>
            </div>
             <div className='buttons'>
                <button><img src={india} alt={india} />India<AiOutlineDown className='dropdown'/></button>
                <button><AiOutlineGlobal/>English <AiOutlineDown className='dropdown'/></button>
             </div>
         </div>
            
        </div>

        <div className='footersub2'>
            <div className='sub1'>
                <ul>
                    <a href="#"><li id='subhead1'>ABOUT ZOMATO</li></a>
                    <a href="#"><li>Who We Are</li></a>
                    <a href="#"><li>Blog</li></a>
                    <a href="#"><li>Work With Us</li></a>
                    <a href="#"><li>Investor Relations</li></a>
                    <a href="#"><li>Report Fraud</li></a>
                    <a href="#"><li>Press Kit</li></a>
                    <a href="#"><li>Contact Us</li></a>
                </ul>
            </div>
            <div className='sub1'>
                <ul>
                    <a href="#"><li id='subhead1'>ZOMAVERSE</li></a>
                    <a href="#"><li>Zomato</li></a>
                    <a href="#"><li>Blinkit</li></a>
                    <a href="#"><li>Feeding India</li></a>
                    <a href="#"><li>Hyperpure</li></a>
                    <a href="#"><li>Zomaland</li></a>
                </ul>
            </div>
            <div className='sub1'>
                <ul>
                    <a href="#"><li id='subhead1'>FOR RESTAURANTS</li></a>
                    <a href="#"><li>Partner With Us</li></a>
                    <a href="#"><li>Apps For You</li></a>
                    <a href="#"><li id='subhead2'>FOR ENTERPRISES</li></a>
                    <a href="#"><li>Zomato For Enterprise</li></a>
                </ul>
            </div>
            <div className='sub1'>
                <ul>
               <a href="#"><li id='subhead1'>LEARN MORE</li></a>
               <a href="#"><li>Privacy</li></a>
               <a href="#"><li>Security</li></a>
               <a href="#"><li>Terms</li></a>
               <a href="#"><li>Sitemap</li></a>
               </ul>
            </div>
            <div className='sub1'>
                <h5 id='subhead1'>SOCIAL LINKS</h5>
                <div className='iconf'>
                   <ul>
                    <li><ImLinkedin className='social'/></li>
                    <li><FaInstagramSquare className='social'/></li>
                    <li><FaTwitterSquare className='social'/></li>
                    <li><IoLogoYoutube className='social'/></li>
                    <li><FaFacebookSquare className='social'/></li>
                   </ul>
                </div>
                <div className='footer2'>
                    <img src={footer1} alt={footer1} />
                    <img src={footer2} alt={footer2} />
                </div>
            </div>
        </div>
        {/* <div className='space'><hr /></div> */}
        <hr />
        <div className='footersub3'>
            <h5>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</h5>
        </div>
    </div>

  </div>












    </div>
    </>
  )
}

export default App