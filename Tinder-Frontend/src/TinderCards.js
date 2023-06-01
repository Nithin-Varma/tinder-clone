import React, { useState, useEffect } from 'react';
import './TinderCard.css';
import TinderCard from 'react-tinder-card';
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const req = await axios.get('/cards');
      setPeople(req.data);
    }
    FetchData();
  }, [])

  console.log(people);


  return (
    <div className='tinderCards'>
        <div className='tinder_cardContainer'>
            {people.map((person) => (
            <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up', 'down']}
                onSwipe={(dir) => console.log('swiped ' + dir)}
                onCardLeftScreen={() => console.log(person.name + ' left the screen')}
            >
                <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className='card'
                >
                <h3>{person.name}</h3>
                </div>
            </TinderCard>
        
        ))}
      </div>
    </div>
  );
}

export default TinderCards;