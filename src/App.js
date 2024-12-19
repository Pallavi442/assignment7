import logo from './logo.svg';
import './App.css';
import NavbarMain from './components/navbar/NavbarMain';
import PersonalLoan from './components/personalLoan/PersonalLoan';


function App() {
  return (
    <div className="App">
      <NavbarMain/>
      <PersonalLoan/>
    </div>
  );
}

export default App;
