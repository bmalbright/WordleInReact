import React from 'react';
import { useEffect, useState } from 'react';

export default function Keypad({usedKeys}) {
    const [letters, setLetters] = useState(null)

    // changed "http://localhost:3001" to PORT
    useEffect(() => {
        fetch('https://wordlepractice.herokuapp.com/letters')
            .then(res => res.json())
            .then(json => {
                setLetters(json)
            })
    }, []);

  return (
    <div className='keypad'>
        {letters && letters.map(l => {
            const color = usedKeys[l.key]
            return (
                <div key={l.key} className={color}>{l.key}</div>
            )
        })}
    </div>
  );
};


