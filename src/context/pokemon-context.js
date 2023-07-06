import {
  useContext,
  createContext,
  useState,
} from 'react';
import axios from 'axios';

const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPokemon = async () => {
    let pokemon_data = [];
    try {
      setLoading(true);
      setError(false);
      const pokemon_urls = await axios
        .get(
          'https://pokeapi.co/api/v2/pokemon/?limit=21'
        )
        .then((data) => data.data.results);
      for (let pokemon of pokemon_urls) {
        const pokemon_details = await axios
          .get(pokemon.url)
          .then((data) => data.data)
          .then((data) => {
            return {
              id: data?.id,
              name: data?.name,
              sprite: data?.sprites.front_default,
            };
          });
        pokemon_data.push(pokemon_details);
        console.log(pokemon_details);
      }
      setPokemons(pokemon_data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        getPokemon,
        loading,
        error,
      }}>
      {children}
    </PokemonContext.Provider>
  );
}

const usePokemon = () => {
  return useContext(PokemonContext);
};

export { PokemonProvider, usePokemon };
