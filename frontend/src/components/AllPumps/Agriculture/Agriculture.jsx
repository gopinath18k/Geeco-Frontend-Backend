import React, { useState } from "react";
import "./Agriculture.css"; 
import Sub_V4_Tuff_Bullet from "../../../images/Agriculture/Sub-V4-pump.webp"
import images1 from "../../../images/Sub V4 pump.webp"
import AgricultureBanner from "../../../images/Agrimage.webp"
import { Link } from "react-router-dom";

export const Agriculture = () => {

      const categories = [
        "BOREWELL SUBMERSIBLE PUMPS",
        "OPENWELL SUBMERSIBLE PUMPS",
        "AMPHIBIEN PUMPS",
        "CENTRIFUGAL MONO BLOCKS",
        "SELF PRIMING MONO BLOCK PUMPS",
        "JET PUMPS",
        "SEWAGE PUMPS",
        "PRESSURE BOOSTER PUMP",
        "COMPRESSOR PUMPS",
        "TANK COMPRESSOR PUMPS",
        "CONTROL PANELS",
        "FLAT SUBMERSIBLE CABLES",
      ];
    
      const pumpData = {
        "BOREWELL SUBMERSIBLE PUMPS": {
          sizes: {
            "4' (100MM)": [
              { name: "V4 Tuff,Bullet Pumps", img: Sub_V4_Tuff_Bullet, link: "/agriculture-pump/borewell_v4_pumps" },
              { name: "V3 Sleek Model", img: images1 }
            ],
            "6' (150MM)": [
              { name: "V6 Heavy Model", img: images1 },
            ],
          },
        },
        "OPENWELL SUBMERSIBLE PUMPS": {
          sizes: {
            "3' (75mm)": [
              { name: "V3 Amphibian", img: images1 },
              { name: "V3 Amphibian Plus", img: images1 },
            ],
            "4' (100mm)": [
              { name: "V4 Amphibian", img: images1 },
            ],
          },
        },
      };
    
      const [selectedCategory, setSelectedCategory] = useState(null);
      const [selectedSize, setSelectedSize] = useState(null);
    
      const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedSize(null); // reset size when new category selected
      };
    

      
  return (
    <div className="pumps-container">
      <div className="Agriculutre_Banner_container">
        <div className="Agriculte_Banner_Content">
          <p>Pumps We Serve</p>
         <h2>Agriculture Pumps</h2>
        </div>
        <div className="Agriculture_Banner_image">
          <img src={AgricultureBanner} alt="Agriculture Banner" className="Agriculture_images"/>
        </div>
      </div>

      <div className="pumps-content">
        <h2 className="agriculture_main_heading">Find Your Pumps</h2>
      </div>
      
      <div className="pumps-content">
        {/* Categories */}
        <div className="categories">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`category-item ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Pump Details */}
        <div className="pump-details">
          {selectedCategory && pumpData[selectedCategory] && (
            <>
              {/* Size Tabs */}
              <div className="size-tabs">
                {Object.keys(pumpData[selectedCategory].sizes).map(
                  (size, idx) => (
                    <div
                      key={idx}
                      className={`size-tab ${
                        selectedSize === size ? "active" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  )
                )}
              </div>

              
              {/* Pump Images */}
              <div className="pump-images">
                {selectedSize &&
                  pumpData[selectedCategory].sizes[selectedSize].map((pump, idx) => (
                    <Link to={pump.link || "#"} key={idx} className="pump-card-link" onClick={() => window.scrollTo(0, 0)}>
                      <div className="pump-card">
                        <img src={pump.img} alt={pump.name} />
                        <div className="pump_content_conatiner">
                          <p className="pump_name">{pump.name}</p>
                          <small>{selectedSize}</small>
                        </div>
                        
                      </div>
                    </Link>
                  ))}
              </div>

            </>
          )}
        </div>
      </div>
    </div>
  );
};

