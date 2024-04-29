import React, { useState } from 'react';
import Electronics from '../Electronics'


import Carousle from '../Carousle'
import { MdKeyboardArrowRight,MdKeyboardArrowDown } from "react-icons/md";
import "./index.css"


const images = [
    '/cursole1.webp',
    '/carusole2.webp',
    '/carusole3.jpg',
    '/carusole4.jpg',
];


const categoriesData = [
    {
        id: 1,
        name: "Mobiles",
        subcategories: [
            {
                id: 11,
                name: "Smartphones",
                subcategories: [
                    { id: 111, name: "Android" },
                    { id: 112, name: "iOS" },
                    { id: 113, name: "Windows" }
                ]
            },
            {
                id: 12,
                name: "Accessories",
                subcategories: [
                    { id: 121, name: "Earphone" },
                    { id: 122, name: "Charger" }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Fashion",
        subcategories: [
            {
                id: 21,
                name: "Men's Fashion",
                subcategories: [
                    { id: 211, name: "Shirt" },
                    { id: 212, name: "Pant" },
                    { id: 213, name: "T-Shirt" },
                    { id: 214, name: "Shoes" }
                ]
            },
            {
                id: 22,
                name: "Women's Fashion",
                subcategories: [
                    { id: 221, name: "Tops" },
                    { id: 222, name: "Sarees" },
                    { id: 223, name: "Cosmetics" },
                    { id: 224, name: "Purse" }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Electronics",
        subcategories: [
            {
                id: 31,
                name: "Computers",
                subcategories: [
                    { id: 311, name: "Laptops" },
                    { id: 312, name: "Desktops" },
                    { id: 313, name: "Tablets" }
                ]
            },
            {
                id: 32,
                name: "Audio & Video",
                subcategories: [
                    { id: 321, name: "Headphones" },
                    { id: 322, name: "Speakers" },
                    { id: 323, name: "Home Theater Systems" }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Home Appliances",
        subcategories: [
            {
                id: 41,
                name: "Kitchen",
                subcategories: [
                    { id: 411, name: "Refrigerator" },
                    { id: 412, name: "Microwave" },
                    { id: 413, name: "Gas-Stove" }
                ]
            },
            {
                id: 42,
                name: "Bedroom",
                subcategories: [
                    { id: 421, name: "Almirah" },
                    { id: 422, name: "Table" },
                    { id: 423, name: "Mirror" }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Laptops",
        subcategories: [
            {
                id: 51,
                name: "Business Laptops",
                subcategories: [
                    { id: 511, name: "Mac" },
                    { id: 512, name: "Infinix Laptop" },
                    { id: 513, name: "Hp Pallivion" }
                ]
            },
            {
                id: 52,
                name: "Gaming Laptops",
                subcategories: [
                    { id: 521, name: "Asus ROG Strix" },
                    { id: 522, name: "MSI Gaming" },
                    { id: 523, name: "Acer Predator" }
                ]
            },
            {
                id: 53,
                name: "Ultra-thin Laptops",
                subcategories: [
                    { id: 531, name: "Apple MacBook Air" },
                    { id: 532, name: "Chrome Book" },
                    { id: 533, name: "Iball" }
                ]
            }
        ]
    }
    // Add more categories with their respective nested subcategories
];

const Home=()=>{
    const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
    

    
    return(
        <div >
        <ul>
        <li>
            <img src='/Applience.webp' alt="applience"/>
            <p>Home Applience <MdKeyboardArrowDown/></p>
            <div style={{ left: '10%',top:"38%" }}   className='hoverCard' id="laptopsHoverCard">
        {/* Loop through categories to find "Laptops" */}
        {categoriesData.map((category) => {
            if (category.name === "Home & Furniture") {
                return (
                    // Render subcategories for laptops
                    <ul className='categoryList'>
                        {category.subcategories.map((subCategory) => (
                            <li 
                                key={subCategory.id}
                                onMouseOver={() => setHoveredSubcategory(subCategory)}
                                
                                className='categoryListValue'
                                
                            >
                                {subCategory.name}
                                <MdKeyboardArrowRight />
                            </li>
                        ))}
                    </ul>
                );
            } else {
                return null; // Return null for categories other than "Laptops"
            }
        })}
    </div>

   
    {hoveredSubcategory && (
        <div style={{ left:'18%',top:"40%"}}   className="subcategoryCard">
            {/* Content specific to the hovered subcategory */}
           
            {hoveredSubcategory.subcategories.map((item) => (
                <>
                <a href="https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_1af740c6-7cca-408e-b6db-2e912adaac4f_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321" ><p key={item.id}>{item.name}</p></a> 
                </>
            ))}
        </div>
    )}
        </li>
        <li>
            <img src='/BeautyToys.webp' alt="BeautyToys"/>
            <p>Beauty & Toys</p>
        </li>
        <li>
            <img src='/fashon.png' alt="fashon"/>
            <p>fashon <MdKeyboardArrowDown/></p>
            {/* Hover card for laptops */}
    <div style={{ left: '30%',top:"40%" }}   className='hoverCard' id="laptopsHoverCard">
        {/* Loop through categories to find "Laptops" */}
        {categoriesData.map((category) => {
            if (category.name === "Fashion") {
                return (
                    // Render subcategories for laptops
                    <ul className='categoryList'>
                        {category.subcategories.map((subCategory) => (
                            <li 
                                key={subCategory.id}
                                onMouseOver={() => setHoveredSubcategory(subCategory)}
                                
                                className='categoryListValue'
                                
                            >
                                {subCategory.name}
                                <MdKeyboardArrowRight />
                            </li>
                        ))}
                    </ul>
                );
            } else {
                return null; // Return null for categories other than "Laptops"
            }
        })}
    </div>

   
    {hoveredSubcategory && (
        <div style={{ left:'38%',top:"40%"}}   className="subcategoryCard">
            {/* Content specific to the hovered subcategory */}
           
            {hoveredSubcategory.subcategories.map((item) => (
                <>
                <a href="https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_1af740c6-7cca-408e-b6db-2e912adaac4f_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321" ><p key={item.id}>{item.name}</p></a> 
                </>
            ))}
        </div>
    )}
        </li>
        <li>
            <img src='/Home.webp' alt="Home"/>
            <p>Home</p>
        </li>
        <li>
    {/* Laptop category */}
    <img src='/laptops.png' alt="laptops"/>
    <p>Laptops <MdKeyboardArrowDown/></p>

    {/* Hover card for laptops */}
    <div style={{ left:'60%',top:"40%"}} className='hoverCard' id="laptopsHoverCard">
        {/* Loop through categories to find "Laptops" */}
        {categoriesData.map((category) => {
            if (category.name === "Laptops") {
                return (
                    // Render subcategories for laptops
                    <ul className='categoryList'>
                        {category.subcategories.map((subCategory) => (
                            <li 
                                key={subCategory.id}
                                onMouseOver={() => setHoveredSubcategory(subCategory)}
                                
                                className='categoryListValue'
                                
                            >
                                {subCategory.name}
                                <MdKeyboardArrowRight />
                            </li>
                        ))}
                    </ul>
                );
            } else {
                return null; // Return null for categories other than "Laptops"
            }
        })}
    </div>

    {/* Display hovered subcategory details */}
    {hoveredSubcategory && (
        <div style={{ left:'68%',top:"40%"}} className="subcategoryCard">
            {/* Content specific to the hovered subcategory */}
           
            {hoveredSubcategory.subcategories.map((item) => (
                <>
                <a href="https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_1af740c6-7cca-408e-b6db-2e912adaac4f_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321" ><p key={item.id}>{item.name}</p></a> 
                </>
            ))}
        </div>
    )}
</li>
 
      
        <li>
            <img src='/mobile.png' alt="mobile"/>
            <p>mobile <MdKeyboardArrowDown/></p>
            <div style={{ left: '70%',top:"40%" }}   className='hoverCard' id="laptopsHoverCard">
        {/* Loop through categories to find "Laptops" */}
        {categoriesData.map((category) => {
            if (category.name === "Mobiles") {
                return (
                    // Render subcategories for laptops
                    <ul className='categoryList'>
                        {category.subcategories.map((subCategory) => (
                            <li 
                                key={subCategory.id}
                                onMouseOver={() => setHoveredSubcategory(subCategory)}
                                
                                className='categoryListValue'
                                
                            >
                                {subCategory.name}
                                <MdKeyboardArrowRight />
                            </li>
                        ))}
                    </ul>
                );
            } else {
                return null; // Return null for categories other than "Laptops"
            }
        })}
    </div>

   
    {hoveredSubcategory && (
        <div style={{ left:'78%',top:"40%"}}   className="subcategoryCard">
            {/* Content specific to the hovered subcategory */}
           
            {hoveredSubcategory.subcategories.map((item) => (
                <>
                <a href="https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_1af740c6-7cca-408e-b6db-2e912adaac4f_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321" ><p key={item.id}>{item.name}</p></a> 
                </>
            ))}
        </div>
    )}
        </li>
        <li>
            <img src='/travel.webp' alt="travel.webp"/>
            <p>travel</p>
        </li>
        <li>
            <img src='/TwoWhwleres.webp' alt="Bikes"/>
            <p>Bikes</p>
        </li>


        </ul>
        <div className='carousleCrad'>
            <Carousle images={images} interval = "5000"/>
        </div>
        <Electronics/>
        </div>
    )
}
export default Home;