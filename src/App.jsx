import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideImages = [
  {id:1, name:'Camera', price:'200', url:'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600'},
  {id:2, name:'Blue Pen', price:'400', url:'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1600'},
  {id:3, name:'Orange', price:'2000', url:'https://images.pexels.com/photos/5987154/pexels-photo-5987154.jpeg?auto=compress&cs=tinysrgb&w=1600'},
  {id:4, name:'Crunchy Chips', price:'1200', url:'https://images.pexels.com/photos/6783155/pexels-photo-6783155.jpeg?auto=compress&cs=tinysrgb&w=1600'},
]


 



function App() {

  const settings = {
    dots: true,
    appendDots : dots  => (
      <div style={{ position:'absolute', bottom:'10px'}}>
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
                <div key={item.id} className='image-container'>
                    <img src={item.url} alt='instagram-post'/>
                    <div className='image-title'>
                      <div>  &#8377;{item.price}</div>
                      <div className=''>{item.name}</div>
                    </div>
                    <button>Add To Cart</button>
                </div>
              )
            })}
        </Slider>
    </div>
  )
}

export default App
