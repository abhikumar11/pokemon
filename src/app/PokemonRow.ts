import React from 'react';

interface PokemonRowProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokemonRow: React.FC<PokemonRowProps> = ({ id, name, types, sprite }) => (
  <div>
    <img src={sprite} alt={name} />
    <p>ID: {id}</p>
    <p>Name: {name}</p>
    <p>Types: {types.join(', ')}</p>
  </div>
);

export default PokemonRow;
