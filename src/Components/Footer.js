

import jpcphoto from '../assets/photo/jpc.png'

import { AiFillFacebook} from "react-icons/ai";
import {BsYoutube, BsInstagram, BsFillTelephoneFill} from "react-icons/bs";
import {HiLocationMarker } from "react-icons/hi";



export default function Footer(){
    return(
        <div className="s-6">
            <div className="cards-footer">
                <div className="cards-footer-header">
                    <img src={jpcphoto} alt="" />
                    <p className='footer-p'> შემოგვიერთდით <AiFillFacebook /> <BsYoutube />  <BsInstagram /> </p>
                </div>

              <div className="ul-footer-list">

              <ul className="footer-ul">
                <li className='contact-li'> პროდუქცია </li>
                <li> მედიკამენტები </li>
                <li> საყოფაცხოვრებო</li>
                <li>ჰიგიენური</li>
                <li>კოსმეტიკა</li>
                <li> სილამაზის პროდუქცია</li>
            
                </ul>
                <ul className="footer-ul">
                <li className='contact-li'> ჩემი ბრენდები </li>
                <li> ლიერაკი </li>
                <li> ნუქსი</li>
                <li>ფიტო</li>
                <li>როქსი დოქტორ</li>
                <li>რენო</li>
                <li> ყველა ბრენდი</li>
            
                </ul>
                <ul className="footer-ul">
                <li className='contact-li'> კომპანია </li>
                <li> ისტორია </li>
                <li> მიღწევები და ჯილდოები</li>
                <li>მართვა და მენეჯმენტი</li>
                <li>ჩვენი გუნდი</li>
                <li> ვაკანსიები</li>
            
                </ul>

                <ul className="footer-ul">
                <li className='contact-li'> კონტაქტი </li>
                <li><HiLocationMarker /> ბელიაშვილის 171</li>
                <li> <a href={5554280940}><BsFillTelephoneFill /> (+995 32) 2940740</a> </li>
                <li> <a href={5554280940}> <BsFillTelephoneFill />(+995 32) 2710707</a> </li>
                <li>  <a href="mailto:feedback@geeksforgeeks.org">  info@gpc.ge</a></li>


               
                </ul>
               
              </div>

             
               
            </div>
             <div className="footer-end">
                 <p className='footer-end-p'>2020 JSC GPC. All rights reserved.</p>
                 <ul className='footer-end-ul'>
                    <li>Terms of use</li>
                    <li>Privacy policy</li>
                    <li>Cookies policy</li>
                 </ul>
              </div>
            
        </div>
    )
}