import "./App.css";
import "./styles/base.css";
import NavigationHeader from "./components/layout/Header";
import Pie from "./components/charts/pie";
function App() {
  return (
    <div className="App">
      <NavigationHeader></NavigationHeader>
      <Pie />
    </div>
  );
}

export default App;
