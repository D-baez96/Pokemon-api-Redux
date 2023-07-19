import PokemonList from './Components/PokemonList';
import Searcher from './Components/Searcher';
import { Col, Spin } from 'antd';
import logo from './Statics/logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getPokemons } from './api';
import { shallowEqual, useDispatch } from 'react-redux';
import { getPokemonsWithDetails, setLoading } from './actions';
import { useSelector } from 'react-redux';

function App() {
  const pokemons = useSelector(state => state.getIn(['data','pokemons'],shallowEqual)).toJS();

  const loading = useSelector(state => state.getIn(['ui','loading']));
  
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes= await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false))
    };
    
    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span ={4} offset={10}>
        <img src= {logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>

      {loading ? (<Col>
        <Spin spinning size='large'/>
      </Col>
      ): (
        <PokemonList pokemons={pokemons}/>
      )}
      
      
    </div>
  );
}



export default App;
