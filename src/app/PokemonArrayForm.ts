import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import PokedexTable from './PokedexTable';

const PokemonArrayForm = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);
  const { data: pokemonArray } = trpc.useQuery(['pokemon.getPokemonArray', pokemonNames], {
    enabled: pokemonNames.length > 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonNames(e.target.value.split(',').map(name => name.trim()));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter Pokémon names separated by commas"
      />
      {pokemonArray && <PokedexTable pokemonArray={pokemonArray} />}
    </div>
  );
};

export default PokemonArrayForm;
