import React from "react";
import models from "../images/ModelS.jfif";
import model3 from "../images/Model3.jfif";
import modelx from "../images/ModelX.jfif";
import modely from "../images/ModelY.jfif";
import modelRoof from "../images/SolarRoof.jfif";
import modelPanels from "../images/SolarPanels.jfif";
import down from "../images/down.svg";

const Shop = () => {
  return (
    <section>
      {/* Model S Section Start */}
      <div id="model-s" className="car_section">
        <img src={models} alt="" className="car_image" />

        <div className="car_details transform_50">
          <h1 className="model_name">Model S</h1>
          <h2 className="tag_line">
            Order Online for{" "}
            <span className="underline cursor-pointer">Touchless Delivery</span>
          </h2>
        </div>

        <div className="car_buttons transform_50">
          <button className="btn">Custom Order</button>
          <button className="btn inventory">Existing Inventory</button>
        </div>

        <a href="#model-3">
          <img src={down} alt="" className="down_svg" />
        </a>
      </div>
      {/* Model S Section End */}

      {/* Model 3 Section Start */}
      <div id="model-3" className="car_section">
        <img src={model3} alt="" className="car_image" />

        <div className="car_details transform_50">
          <h1 className="model_name">Model 3</h1>
          <h2 className="tag_line">
            Order Online for{" "}
            <span className="underline cursor-pointer">Touchless Delivery</span>
          </h2>
        </div>

        <div className="car_buttons transform_50">
          <button className="btn">Custom Order</button>
          <button className="btn inventory">Existing Inventory</button>
        </div>

        <a href="#model-x">
          <img src={down} alt="" className="down_svg" />
        </a>
      </div>
      {/* Model 3 Section End */}

      {/* Model X Section Start */}
      <div id="model-x" className="car_section">
        <img src={modelx} alt="" className="car_image" />

        <div className="car_details transform_50">
          <h1 className="model_name">Model X</h1>
          <h2 className="tag_line">
            Order Online for{" "}
            <span className="underline cursor-pointer">Touchless Delivery</span>
          </h2>
        </div>

        <div className="car_buttons transform_50">
          <button className="btn">Custom Order</button>
          <button className="btn inventory">Existing Inventory</button>
        </div>

        <a href="#model-y">
          <img src={down} alt="" className="down_svg" />
        </a>
      </div>
      {/* Model X Section End */}

      {/* Model Y Section Start */}
      <div id="model-y" className="car_section">
        <img src={modely} alt="" className="car_image" />

        <div className="car_details transform_50">
          <h1 className="model_name">Model Y</h1>
          <h2 className="tag_line">
            Order Online for{" "}
            <span className="underline cursor-pointer">Touchless Delivery</span>
          </h2>
        </div>

        <div className="car_buttons transform_50">
          <button className="btn">Custom Order</button>
          <button className="btn inventory">Existing Inventory</button>
        </div>

        <a href="#model-roof">
          <img src={down} alt="" className="down_svg" />
        </a>
      </div>
      {/* Model Y Section End */}

      {/* Model Roof Section Start */}
      <div id="model-roof" className="car_section">
        <img src={modelRoof} alt="" className="car_image" />

        <div className="car_details transform_50">
          <h1 className="model_name">Model Roof</h1>
          <h2 className="tag_line">
            Order Online for{" "}
            <span className="underline cursor-pointer">Touchless Delivery</span>
          </h2>
        </div>

        <div className="car_buttons transform_50">
          <button className="btn">Custom Order</button>
          <button className="btn inventory">Existing Inventory</button>
        </div>

        <a href="#model-panels">
          <img src={down} alt="" className="down_svg" />
        </a>
      </div>
      {/* Model Roof Section End */}

      {/* Model Panels Section Start */}
      <div id="model-panels" className="car_section">
        <img src={modelPanels} alt="" className="car_image" />

        <div className="car_details transform_50">
          <h1 className="model_name">Model Panels</h1>
          <h2 className="tag_line">
            Order Online for{" "}
            <span className="underline cursor-pointer">Touchless Delivery</span>
          </h2>
        </div>

        <div className="car_buttons transform_50">
          <button className="btn">Custom Order</button>
          <button className="btn inventory">Existing Inventory</button>
        </div>

        <a href="#model-s">
          <img src={down} alt="" className="down_svg" />
        </a>
      </div>
      {/* Model Panels Section End */}

    </section>
  );
};

export default Shop;
