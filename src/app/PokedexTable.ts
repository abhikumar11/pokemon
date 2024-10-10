import React from 'react';
import PokemonRow from './PokemonRow';

interface PokedexTableProps {
  pokemonArray: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }[];
}

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemonArray }) => (
  <div>
    {pokemonArray.map((pokemon) => (
      <PokemonRow key={pokemon.id} {...pokemon} />
    ))}
  </div>
);

export default PokedexTable;
