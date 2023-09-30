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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginEmail />} />
          <Route path="/password" element={<UserNamePw />} />
          <Route path="/walletselection" element={<WalletOptions />} />
          <Route path="/hubmain" element={<HubMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
