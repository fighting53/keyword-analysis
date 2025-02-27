import "./App.css";
import "./styles/base.css";
import MyChart from "./components/MyChart";
import MyChart1 from "./components/MyChart1";
import MyChart2 from "./components/MyChart2";
import MyChart3 from "./components/MyChart3";
import MyChart4 from "./components/MyChart4";
import MyChart5 from "./components/MyChart5";
import MyChart6 from "./components/MyChart6";
import MyChart7 from "./components/MyChart7";
import MyChart8 from "./components/MyChart8";
import MyChart9 from "./components/MyChart9";
import MyChart10 from "./components/MyChart10";
import NavigationHeader from "./components/layout/Header";
function App() {
  return (
    <div className="App">
      <NavigationHeader></NavigationHeader>
      <MyChart10 />
      <MyChart7 />
      <MyChart8 />

      <MyChart />
      <MyChart5 />
      <MyChart9 />
      <MyChart2 />
      <MyChart6 />
      <MyChart1 />

      <MyChart3 />
      <MyChart4 />
    </div>
  );
}

export default App;
