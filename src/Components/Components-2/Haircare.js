import photos from '../../assets/svg/photos.png'
import { BsFillHeartFill, BsFillBagFill, BsFillStarFill } from "react-icons/bs";
import rocher1 from '../../assets/photo/rocher1.png';
import klorane from '../../assets/photo/klorane.png';
import rocher2 from '../../assets/photo/rocher2.png';
import vichy from '../../assets/photo/vichy.png'
import { useState } from 'react';






export default function Haircare(){

    const [count, setCount] = useState(1)
    return(
        <div className="s-9">
            <div className="hair_care">
                <div className="hair_photos">
                    <img src={photos} alt="" />

                </div>


                <div className="hair_text">
                    <div className="hair_1">
                        <p className="hair-shampoo">აღმდეგი ბალზამი-შამპუნი</p>
                        <span className="price_hair1"> Yaves Rocher </span>
                        <span className="price-_hair2"> 12 ლ</span>
                        <p className="shampoo_ml"> 300 მლ</p>
                        <p className='hair_p'> თმის აღდგენა და სიჯანსაღე. მოიხმარეთ სველ თმაზე. მოხმარების შემდგომა აუცილებლად ჩამოიბანეთ თმა.
                         პროდუქტი დამზადებულია ბუნებრივი ნივთიერებებით. </p>

                         <div className="btn_hair">

                            <button onClick={() => setCount(prevCount => prevCount - 1)}
                            className='btn_hairs'>-</button>
                            <button  className='hairs_btn'>{count}</button>
                            <button onClick={()=>setCount(prevCount => prevCount + 1)}
                            className='btn_hairs'>+</button>

                            <p className='hair_icon_p'> < BsFillHeartFill className='btn_icon_hair' /> ფავორიტები</p>
                            <button className="iconbutton"> <BsFillBagFill className='iconbutton_icon' />  ყიდვა </button>

                        </div>
                    </div>



                    <div className="hair_2">
                        <h6>შეფასება</h6>
                        <p>ჯამური ქულა
                        <span className='star_span'>
                        <BsFillStarFill className="star_2" />
                        <BsFillStarFill className="star_2" />
                         <BsFillStarFill className="star_2" />
                       <BsFillStarFill className="star_2" />
                       <BsFillStarFill className="starwhite_2" />
                       (6)
                            </span>
                        
                        </p>
                        <p>ხარისხის და ფასის მიმართება
                        <span className='star_span'>
                        <BsFillStarFill className="star_2" />
                        <BsFillStarFill className="star_2" />
                         <BsFillStarFill className="star_2" />
                       <BsFillStarFill className="star_2" />
                       <BsFillStarFill className="starwhite_2" />
                       (6)
                            </span>
                        </p>
                        <p>ეფექტურობა
                        <span className='star_span'>
                        <BsFillStarFill className="star_2" />
                        <BsFillStarFill className="star_2" />
                         <BsFillStarFill className="star_2" />
                       <BsFillStarFill className="star_2" />
                       <BsFillStarFill className="starwhite_2" />
                       (6)
                            </span>
                        </p>
                        <p>დიზაინი
                        <span className='star_span'>
                        <BsFillStarFill className="star_2" />
                        <BsFillStarFill className="star_2" />
                         <BsFillStarFill className="star_2" />
                       <BsFillStarFill className="star_2" />
                       <BsFillStarFill className="starwhite_2" />
                       (6)
                            </span>
                        </p>


                        <h6 className='comment'>კომენტარები</h6>
                        <p>
                            <br />
                        პროდუქტი შეიცავს ბუნებრივ შემადგენლებს და არის მისაღები ფასის.
                      
                          <br />
                          <br />
                        რეკომენდირებულია ფასიდან და ხარისხიდან გამომდინარე. 
                        <br />
                        <br />

                        ისე, ძალიან კაი ფასისაა. 

                        </p>
                         <p className='more'> მეტი</p>
                         <p className='make_comment'> დატოვე კომენტარი</p>
                    </div>
                </div>
            </div>
            <div className="btn_btn">
                <div className="btn_class">
                    <button className='btn_button_1'> ანოტაცია</button>
                    <button className='btn_button'> შემადგენლობა</button>
                    <button className='btn_button'> მოხმარების წესი</button>
                    <button className='btn_button'> სად შევიძინო</button>
                </div>
                <div className="btn_btn_text">
                    <p>გაამაგრეთ თქვენი თმები პირველადი ცივი წესით
                        დამუშავებული ტოსკანური ზეითუნის ზეთსა და უძვირფასესი
                        ლიმნისა და ნუშის ყვავილების ექსტრაქტის უნიკალური კომბინაციით.
                        მკვებავი ნივთიერებებისა და პანთენოლით გაჯერებული კომპლექსი ამაგრებს სუსტ თმის
                        ძირებსა და ანიჭებს მოცულობას.</p>
                    <p>შედეგი: ინტენსიური ფერის, ბრწყინვალე თმა.
                        <br />
                        დერმატოლოგიურად ტესტირებულია.
                        <br /> თვალში მოხვედრისას დაუყოვნებლივ ამოიბანეთ თბილი წყლით.</p>
                </div>


                


            </div>
            <div className="hair_intresting">
                <h6 className='intresting_p'>შეიძლება დაგაინტერესოთ</h6>
                <div className="i_picture">
                    <div className="card_picture">
                    <img src={rocher1} alt=""  />
                    <p className='picture_1_text1'>ივ როშეს - შამპუნი შეღებილი თმისთვის</p>
                    <br />
                    <p className='picture1'>65 ლარი</p>
                    </div>

                    <div className="card_picture">
                      <img src={klorane} alt="" className='picture_1' />
                      <p className='picture_1_text'>კლორანი-შამპუნი ბუნებრივი ქერა
                       <br /> თმისთვის 
                      </p>
                      <p className='picture1'>30 ლარი</p>
                    </div>

                    <div className="card_picture">
                        <img src={rocher2} alt="" />
                        <p className='picture_1_text1'>ივ როშეს - მოცულობის მიმცემი შამპუნი</p>
                        <br />
                        <p className='picture1'>32 ლარი</p>
                    </div>

                    <div className="card_picture">
                        <img src={vichy} alt="" />
                        <p className='picture_1_text2'>ვიშის დეზადორი</p>
                        <br />
                        <p className='picture1'>12 ლარი</p>
                    </div>

                    


                </div>
            </div>
        </div>
    )
}