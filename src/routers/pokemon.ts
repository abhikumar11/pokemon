import { z } from 'zod';
import { createRouter } from './context';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const pokemonRouter = createRouter()
.query('getPokemon', {
    input: z.string(),
    async resolve({ input }) {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
      });
      return pokemon;
    },
  })
  .query('getPokemonArray', {
    input: z.array(z.string()),
    async resolve({ input }) {
      const pokemonArray = await prisma.pokemon.findMany({
        where: {
          name: { in: input },
        },
      });
      return pokemonArray;
    },
    
  }).query('getPokemonByType', {
    input: z.string(),
    async resolve({ input }) {
      const pokemonArray = await prisma.pokemon.findMany({
        where: { types: { has: input } },
      });
      return pokemonArray;
    },
});

 