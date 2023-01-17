import { SliderItem } from "./types";
import { SingleItem } from "./SingleItem/SingleItem";
import './Slider.scss';

type Props = {
  items: SliderItem[];
  handleEnter: (itemId: number) => void;
  handleLeave: () => void;
}

export const Slider: React.FC<Props> = ({items, handleEnter, handleLeave}) => {
  
  return (
    <div 
      className='slider'
    >
      {items.map(item => (
        <SingleItem 
          item={item} 
          onEnter={handleEnter}
          onLeave={handleLeave} 
          key={item.id} 
        />
      ))}
    </div>
  );
};