import { useState } from 'react';

import { Navbar } from "./Navbar/Navbar";
import { Navslider } from "./Navslider/Navslider";

import './Header.scss';

import MenuIcon from '@mui/icons-material/Menu';



export const Header: React.FC = () => {
  const [openSlider, setOpenSlider] = useState(false);

  const toggleSlider = () => {
    setOpenSlider(!openSlider);
  };

  return (
    <div className="header">
        <span className='header__menu-container'>
          <MenuIcon 
            sx={{ color:'#fff' }} 
            onClick={toggleSlider}
          />
        </span>
       
      
      <Navbar />

      <div className={openSlider ? 'header__navslider-container open' : 'header__navslider-container'}>
        <Navslider onClose={toggleSlider} />
      </div>
    </div>
  )
};