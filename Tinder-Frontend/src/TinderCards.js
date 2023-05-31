import React, { useState } from 'react';
import './TinderCard.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Nithin Varma',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfsn_YaoCMZXJS76UQv9v-AcyJUR3IoB7FnISfOQ4lQ&s',
    },
    {
      name: 'Elon Musk',
      url:
        'https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg',
    },
  ]);

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
                style={{ backgroundImage: `url(${person.url})` }}
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