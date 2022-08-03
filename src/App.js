import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import {Route, Link} from "wouter"


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/luffy">gifs de luffy</Link>
        <Link to="/gif/zoro">gifs de zoro</Link>
        <Link to="/gif/nami">gifs de nami</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
         />
      </section>
    </div>
  );
}

export default App;
