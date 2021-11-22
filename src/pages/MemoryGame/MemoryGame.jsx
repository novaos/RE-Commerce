import React, { useState, useEffect, useRef } from 'react';
import './memoryGame.scss';

const MemoryGame = () => {
    const [size, setSize] = useState(4);
    const [count, setCount] = useState(0);
    const [images, setImages] = useState([]);
    const divs = useRef([]);
    const playgroundRef = useRef(null);

    useEffect(() => {
        const arr = [];
        for(let i = 1; i < 26; i++) {
            arr.push(import(`../../assets/memoryGame/${i}.jpg`));
        }
        Promise.all(arr)
        .then(res => {
            let links = res.map(item => item.default);
            setImages(suffleArray(links));
        });
    }, []);

    useEffect(() => {
        playgroundRef.current.style.gridTemplateColumns = `repeat(${size}, 100px)`
    }, [size])

    useEffect(() => {
        if(count === 2) {
            setTimeout(() => {
                divs.current.forEach(div => div.classList.remove('turned'));
                setCount(0);
            }, 1000)
        }
    }, [count])

    function generateBlocks(size) {
        const blocksArr = [];
        for(let i = 0; i < size * size; i++) {
            blocksArr.push(
                <div key={i} ref={el => divs.current[i] = el} className='item' onClick={() => clickHandler(i)}>
                    <img className='side back' src={images[i]} alt='' />
                    <div className='side center'>Click the card</div>
                </div>);
        }

        return blocksArr;
    }

    function suffleArray(arr) {
        return [...arr.slice(0, (size * size) / 2), ...arr.slice(0, (size * size) / 2)].sort(() => 0.5 - Math.random());
    }

    function clickHandler(index) {
        if(count === 2) return;

        if(!divs.current[index].classList.contains('turned')) {
            divs.current[index].classList.add('turned');
            setCount(count => count + 1);  
        }
    }



    return (
        <div className='container'>
            <h1 className='title '>Memory game</h1>
            <select onChange={e => setSize(e.target.value)}>
                <option value="4">4x4</option>
                <option value="6">6x6</option>
                <option value="8">8x8</option>
            </select>
            <div className='playground' ref={playgroundRef}>
                {generateBlocks(size)}
            </div>
        </div>
    );
}

export default MemoryGame;
