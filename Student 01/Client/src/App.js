import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import flight from "./pages/flight/flight";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flight" element={<List/>}/>
        <Route path="/flight/:id" element={<flight/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
