import useGlobalGifs from "../../hooks/useGlobalGifs";
import Gif from '../../components/Gif'

export default function Detail({ params }) {
  const  gifs  = useGlobalGifs();
  const gif = gifs.find(gif => gif.id === params.id)
  
  console.log(gif);
  return <Gif {...gif}/>;
}