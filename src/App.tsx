import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Characters from "./components/Characters";

const App = () => {
  return (
    <BrowserRouter>
      <Characters />
    </BrowserRouter>
  );
};

export default App;
