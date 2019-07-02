import React,{useState} from 'react'
import Slider from "react-slick";
export default function NotFound() {
  const [count, setCount] = useState(0);
  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:false,
    autoplaySpeed:6000,
    beforeChange:(a:number,b:number)=>{
      console.log(a,b)
    }
    }

  return (
    <div style={{width:'500px' ,backgroundColor:'black',color:'white',height:'100px'}}>
      <Slider {...settings}>
        <div style={{backgroundColor:'green', width:'300px',height:'100px'}}>
          1
        </div>
        <div style={{backgroundColor:'green', width:'300px',height:'100px'}}>
          2
        </div>
        <div style={{backgroundColor:'bule', width:'300px',height:'100px'}}>
          3
        </div>
      </Slider>
    </div>
  );
}
