import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ErrorIcon from '@mui/icons-material/Error';
import { usePokemon } from '../context/pokemon-context';

export default function PokemonPage() {
  const { pokemons, getPokemon, loading, error } =
    usePokemon();

  useEffect(() => {
    (async () => {
      await getPokemon();
    })();
  }, []);
  return (
    <>
      {loading ? (
        <HourglassBottomIcon
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            width: '100px',
            height: '100px',
          }}
        />
      ) : error ? (
        <ErrorIcon
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            width: '100px',
            height: '100px',
          }}
        />
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '1em',
            margin: '1em',
          }}>
          {pokemons?.map((pokemon) => (
            <Box
              key={pokemon.id}
              sx={{
                minWidth: '100px',
                minHeight: '100px',
                maxWidth: '250px',
                maxHeight: '250px',
                boxShadow: 2,
                borderRadius: 2,
                background: '#efefef',
              }}>
              <Box
                component='img'
                src={pokemon.sprite}></Box>
              <Typography
                variant='subtitle1'
                textAlign='center'
                fontWeight={'bold'}>
                {pokemon.name[0].toUpperCase() +
                  pokemon.name.slice(1)}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}
