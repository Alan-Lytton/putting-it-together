import './App.css';
import PersonCard from "./components/PersonCard";


function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Alan"} lastName = {"Lytton"} age = {33} hairColor = {"Brown"} />
      <PersonCard firstName = {"Jim"} lastName = {"Lytton"} age = {65} hairColor = {"Black"} />
      <PersonCard firstName = {"Seth"} lastName = {"Lytton"} age = {38} hairColor = {"Auburn"} />
      <PersonCard firstName = {"Elyn"} lastName = {"Lytton"} age = {22} hairColor = {"Blonde"} />
    </div>
  );
}

export default App;
