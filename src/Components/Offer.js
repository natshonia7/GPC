import clarins from '../assets/photo/clarins.png';
import zgarbi from '../assets/photo/zgarbi_card.png'
import circle from '../assets/photo/circle.png'


export default function Offer (){
    return(
        
        <div className="s-4">
            <div className="cards2">
                <div className="card-head2">
                <img src={clarins} alt="" className='clarinsphoto' />
                <img src={circle} alt="" className='circlephoto' />
                <div className="cardhead2">
                     <p className='clarinstext'>clarins</p> 
                     <span className='clarinsprocent'> -30%</span>
                     <button className='offer-btn'> შეთავაზება </button>
                </div>
               
                        

                </div>
                
                

 
                <div className="card-body2">
                <img src={zgarbi} alt=""  className='zgarbiphoto'/>
                <p className='score'> დააგროვე ქულები და მიიღე მეტი შემოთავაზებები!</p>
                 <button className='cardbutton'> გახსენი ბარათი</button>

                </div>
            </div>
        </div>
       
    )
}