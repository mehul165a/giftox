import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo'; // Import the new section
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Navbar />
    <Banner />
    <Products />
    <AdditionalInfo /> {/* Add the AdditionalInfo section here */}
    <Contact />
    <Footer />
  </div>
);

export default App;
