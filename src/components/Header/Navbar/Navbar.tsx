import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';



export const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/">
          <img className='logo__image' src="/aglet_logo.svg" alt="logo" />
        </Link>
      </div>

      <div className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink className='nav__link' to="/">home</NavLink>
          </li>

          <li className='nav__item'>
            <NavLink className='nav__link' to="/contact">contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
};