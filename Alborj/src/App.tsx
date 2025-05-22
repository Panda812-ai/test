import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import setRoutes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      {setRoutes()}
      <Footer />
    </Router>
  );
};

export default App;