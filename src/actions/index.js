import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";
import { getPokemonDetails } from "../api";

export const  setPokemons = (payload) => ({
  type:SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({
  type:SET_LOADING,
  payload,
});

export const setFavorite = (payload) =>({
  type:SET_FAVORITE,
  payload
})

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch)=> {
  const pokemonDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon))
  );
  dispatch(setPokemons(pokemonDetailed));
}