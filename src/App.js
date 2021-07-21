import NavBar from "./components/navBar/navBar";
import Education from "./components/education/education";
import Home from './components/home/home';
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
