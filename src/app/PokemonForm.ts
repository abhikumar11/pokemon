import React, { useState } from 'react';
import { trpc } from '../utils/trpc'; // Assuming you have tRPC set up
import PokemonRow from './PokemonRow';

const PokemonForm = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { data: pokemon } = trpc.useQuery(['pokemon.getPokemon', pokemonName], {
    enabled: !!pokemonName,
  });

  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      {pokemon && <PokemonRow {...pokemon} />}
    </div>
  );
};

export default PokemonForm;
