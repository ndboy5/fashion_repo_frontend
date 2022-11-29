import "./App.css";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import Nav from "./components/home/nav";
import Carousel from "./components/home/carousel";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Carousel />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
