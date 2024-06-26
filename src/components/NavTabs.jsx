import { Link, useLocation } from 'react-router-dom';

 function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav class="nav nav-tabs" role="tablist">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"

          className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;
