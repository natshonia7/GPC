import photo1 from '../assets/photo/1.png'
import photo2 from '../assets/photo/2.png'
import photo3 from '../assets/photo/3.png'



export default function MedicalAdvice(){
    return(
        <div className="s-5">
            <h6 className='advice-1'> სამედიცინო რჩევები</h6>
            <div className="cards-advice">
                
                <div className="cards-advice-head">
                    <img src={photo1} alt="" className='advicephoto' /> 
                     <div className="card-advice-body">
                    <p className='advice-text'> ყველაფერი გრიპის შესახებ</p>
                    <p  className='advice-text-2'>გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული დაავადებაა.
                         გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული 
                         დაავადებაა. </p>
                </div>
                </div>
              

                <div className="cards-advice-head">
                    <img src={photo2} alt="" />
                     <div className="card-advice-body">
                <p className='advice-text'>  ორსულობის ხიბლი</p>
                <p  className='advice-text-2'>გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული დაავადებაა.
                         გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული 
                         დაავადებაა. </p>
                </div>
                </div>
               

                <div className="cards-advice-head">
                    <img src={photo3} alt="" />
                    <div className="card-advice-body">
                <p className='advice-text'> თავის ტკივილები ნაბახუსევზე</p>
                <p  className='advice-text-2'>გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული დაავადებაა.
                         გრიპი სასუნთქი გზების მწვავე და ვერაგი ვირუსული 
                         დაავადებაა. </p>
                </div>
                </div>
                
            </div>
        </div>
    )
}