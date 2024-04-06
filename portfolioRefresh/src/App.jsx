import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />    
        <Outlet />
      <Footer />
    </>
  );
}

export default App;


