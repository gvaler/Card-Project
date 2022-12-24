import logo from "./logo.svg";
import "./App.css";
import { HeaderComponent } from "./components/HeaderComponent/header.component";
import { BottomComponent } from "./components/BottomComponent/bottom.component";
import { CardComponent } from "./components/CardComponent/card.component";

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <CardComponent></CardComponent>
      <BottomComponent></BottomComponent>
    </div>
  );
}

export default App;
