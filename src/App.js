import "./App.css";
import SimpleContainer from "./components/item-list-conteiner/Conteiner";
import ResponsiveAppBar from "./components/navbar/NavBar";
function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <SimpleContainer />
    </div>
  );
}

export default App;
