import { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from "../../hooks/useGifs";
const MUGUIWARA_GIFS = ["Luffy", "Zoro", "Nami", "Ussop", "Sanji"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`)
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} />
      </form>
      <h3 className="App-title">Gifs de los Muguiwaras</h3>
      <ul>
        {MUGUIWARA_GIFS.map((muguiwara) => (
          <li key={muguiwara}>
            <Link to={`/search/${muguiwara}`}>Gifs de {muguiwara}</Link>
          </li>
        ))}
      </ul>
      <h3 className="App-title">Ultima busqueda</h3>
      <ListOfGifs gifs={gifs}/>
    </>
  );
}
