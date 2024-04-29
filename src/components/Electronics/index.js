import React from 'react';
import './index.css'; // Import your CSS file for styling

const ElectronicsData = [
  {
    imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/h/a/o/-original-imagykgpg4rt5kxm.jpeg?q=70",
    title: "HP Laptps",
    price: " ₹90,000"
    },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/x/6/k/-original-imagzvybh5tkgvyv.jpeg?q=70&crop=false",
    title: "Infinix Note 40 pro 5g",
    price: "₹21,999"
  },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/9/v/a/55p635-tcl-original-imagnuyz5xndded3.jpeg?q=70",
    title: "LG Smart Tv",
    price: "₹33,990"
  },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/k0vbgy80pkrrdj/speaker-refurbished/g/q/v/b-lk72b-lg-original-imafkdw5cz6ehgbu.jpeg?q=70",
    title: "Home Theater",
    price: "₹9999"
  },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/air-cooler/9/w/k/-original-imagzzh2gb6bmgkh.jpeg?q=70",
    title:"Air Cooler",
    price: "₹7,999"
  },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/mixer-grinder-juicer/6/d/i/-original-imagrv99zzhdzj2z.jpeg?q=70",
    title: "Mixer Grinders",
    price: "₹1,699"
  },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/f/e/5/-original-imagvkkb3xteags3.jpeg?q=70",
    title: "Refrigerator",
    price: "₹1,22,162"
  },
  {
    imageUrl: "https://rukminim2.flixcart.com/image/612/612/l15bxjk0/inverter/a/a/4/super-power-digital-ups-model-700-12v-dg-3-microtek-original-imagcs4uhzstqvef.jpeg?q=70",
    title: "Inverter",
    price: "₹3,899"
  },
];

const Electronics = () => {
  return (
    <div className="electronics-container">
      <h1> Tvs and Appliance</h1>
      <div className="cards-container">
        {ElectronicsData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronics;
