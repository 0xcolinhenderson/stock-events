import "./App.css";
import { Navbar, NavChild } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Navbar>
          <NavChild text="Home" ref="/home" divider={true} />
          <NavChild text="About" ref="/about" divider={true} />
          <NavChild text="Contact" ref="/contact" divider={true} />
          <NavChild text="Contact2" />
        </Navbar>
      </div>
    </div>
  );
}

export default App;
