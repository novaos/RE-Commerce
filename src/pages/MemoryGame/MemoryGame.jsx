import React, { useState, useEffect, useRef } from 'react';
import './memoryGame.scss';

const MemoryGame = () => {
  const [size, setSize] = useState(4);
  const [wait, setWaiting] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState('');
  const divs = useRef([]);
  const modal = useRef(null);
  const playgroundRef = useRef(null);

  useEffect(() => {
    getImages(size);
    //eslint-disable-next-line
  }, []);

  function isFinished () {
    return divs.current.every(div => div?.classList.contains('passed')) && divs.current.length
  }

  useEffect(() => {
    setImages([])
    divs.current.forEach(div => div?.classList.remove('passed'));
    reset();
    getImages(size);
    //eslint-disable-next-line
  }, [size]);

  function reset() {
    divs.current.forEach(div => div?.classList.remove('turned'));
    setWaiting(false);
    setCurrentImg('');
  }

  function getImages(size) {
    const quantity = (size * size) / 2;
    const arr = [];

    for (let i = 1; i <= quantity; i++) {
      arr.push(import(`../../assets/memoryGame/${i}.jpg`));
    }

    Promise.all(arr)
      .then(res => res.map(item => item.default))
      .then(res => setImages(suffleArray(res)));

    playgroundRef.current.style.gridTemplateColumns = `repeat(${size}, 100px)`;
  }

  function suffleArray(arr) {
    return [...arr, ...arr].sort(() => 0.5 - Math.random());
  }

  function generateBlocks(images) {
    return images.map((img, i) => {
      return (
        <div key={i} data-src={img} ref={el => (divs.current[i] = el)} className="item" onClick={() => clickHandler(i)}>
          <img className="side back" src={img} alt="" />
          <div className="side center">Click the card</div>
        </div>
      );
    });
  }

  function clickHandler(index) {
    if (wait) return;

    if (!currentImg) {
      setCurrentImg(divs.current[index].dataset.src);
      divs.current[index].classList.add('turned');
    } else if (!divs.current[index].classList.contains('turned')) {
      divs.current[index].classList.add('turned');
      setWaiting(true);

      if (currentImg === divs.current[index].dataset.src) {
        divs.current.map(div => (div.dataset.src === currentImg ? div.classList.add('passed') : div));
      }
      setTimeout(reset, 900);
    }
  }

  function closeModal() {
    modal.current.classList.remove('is-active')
  }

  function restartGame() {
    closeModal();
    setImages([]);
    divs.current.forEach(div => div?.classList.remove('passed'));
    reset();
    getImages(size);
  }

  const items = generateBlocks(images);

  return (
    <>
      <h1 className="title ">Memory game</h1>
      <select value={size} onChange={e => setSize(e.target.value)}>
        <option value={4}>4x4</option>
        <option value={6}>6x6</option>
      </select>
      <div className="playground" ref={playgroundRef}>
        {items}
      </div>
      <div className={`modal ${isFinished() ? 'is-active' : ''}`} ref={modal}>
        <div className="modal-background"></div>
        <div className="modal-content">
        <div className="custom-box box">
          <h1 className='title is-4'>Well done!</h1>
          <button className='button is-primary' onClick={restartGame}>Start new game</button>
        </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={closeModal}/>
      </div>
    </>
  );
};

export default MemoryGame;
