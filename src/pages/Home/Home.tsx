import { useState } from 'react';

//styles
import './Home.scss';

//types
import { SliderItem } from '../../components/Slider/types';

//data
import { data } from '../../data';
import { Slider } from '../../components/Slider/Slider';

export const Home: React.FC= () => {
  const [items, setItems] = useState<SliderItem[]>(data);

  const handleEnter = (itemId: number) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id !== itemId) {
        return {
          ...item,
          hovered: true,
        };
      }
      
      return item;
    }))
  };

  const handleLeave = () => {
    setItems(prevItems => prevItems.map(item => {
      return {
        ...item,
        hovered: false,
      };
    }))
  };

  return (
    <div className='home'>
      <Slider items={items} handleEnter={handleEnter} handleLeave={handleLeave} />
    </div>
  )
};