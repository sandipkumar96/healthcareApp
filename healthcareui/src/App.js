import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouterIndex from "./router";
function App() {
  return (
    <>
      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter>
    </>
  );
}

export default App;
