import { ISingleCard } from "./interfaces";



const SingleCard = ({ card, handleClick, turned }: ISingleCard) => {
  return (
    <div className={turned ? 'turnedd card-item' : 'card-item'} >
      <img className="front-side image" src={card.src} alt="" />
      <img 
        className="back-side" 
        src='./img/unnamed.jpg' 
        alt=""
        onClick={() => handleClick(card)}
      />
    </div>
  );
}

export default SingleCard;
