import { SliderItem } from "../types";

type Props = {
  item: SliderItem;
  onEnter: (itemId: number) => void;
  onLeave: () => void;
};

export const SingleItem: React.FC<Props> = ({ item, onEnter, onLeave }) => {
  const handleEnter = (itemId: number) => {
    onEnter(itemId);
  };

  const handleLeave = () => {
    onLeave();
  };

  return (
    <div 
      className="slider__item"
      onMouseEnter={() => handleEnter(item.id)} 
      onMouseLeave={handleLeave} 
    >
      <video 
        className="slider__item-video" 
        src={item.video} 
        autoPlay
        loop 
        muted 
      />

      <img className={"slider__item-image"} src={item.image} alt="thumbnail" />
  
      <div className={item.hovered ? 'slider__item-overlay': ''}></div>

      <div className="slider__item-content-container">
        <h2 className="slider__item-title">{item.title}</h2>
        <p className="slider__item-text">{item.text}</p>
      </div>
    </div>
  )
};