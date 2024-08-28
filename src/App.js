import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Dealer from './components/Dealer.jsx';
import Carousal from './components/companies.jsx';
import Services from './components/services.jsx';
import Payment from './components/payment.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dealer />
      <Carousal/>
      <Services/>
      <Payment/>
      <Footer/>
    </div>
  );
}

export default App;
