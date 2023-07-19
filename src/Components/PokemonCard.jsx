
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import './PokemonList.css';
import StarButton from './starButton.jsx';
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";

const PokemonCard = ({ name,image,types, id }) => {
  const dispatch = useDispatch();

  const typesString = types.map(elem => elem.type.name).join(', ')

  const handleOnFavorites = () =>{
    dispatch(setFavorite({pokemonId: id}))
  }

  return <Card
    style={{width:250}}
    title={ name }
    cover={<img src= {image} alt= {name} /> }
    extra={<StarButton isFavorite onClick={handleOnFavorites}/>}
  >
    <Meta description = {typesString}/>
  </Card>
}

export default PokemonCard;
