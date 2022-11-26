import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;


