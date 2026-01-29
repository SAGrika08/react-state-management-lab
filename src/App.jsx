// src/App.jsx
import { useState } from 'react';

import './App.css';

const App = () => {
 const [team, setTeam] = useState([]);
 const [money,setMoney] = useState(100);
 const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]);

const handleAddFighter = (zombieFighter) => {
  if (money < zombieFighter.price) {
    console.log('not enough money');
    return;
  }

  setMoney(money - zombieFighter.price);

  setTeam([...team, zombieFighter]);

  const updatedZombieFighters = zombieFighters.filter((fighter) => 
    fighter.id !== zombieFighter.id );
  setZombieFighters(updatedZombieFighters);
};

const handleRemoveFighter = (teamMember) => {

  setMoney( money + teamMember.price);

  setZombieFighters([...zombieFighters, teamMember]);

  const updatedTeam = team.filter((fighter) => 
  fighter.id !== teamMember.id );
 setTeam(updatedTeam);
};

const totalStrength = team.reduce(
  (total, teamMember) => total + teamMember.strength,
  0
);

const totalAgility = team.reduce(
  (total, teamMember) => total + teamMember.agility,
  0
);


  return (
    <>
    <h1>Zombie Fighters</h1>
    <h2><span>Money:</span> ${money} </h2>
      <h2>Team</h2>
      <h3>Total Strength: {totalStrength}</h3>
      <h3>Total Agility: {totalAgility}</h3>

{team.length === 0 ? (
  <p>Pick some team members!</p>
) : (
  <ul>
    {team.map((teamMember) => (
      <li key={teamMember.id}>
        <img src={teamMember.img} />
        <h3>{teamMember.name}</h3>
        <p>Price: {teamMember.price}</p>
        <p>Strength: {teamMember.strength}</p>
        <p>Agility: {teamMember.agility}</p>
        <button onClick={() => handleRemoveFighter(teamMember)}>Remove</button>
      </li>
    ))}
  </ul>
)}

    <ul>
      {zombieFighters.map((zombieFighter) => (
      <li key={zombieFighter.id}>
        <img src={zombieFighter.img} />
        <h3>{zombieFighter.name}</h3>
        <p>Price: {zombieFighter.price}</p>
        <p>Strength: {zombieFighter.strength}</p>
        <p>Agility: {zombieFighter.agility}</p>
         <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
      </li>
    ))
      }</ul>
    </>
  );
}

export default App


