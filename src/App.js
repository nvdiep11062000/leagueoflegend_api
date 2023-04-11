import MainPages from "./pages/MainPages";
import "./style/Global.scss";
import {Routes,Route} from 'react-router-dom';
import Headers from "./components/Header";
import ChampionShow from "./pages/ChampionShow";
import ChampionDetail from "./components/ChampionDetail";
function App() {
  return (
    <>
      <Headers/>
      <Routes>
        <Route path="/" element={<MainPages/>}/>
        <Route path="/championshow" element={<ChampionShow/>}/>
        <Route path="/championdetails/:id" element={<ChampionDetail/>}/>
      </Routes>      
    </>
    
    
  );
}

export default App;
