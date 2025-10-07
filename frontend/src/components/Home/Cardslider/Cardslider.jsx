import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cardslider.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Agriculture from "../../../images/agri.webp";
import Industrial from "../../../images/ind.webp";
import Commercial from "../../../images/com.webp";
import Residential from "../../../images/res.webp";


const multiData = [
  { img: Agriculture, title: "Agriculture", viewmore: "View More" },
  { img: Industrial, title: "Industrial", viewmore: "View More" },
  { img: Commercial, title: "Commercial", viewmore: "View More" },
  { img: Residential, title: "Residential", viewmore: "View More" },
  { img: Industrial, title: "Industrial", viewmore: "View More" },
];

const PreviousBtn = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <ArrowBackIos className="card_leftarrow_icon"/>
  </div>
);

const NextBtn = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <ArrowForwardIos className="card_rightarrow_icon"/>
  </div>
);

const Cardslider = () => {
  return (
    <div className="BootstrapMulti">
      <div className="card_slider_containers">
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={3}
          slidesToScroll={1}
          infinite
        >
          {multiData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};


const Card = ({ item }) => {
  return (
    <div  className="card_slider_inner_containers">
      <img
        className="multi__image"
        src={item.img}
        alt={item.title}
      />
      <div className="slider_carousel_container">
        <p className="slider_heading">
          {item.title}
        </p>
        <p className="viewmore_heading">{item.viewmore}</p>
      </div>
    </div>
  );
};

export default Cardslider;
