import React, { useState, useEffect, useRef } from 'react';
import './memoryGame.scss';

const MemoryGame = () => {
    const [size, setSize] = useState(4);
    const [count, setCount] = useState(0);
    const [images, setImages] = useState([]);
    const [currentImg, setCurrentImg] = useState('');
    const divs = useRef([]);
    const playgroundRef = useRef(null);

    useEffect(() => {
        getImages();
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        divs.current.forEach(div => div?.classList.remove('passed'));
        getImages();
        reset();
        //eslint-disable-next-line
    }, [size])

    useEffect(() => {
        if(count === 2) {
            setTimeout(reset, 1000)
        }
    }, [count])

    function reset() {
        divs.current.forEach(div => div?.classList.remove('turned'));
            setCount(0);
            setCurrentImg('');
    }

    function getImages() {
        const arr = [];
        for(let i = 1; i < 26; i++) {
            arr.push(import(`../../assets/memoryGame/${i}.jpg`));
        }
        Promise.all(arr)
            .then(res => res.map(item => item.default))
            .then(res => setImages((suffleArray(res))));

        playgroundRef.current.style.gridTemplateColumns = `repeat(${size}, 100px)`;
    }

    function suffleArray(arr) {
        return [...arr.slice(0, (size * size) / 2), ...arr.slice(0, (size * size) / 2)].sort(() => 0.5 - Math.random());
    }

    function generateBlocks(size) {
        const blocksArr = [];

        for(let i = 0; i < size * size; i++) {
            blocksArr.push(
                <div key={i} data-src={images[i]} ref={el => divs.current[i] = el} className='item' onClick={() => clickHandler(i)}>
                    <img className='side back' src={images[i]} alt='' />
                    <div className='side center'>Click the card</div>
                </div>);
        }

        return blocksArr;
    }

    function clickHandler(index) {
        if(count === 0) {
            setCurrentImg(divs.current[index].dataset.src);
        }

        if(count === 2) return;

        if(!divs.current[index].classList.contains('turned')) {
            divs.current[index].classList.add('turned');
            if(currentImg === divs.current[index].dataset.src) {
                divs.current.map(div => div.dataset.src === currentImg ? div.classList.add('passed') : div);
            }   
            setCount(count => count + 1);
        }
    }



    return (
        <div className='container'>
            <h1 className='title '>Memory game</h1>
            <select value={size} onChange={e => setSize(e.target.value)}>
                <option value={4}>4x4</option>
                <option value={6}>6x6</option>
            </select>
            <div className='playground' ref={playgroundRef}>
                {generateBlocks(size)}
            </div>
        </div>
    );
}

export default MemoryGame;
