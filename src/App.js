import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import Restaurant from './Restaurant';
import RestaurantCard from './RestaurantCard';
import Blog from './Blog';
import Services from './Services';
import Cheakouts from './Cheakouts';
import PricingTable from './PricingTable';
import Contact from './Contact';
// import *  as Icon from 'react-bootstrap-icons/'
import Footer from './Footer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='*'element={<Home/>} />
      <Route path='/AboutUs'element={<AboutUs/>} />
      <Route path='/Restaurant'element={<Restaurant/>} />
      <Route path='/RestaurantCard'element={<RestaurantCard/>} />
      <Route path='/Blog'element={<Blog/>} />
      <Route path='/Services'element={<Services/>} />
      <Route path='/Cheakouts'element={<Cheakouts/>} />
      <Route path='/PricingTable'element={<PricingTable/>} />
      <Route path='/Contact'element={<Contact/>} />
      </Routes>

      
      <Footer/>

</BrowserRouter></>
     
    </div>
  );
}

export default App;
