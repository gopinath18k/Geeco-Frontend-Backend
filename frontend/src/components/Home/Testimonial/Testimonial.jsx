import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";


const multiData = [
  { title: "Naveen Raj",customer:"customer",stars:"★★★★★", Testimonial_paragraph: "We’ve been using Geeco Pumps in our manufacturing facility for over a year now, and the performance has been nothing short of exceptional. High flow rate, zero maintenance issues, and consistent output—exactly what we needed." },
  { title: "Guna",customer:"customer",stars:"★★★★★",  Testimonial_paragraph: "I’ve worked with a lot of pumps over the years, but Geeco stands out. Reliable, rugged, and extremely efficient even in the toughest conditions. We use it daily on-site and it hasn’t failed us once. Highly recommended for heavy-duty use." },
  { title: "Saravanan",customer:"customer",stars:"★★★★★",  Testimonial_paragraph: "Geeco Pumps have completely changed how we manage irrigation on our farms. The power consumption is low, and the output is fantastic. Plus, their customer support is responsive and helpful. It’s a great investment for anyone in agriculture." },
  { title: "Vinayagam",customer:"customer",stars:"★★★★★",  Testimonial_paragraph: "From installation to daily use, Geeco Pump has been a breeze. It’s efficient, quiet, and runs smoothly even during high-demand hours. We’ve cut downtime significantly since switching. One of the best operational decisions we’ve made." },
  
];



const TestimonialCardslider = () => {
  return (
    <div className="BootstrapMulti_Testimonial">
      <div className="Testimonial_slider_containers">
        <Slider
          
          slidesToShow={3}
          slidesToScroll={1}
          infinite
          autoplay={true}               
          autoplaySpeed={3000}          
          speed={1000}                   
          pauseOnHover={true}
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
    <div  className="Testimonial_slider_inner_containers">
      
      <div className="Testimonial_slider_carousel_container">
        <p className="Testimonial_slider_heading">
          {item.title}
        </p>
        <p className="Testimonial_Testimonial_customer_heading">
          {item.customer}
        </p>
        <p className="Testimonial_Testimonial_stars_heading">
          {item.stars}
        </p>
        <p className="Testimonial_Testimonial_paragraph_heading">
            {item.Testimonial_paragraph}</p>
      </div>
    </div>
  );
};

export default TestimonialCardslider;
