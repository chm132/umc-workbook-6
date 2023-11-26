import { BrowserRouter, Route, Routes} from "react-router-dom";
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";



function App() {
  return (
    <BrowserRouter>
		  <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/TV" element={<TV/>} />
            <Route path="/Celebirity" element={<Celebirity/>} />
            <Route path="/Movies" element={<Movies/>} />
            <Route path="/*" element={<NotFound />} />   
            <Route path="/movie/:title" element={<MovieDetail />} /> 
            </Routes>
     </BrowserRouter>
  );
}

export default App;