import './styles/reset.scss'
import './App.scss';
import './styles/glovo.css'
import './styles/product.css'
import './styles/offer.css'
import './styles/medicaladvice.css'
import './styles/footer.css'
import './styles/person/person.css'
import './styles/person/about.css'
import './styles/person/haircare.css'
import Headers from './Components/Headers';
import Glovo from './Components/Glovo';
import Product from './Components/Product';
import Offer from './Components/Offer';
import MedicalAdvice from './Components/MedicalAdvice';
import Footer from './Components/Footer';


import { Route, Routes } from 'react-router-dom';
import Person from './Components/Components-2/Person';
import Aboutus from './Components/Components-2/Aboutus';
import Haircare from './Components/Components-2/Haircare';


function App() {
  return (
    <div className="App">
      <Headers />
   
      
 
      <div className="Main">
        
        <Routes>
          <Route path='person' element={<Person />} />
          <Route path='aboutus' element={<Aboutus />} />
          <Route path='Haircare' element={<Haircare />} />      
        </Routes>
       
        <Glovo /> 
        <Product />
        <Offer />
        <MedicalAdvice />
      </div> 

      <Footer />
    </div>
  );
}

export default App;
