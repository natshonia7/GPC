// import Product from "../Product";
import { Link } from 'react-router-dom';


export default function Aboutus(){

    // const Hair=[
    //     "ბავშვის კვება",
    //     "დედა და შვილი",
    //     "თმის მოვლა",
    //     "კოსმეტიკა",
    //     "მედიკამენტები",
    // ]
   
    return(

       <div className="s-8">            
            <div className="search_all">
                <div className="search">
                    <h6 className="search_h"> ძებნა</h6>
                    <ul className="search_ul">
                    <Link to={'.'} className="search_li">ბავშვის კვება</Link>
                    <br />
                    <Link to={'.'} className="search_li"> დედა და შვილი</Link>
                    <br />
                    <Link to={'/Haircare'} className="search_li">თმის მოვლა</Link>
                    <br />

                    <Link to={'.'}className="search_li">კოსმეტიკა</Link>
                    <br />
                    <Link to={'.'} className="search_li">მედიკამენტები</Link>
                    <br />
                    <Link to={'.'} className="search_li">პირის ღრუს მოვლა</Link>
                    <br />
                    <Link to={'.'} className="search_li">საკვები</Link>
                    <br />
                    
                    <Link to={'.'} className="search_li">სამედიცინო მოწყობილობები</Link>
                    <br />
                    <Link to={'.'} className="search_li"> ჰიგიენა</Link>
                    </ul>
                </div>

              <div className="line">

              </div>
            <div className="a-h">
                <h6 className="a-h-style">ა-ჰ</h6>
                <ul className="a-h-ul_list">
                    <Link to={'./'} className="ah_li">თმის ვიტამინები</Link>
                    <Link to={'./'} className="ah_li">თმის ზეთი</Link>
                    <Link to={'./'} className="ah_li">თმის მასკა</Link>
                    <Link to={'./'} className="ah_li">კონდიციონერი</Link>
                    <Link to={'./'} className="ah_li">შამპუნი</Link>
                </ul>
            </div> 
        
         </div>
            
        </div>
       

     
    )
   

}