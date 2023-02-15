import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideImages = [
  {id:1, name:'Camera', url:'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600'},
  {id:2, name:'Blue Pen', url:'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1600'},
  {id:3, name:'Orange', url:'https://images.pexels.com/photos/5987154/pexels-photo-5987154.jpeg?auto=compress&cs=tinysrgb&w=1600'},
  {id:4, name:'Crunchy Chips', url:'https://images.pexels.com/photos/6783155/pexels-photo-6783155.jpeg?auto=compress&cs=tinysrgb&w=1600'},
]


 



function App() {

  const settings = {
    dots: true,
    appendDots : dots  => (
      <div style={{ position:'absolute', bottom:'20px'}}>
        <h3 className="image-title">{name}</h3>
        <ul style={{margin:'0px'}}>{dots}</ul>
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className="App">
        <Slider {...settings}>
            {SlideImages.map((item)=>{
              return (
                <div key={item.id}>
                    <img src={item.url} alt='instagram-post'/>
                </div>
              )
            })}
        </Slider>
    </div>
  )
}

export default App
