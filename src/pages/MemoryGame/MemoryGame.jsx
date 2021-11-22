import React, { useState, useEffect, createRef } from 'react';
import './memoryGame.scss';
import images from '../../assets/memoryGame/2.jpg';

console.log(images)

const MemoryGame = () => {
    const [size, setSize] = useState('4');
    const myRef = createRef();

    const clickHandler = (e) => {
        e.target.parentNode.classList.toggle('turned');
    }

    const generateBlocks = (size) => {
        const blocksArr = [];
        for(let i = 0; i < size * size; i++) {
        blocksArr.push(<div key={i} className='item' onClick={clickHandler}>
                <img className='side back' src={images} alt='' />
                <div className='side center'>Click the card</div>
            </div>);
        }

        return blocksArr;
    }

    useEffect(() => {
        myRef.current.style.gridTemplateColumns = `repeat(${size}, 100px)`
    })

    return (
        <div className='container'>
            <h1 className='title '>Memory game</h1>
            <select onChange={e => setSize(e.target.value)}>
                <option value="4">4x4</option>
                <option value="6">6x6</option>
                <option value="8">8x8</option>
            </select>
            <div className='playground' ref={myRef}>
                {generateBlocks(size)}
            </div>
            
        </div>
    );
}

export default MemoryGame;
