import { ReactComponent as Logo } from '../assets/svg/jpc.svg';

// icon 
import { BiShoppingBag, BiHeart, BiGroup } from "react-icons/bi";


//react router-dom
import { Link } from 'react-router-dom';

// i18next
import i18n from "i18next";
import { initReactI18next, useTranslation  } from "react-i18next";
import { useState } from 'react';
import { useEffect } from 'react';

const resources = {
  en: {
    translation: {
      "Welcome to React": require('../i18n/en.json')
    }
  },
  ka: {
    translation: {
      "Welcome to React": require('../i18n/ka.json')
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ka",

    interpolation: {
      escapeValue: false 
    }
  });


  // const navigation=[
  //   'პროდუქცია',
  //   'ჩვენს შესახებ',
  //   'აფთიაქები'
  // ]



export default function Header() {
  const {t}=useTranslation();
  <p>{t}</p>

  const [language, setLanguage] = useState('ka')

  useEffect(()=>{
   handleLanguageChange(language)
  }, [language])


  function handleLanguageChange(lng){
    i18n.changeLanguage(lng);
  }





  return (
       <div className="s-1">
      
      <div className="container">
        <div className="menu">
          <div className="logo">
            <Logo className='jpc' />
          </div>

          <div className="navbar">
            <ul className="nav-ul "  >
              <Link to={'/Aboutus'} className="nav-li " style={{ textDecoration: 'none' }} >პროდუქცია</Link>
              <Link to={'/'} className="nav-li " style={{ textDecoration: 'none' }}> ჩვენს შესახებ </Link>
              <Link to={'./'} className="nav-li " style={{ textDecoration: 'none' }}> აფთიაქები </Link>

              {/* {
                navigation.map((li, index)=>{
                  return(
                    // <li className='nav-li' key={index}  style={{ textDecoration: 'none' }} > {li}</li>
                    <Link className='nav-li' to={`${li==="პროდუქცია" ? "/" : li}`} key={index}  style={{ textDecoration: 'none' } } > {t(li)}</Link>
                  )
                })
              } */}

            </ul>
          </div>

         
            <div className="icon">
              <BiShoppingBag className='bag' />
              <BiHeart className='heart' />
              <BiGroup className='person' />
              <Link to={'/Person'} className='personroom' style={{ textDecoration: 'none' }} >კაბინეტი</Link>
              

            </div>

            <div className="lang">
              <span className='ge' onClick={()=>setLanguage('ka')}> ქართ</span>
              <span className='en' onClick={()=>setLanguage('en')} > Eng </span>
            </div>
         
        </div>
      </div>
     
     
      
    </div>
    
 
    
    
    
  )
}