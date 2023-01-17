import { NavLink, Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

type Props = {
  onClose: () => void;
};

export const Navslider: React.FC<Props> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className='header__navslider'>
      <span className='header__navslider-icon-container'>
        <ClearIcon onClick={handleClose} />
      </span>

      <ul className='header__navslider-list'>
        <li className='header__navslider-list-item'>
          <NavLink 
            className='header__navslider-link' 
            to="/"
            onClick={handleClose}
          >
            home
          </NavLink>
        </li>

        <li className='header__navslider-list-item'>
          <NavLink 
            className='header__navslider-link' 
            to="/contact"
            onClick={handleClose}
          >
            contact
          </NavLink>
        </li>
      </ul>

      <div className='header__navslider-contact'>
        <p>Join us on&nbsp; 
          <Link 
            className='header__navslider-contact-link' 
            to="#"
          >
            Facebook
          </Link> 
          &nbsp;and&nbsp;
          <Link 
            className='header__navslider-contact-link' 
            to="#"
          >
            Vimeo
          </Link>
        </p>

        <p>All rights reserved</p>
      </div>
    </div>
  )
};