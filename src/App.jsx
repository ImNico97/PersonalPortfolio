import "./App.css";
import NavBar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
