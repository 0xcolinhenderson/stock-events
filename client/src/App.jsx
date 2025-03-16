import "./App.css";
import { Navbar, NavChild } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Navbar>
          <NavChild text="Home" ref="/home" divider={true} />
          <NavChild text="About" ref="/about" divider={true} />
          <NavChild text="Contact" ref="/contact" divider={true} />
          <NavChild text="Log In" special={true} />
        </Navbar>
      </div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
