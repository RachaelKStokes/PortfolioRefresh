import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Nav />
      
      < Header />
      
        <Outlet />
      <Footer />
    </>
  );
}

export default App;


