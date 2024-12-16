import { Link } from 'react-router-dom';

const Navbar =() =>{
  return(
    <nav>
      <ul>
        <li><Link to="/">Haqqinda</Link></li>
        <li><Link to="/portfolio">Is Numuneleri</Link></li>
        <li><Link to="/contact">Elaqe melumatlari</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;