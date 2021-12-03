import { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import {images} from './images';
import { ICard } from './interfaces';
import './memoryGame.scss';


const Newgame = () => {
  const [size, setSize] = useState<number>(4);
  const [cards, setCards] = useState<ICard[]>([]);
  const [first ,setFirst] = useState<ICard | null>(null);
  const [second ,setSecond] = useState<ICard | null>(null);
  const [disable, setDisable] = useState<boolean>(false)

  useEffect(() => {
    if(first && second) {
      setDisable(true)

      if(first.src === second.src) {
        setCards(prev => {
          return prev.map(card => {
            if(card.src === first.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        });
        reset();
      } else {
        setTimeout(reset, 1000);
      }
    }
  }, [first, second])

  useEffect(() => {
    suffleArray();
    // eslint-disable-next-line
  }, [size])

  const suffleArray = () => {
    const qty = size * size / 2;
    const suffledImages = [...images.slice(0, qty), ...images.slice(0, qty)]
      .sort(() => Math.random() - 0.5)
      .map(item => ({...item, id: Math.random()}));

    reset();
    setCards(suffledImages);
  }

  const handleClick = (card: ICard) => {
    if(!disable) {
      first ? setSecond(card) : setFirst(card); 
    }
  }

  const reset = () => {
    setFirst(null);
    setSecond(null);
    setDisable(false);
  }

  return (
    <div className='columns my-4 '>
      <div className="column is-one-fifth">
        <div className='box py-5 px-0 is-flex is-flex-direction-column is-align-items-center'>
          <h1 className="title">Memory game</h1>
          <select className='select mb-5' value={size} onChange={e => setSize(+e.target.value)}>
            <option value={4}>4x4</option>
            <option value={6}>6x6</option>
          </select>
          <button className='button is-outlined mt-5 is-primary' onClick={suffleArray}>New game</button>
        </div>
      </div>
      <div className="column">
        <div className={`new-playground ${size === 6 ? 'six' : ''}`}>
          {cards.map(card => (
            <SingleCard 
              key={card.id} 
              card={card} 
              handleClick={handleClick}
              turned={card === first || card === second || card.matched}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newgame;
