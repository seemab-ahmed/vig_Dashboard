import './App.css';
import LoginEmail from './components/auth-verif/LoginEmail';
import UserNamePw from './components/auth-verif/UserNamePw';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WalletOptions from './components/walletConnection/WalletOptions';
import HubMain from './components/main/HubMain';
import StatsMain from './components/stastistics/StatsMain';
import Fav from './components/Favourite/Fav';
import OddsCal from './components/calculateodds/OddsCal';
import GameInfo from './components/gameinformation/GameInfo';
import NewsOfDay from './components/newsoftheday/NewsOfDay';
import BettingMechSpecific from './components/bettingmechenic/BettingMechSpecific';
import SpecificPost from './components/auth-verif/specificpost/SpecificPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginEmail />} />
          <Route path="/password" element={<UserNamePw />} />
          <Route path="/gameInfo" element={<GameInfo />} />
          <Route path="/oddscal" element={<OddsCal />} />
          <Route path="/walletselection" element={<WalletOptions />} />
          <Route path="/hubmain" element={<HubMain />} />
          <Route path="/statsmain" element={<StatsMain />} />
          <Route path="/favourite" element={<Fav />} />
          <Route path="/calculateodds" element={<OddsCal />} />
          <Route path="/gameinformation" element={<GameInfo />} />
          <Route path="/newsofday" element={<NewsOfDay />} />
          <Route path="/bettingmechspecific" element={<BettingMechSpecific/> } />
          <Route path="/specificPost" element={<SpecificPost/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
