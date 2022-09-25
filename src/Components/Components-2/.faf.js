import person_hair from '../../assets/photo/shampoo.png';
import person2 from '../../assets/photo/person2.png';
import { BsFillHeartFill, BsFillBagFill, BsFillStarFill } from "react-icons/bs";






export default function Haircare() {


    return (
        <div className="s-9">
            <div className="haircare">
                <div className="hair_care1">
                    <div className="hair_photos1">
                        <img src={person_hair} alt="" className='hair_care_shampoo' />

                        <div className="hair_photos2">
                            <img src={person2} alt="" className='hair_care_person' />
                        </div>
                        <div className="hair_poyos3">
                            <img src={person_hair} alt="" className='hair_care_shampoo2' />
                        </div>
                    </div>


                </div>



                <div className="hair_care2">
                    <div className="hair_about">
                        <p className="hair-shampoo">აღმდეგი ბალზამი-შამპუნი</p>
                        <span className="price_hair1"> Yaves Rocher </span>
                        <span className="price-_hair2"> 12 ლ</span>
                        <p className="shampoo_ml"> 300 მლ</p>
                        <p className='hair_p'> თმის აღდგენა და სიჯანსაღე. მოიხმარეთ სველ თმაზე. მოხმარების შემდგომა აუცილებლად ჩამოიბანეთ თმა.
                            პროდუქტი დამზადებულია ბუნებრივი ნივთიერებებით. </p>
                        <div className="btn_hair">
                            <button className='btn_hairs'>-</button>
                            <button className='hair_p'>1</button>
                            <button className='btn_hairs'>+</button>

                            <p className='hair_icon_p'> < BsFillHeartFill className='btn_icon_hair' /> ფავორიტები</p>
                            <button className="iconbutton"> <BsFillBagFill className='iconbutton_icon' />  ყიდვა </button>

                        </div>

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

            

        </div>
    )
}