import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils 2" aboutText="About text" />
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze" />
        <About />
      </div>      
    </div>
  );
}

export default App;
