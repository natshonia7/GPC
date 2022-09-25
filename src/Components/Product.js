import shampoon from "../assets/photo/shampoo.png";
import { BsFillStarFill, BsFillBagFill } from "react-icons/bs";
import Button from "./Button";



export default function Product() {
   const Products=[
     'ფასდაკლება',
     "პოპულარული",
     'აუცილებელი'
   ]
  return (
  <div className="s-3">
      <div className="menuproduct">

        <h6 className="product">პროდუქცია</h6>
        <div className="productmenu">
          {/* <button className="btn-1">ახალი პროდუქცია</button> */}
          {/* <button className="btn-2">ფასდაკლება</button> */}
          {/* <button className="btn-2">პოპულარული</button>
          <button className="btn-2">აუცილებელი</button> */}

         <Button text={'ახალი პროდუქცია'} onClick={()=>alert('ახალი პროცუდქცია')} />
         {/* <Button customClass='Button_2' text={'ფასდაკლება'} />
         <Button customClass='Button_2' text={'პოპულარული'} />
         <Button customClass='Button_2' text={'აუცილებელი'} /> */}

         {
          Products.map((Products, i)=>{
            return(
              <Button onClick={()=> alert(Products)} key={i} customClass={'Button_2'} text={Products} />
            )
          })
         }


        </div>
      </div>


      <div className="cards">
           <div className="card-1">
              <div className="card-head">
                 <img src={shampoon} alt="" />
              </div>
              <div className="card-body">
                <span className="rocher"> Yves Rocher</span>
                <span className="starmenu">
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="starwhite" />
                <span className="star-12"> (12)</span>
                </span>
                    <p className="p-shampoo">აღმდეგი ბალზამი-შამპუნი</p>
                    <p className="ml"> 300 მლ</p>
                    <span className="price-1"> 12.50 ლ </span>
                    <span className="price-2"> 15 ლ</span>
                     <span>
                  <button className="iconbutton"> <BsFillBagFill /> ყიდვა </button>
                 
                  </span>
          </div>
          </div>

          <div className="card-1">
              <div className="card-head">
                 <img src={shampoon} alt="" />
              </div>
              <div className="card-body">
                <span className="rocher"> Yves Rocher</span>
                <span className="starmenu">
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="starwhite" />
                <span className="star-12"> (12)</span>
                </span>
                    <p className="p-shampoo">აღმდეგი ბალზამი-შამპუნი</p>
                    <p className="ml"> 300 მლ</p>
                    <span className="price-1"> 12.50 ლ </span>
                    <span className="price-2"> 15 ლ</span>
                     <span>
                  <button className="iconbutton"> <BsFillBagFill /> ყიდვა </button>
                  </span>
          </div>
          </div>

          <div className="card-1">
              <div className="card-head">
                 <img src={shampoon} alt="" />
              </div>
              <div className="card-body">
                <span className="rocher"> Yves Rocher</span>
                <span className="starmenu">
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="starwhite" />
                <span className="star-12"> (12)</span>
                </span>
                    <p className="p-shampoo">აღმდეგი ბალზამი-შამპუნი</p>
                    <p className="ml"> 300 მლ</p>
                    <span className="price-1"> 12.50 ლ </span>
                    <span className="price-2"> 15 ლ</span>
                     <span>
                  <button className="iconbutton"> <BsFillBagFill /> ყიდვა </button>
                  
                  </span>
          </div>
          </div>

          <div className="card-1">
              <div className="card-head">
                 <img src={shampoon} alt="" />
              </div>
              <div className="card-body">
                <span className="rocher"> Yves Rocher</span>
                <span className="starmenu">
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="star" />
                  <BsFillStarFill className="starwhite" />
                <span className="star-12"> (12)</span>
                </span>
                    <p className="p-shampoo">აღმდეგი ბალზამი-შამპუნი</p>
                    <p className="ml"> 300 მლ</p>
                    <span className="price-1"> 12.50 ლ </span>
                    <span className="price-2"> 15 ლ</span>
                     <span>
                  <button className="iconbutton"> <BsFillBagFill /> ყიდვა </button>
                  </span>
          </div>
          </div>
          


      </div>  
 



 </div>  //container



  );
}
