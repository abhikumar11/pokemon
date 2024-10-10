import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import PokemonTypeSelection from './PokemonTypeSelection';
import PokedexTable from './PokedexTable';

const FilterablePokedexTable = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const { data: pokemonArray } = trpc.useQuery(
    ['pokemon.getPokemonByType', selectedType],
    { enabled: !!selectedType }
  );

  return (
    <div>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
      />
      {pokemonArray && <PokedexTable pokemonArray={pokemonArray} />}
    </div>
  );
};

export default FilterablePokedexTable;
