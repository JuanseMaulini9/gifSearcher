import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";
import Spinner from "../../components/Spinner";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });
  // const [loading, setLoading] = useState(false)
  // const [gifs, setGifs] = useState([])

  // useEffect(()=>{
  //   setLoading(true)
  //   getGifs({keyword})
  //   .then(gifs=>{
  //     setGifs(gifs)
  //     setLoading(false)
  //   })
  // }, [keyword])

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
}
